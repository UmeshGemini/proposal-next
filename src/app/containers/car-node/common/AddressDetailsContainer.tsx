import { CAR_SERVICES } from "@/services/car-node/CarServices";
import { useAppSelector } from "@/store/hooks";
import { CarSlice } from "@/store/slices/carSlice";
import { TAddressDetails } from "@/store/types/Common/TAddressDetails";
import { isEmpty, validatePincode } from "@/utils/helpers";
import useIsMobile from "@/utils/MobileProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddressDetailsContainer = () => {
  const isMobile = useIsMobile();
  const navigate = useRouter();

  const dispatch = useDispatch();
  const {
    ADDRESS_DETAILS,
    ADD_FORM_RESPONSE,
    SELECTED_QUOTE_DATA,
    REDIRECTED,
  } = useAppSelector((state) => state.Car);

  const [pageStatus, setPageStatus] = useState<number>(1);

  // Permanent Address
  const [permanentAddress, setPermanentAddress] =
    useState<TAddressDetails>(ADDRESS_DETAILS);

  const updateMasterState = (attrName: any, value: any) => {
    if (attrName === "pageStatus") {
      validateForm();
    } else if (attrName === "backbutton") {
      navigate.back();
    } else {
      attrName[3]({
        ...attrName[2],
        [attrName[0]]: {
          [attrName[1]]: value,
          warning:
            attrName[0] === "pincode"
              ? !validatePincode(value)
              : isEmpty(value),
        },
      });
    }
  };

  const handleClick = () => {
    setPermanentAddress({
      ...permanentAddress,
      isMailingAddressSame: !permanentAddress.isMailingAddressSame,
    });
  };

  const GetCityStateByPin = (key: string, value: any) => {
    const onSuccess = (res: any) => {
      const results = res;
      const error = results.error;
      if (error === false) {
        const response = results?.response;
        const city = response?.city_name;
        const state = response?.state_name;
        let updatedPermanentAddress: TAddressDetails = { ...permanentAddress };
        if (key === "cityState") {
          updatedPermanentAddress = {
            ...updatedPermanentAddress,
            city: city,
            state: state,
          };

          setPermanentAddress(updatedPermanentAddress);
        } else if (key === "mailingAddresscityState") {
          updatedPermanentAddress = {
            ...updatedPermanentAddress,
            mailingCity: city,
            mailingState: state,
          };

          setPermanentAddress(updatedPermanentAddress);
        }
      }
    };

    const onError = (err: any) => {
      console.log("error", err);
    };

    let param = {
      pincode: value,
    };

    CAR_SERVICES.GetCityStateByPin(onSuccess, onError, param);
  };

  const validateForm = () => {
    let data: TAddressDetails = { ...permanentAddress };
    if (data.isMailingAddressSame) {
      data = {
        ...data,
        pincode: {
          ...data.pincode,
          warning: isEmpty(data.pincode.value),
        },
        addressLineOne: {
          ...data.addressLineOne,
          warning: isEmpty(data.addressLineOne.value),
        },
        addressLineTwo: {
          ...data.addressLineTwo,
          warning: isEmpty(data.addressLineTwo.value),
        },
        mailingPinCode: data.pincode,
        mailingAddressLineOne: data.addressLineOne,
        mailingAddressLineTwo: data.addressLineTwo,
        mailingCity: data.city,
        mailingState: data.state,
      };
    } else {
      data = {
        ...data,
        pincode: {
          ...data.pincode,
          warning: !validatePincode(data.pincode.value),
        },
        addressLineOne: {
          ...data.addressLineOne,
          warning: isEmpty(data.addressLineOne.value),
        },
        addressLineTwo: {
          ...data.addressLineTwo,
          warning: isEmpty(data.addressLineTwo.value),
        },
        mailingPinCode: {
          ...data.mailingPinCode,
          warning: isEmpty(data.mailingPinCode.value),
        },
        mailingAddressLineOne: {
          ...data.mailingAddressLineOne,
          warning: isEmpty(data.mailingAddressLineOne.value),
        },
        mailingAddressLineTwo: {
          ...data.mailingAddressLineTwo,
          warning: isEmpty(data.mailingAddressLineTwo.value),
        },
      };
    }
    // console.log('dataa',data)
    setPermanentAddress(data);
    let hasError =
      data.pincode.warning ||
      data.addressLineOne.warning ||
      data.addressLineTwo.warning;

    if (!data.isMailingAddressSame) {
      hasError =
        data.mailingPinCode.warning ||
        data.mailingAddressLineOne.warning ||
        data.mailingAddressLineTwo.warning ||
        hasError ||
        isEmpty(data.mailingCity) ||
        isEmpty(data.mailingState);
    }

    if (!hasError) {
      if (isEmpty(data.city) || isEmpty(data.state)) {
        toast.error("Select valid pincode.");
        return;
      }
      if (isEmpty(data.mailingCity) || isEmpty(data.mailingState)) {
        toast.error("Select valid mailing pincode.");
        return;
      }
      CAPTURE_DATA(data);
      dispatch(CarSlice.actions.ADDRESS_DETAILS(data));
    }
  };

  // updatedata

  const CAPTURE_DATA = (data: TAddressDetails) => {
    let dto: any = {
      quote_no: ADD_FORM_RESPONSE.quote_no,
      addressPPincode: data.pincode.value,
      addressPHouse: data.addressLineOne.value,
      addressPArea: data.addressLineTwo.value,
      addressPCity: data.city,
      addressPState: data.state,
      addressMailingSame: data.isMailingAddressSame ? "1" : "0",
      addressMPincode: data.mailingPinCode.value,
      addressMHouse: data.mailingAddressLineOne.value,
      addressMArea: data.mailingAddressLineTwo.value,
      addressMCity: data.mailingCity,
      addressMState: data.mailingState,
      section: "address_details",
      insurance_type: "CAR",
    };
    const onSuccess = (res: any) => {
      const response = res;
      const error = response.error;

      if (error === false) {
        navigate.push(
          `${CAR_ROUTES.PROPOSAL_PAGE}/${CAR_ROUTES.PREVIEW_DEATILS}?type=CAR&companyCode=${SELECTED_QUOTE_DATA.quotationDetail?.CompanyDetails.company_code}&quote_no=${ADD_FORM_RESPONSE.quote_no}&product_id=${SELECTED_QUOTE_DATA.quotationDetail?.productDetails.id}`
        );
      }
    };

    const onError = (res: any) => {
      console.log("Error");
    };
    CAR_SERVICES.Capture_data(onSuccess, onError, dto);
  };

  useEffect(() => {
    if (validatePincode(permanentAddress.pincode.value)) {
      GetCityStateByPin("cityState", permanentAddress.pincode.value);
    }
  }, [permanentAddress.pincode.value]);

  useEffect(() => {
    if (!permanentAddress.isMailingAddressSame) {
      GetCityStateByPin(
        "mailingAddresscityState",
        permanentAddress.mailingPinCode.value
      );
    }
  }, [permanentAddress.mailingPinCode.value]);

  return (
    <>
      {isMobile ? (
        <MAddressDetails
          permanentAddress={permanentAddress}
          updateMasterState={updateMasterState}
          handleClick={handleClick}
          setPermanentAddress={setPermanentAddress}
          pageStatus={pageStatus}
          validateForm={validateForm}
        />
      ) : (
        <AddressDetails
          permanentAddress={permanentAddress}
          updateMasterState={updateMasterState}
          handleClick={handleClick}
          setPermanentAddress={setPermanentAddress}
          pageStatus={pageStatus}
          validateForm={validateForm}
        />
      )}
    </>
  );
};

export default AddressDetailsContainer;
