import { Route, Routes } from "react-router";
import AddressDetailsContainer from "../../../../../Container/car-node/common/AddressDetailsContainer";
import NomineeDetailsContainer from "../../../../../Container/car-node/common/NomineeDetailsContainer";
import ReviewDetailsContainer from "../../../../../Container/car-node/common/ReviewDetailsContainer";
import VehicleDetailsContainer from "../../../../../Container/car-node/common/VehicleDetailsContainer";
import NationalCKYCContainer from "../../../../../Container/ckyc-node/national/NationalCKYCContainer";
import { CKYC_ROUTES } from "../../../../Path/CKYCRoutes";
import { CAR_ROUTES } from "../../../../Path/CarRoutes";
import CarProposalContainer from "../../car-proposal-container";
import NationalManualKYCContainer from "../../../../../Container/ckyc-node/national/NationalManualKYCContainer";
import OwnerDetailsContainer from "../../../../../Container/car-node/national/OwnerDetailsContainer";

export const NATIONAL_ROUTES = (
  <Routes>
    <Route path={CAR_ROUTES.PROPOSAL_PAGE} element={<CarProposalContainer />}>
      <Route path={CKYC_ROUTES.CKYC} element={<NationalCKYCContainer />} />
      <Route
        path={CKYC_ROUTES.MANUAL_CKYC}
        element={<NationalManualKYCContainer />}
      />
      <Route
        path={CAR_ROUTES.OWNER_DETAILS}
        element={<OwnerDetailsContainer />}
      />
      <Route
        path={CAR_ROUTES.VEHICLE_DETAILS}
        element={<VehicleDetailsContainer />}
      />
      <Route
        path={CAR_ROUTES.NOMINEE_DETAILS}
        element={<NomineeDetailsContainer />}
      />
      <Route
        path={CAR_ROUTES.ADDRESS_DETAILS}
        element={<AddressDetailsContainer />}
      />
      <Route
        path={CAR_ROUTES.PREVIEW_DEATILS}
        element={<ReviewDetailsContainer />}
      />
    </Route>
  </Routes>
);
