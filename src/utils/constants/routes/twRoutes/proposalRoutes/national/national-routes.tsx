import { Route, Routes } from "react-router";
// import NationalCKYCContainer from "../../../../../Container/ckyc-node/national/national-ckyc-container";
import AddressDetailsContainer from "../../../../../Container/tw-node/common/AddressDetailsContainer";
import NomineeDetailsContainer from "../../../../../Container/tw-node/common/NomineeDetailsContainer";
import ReviewDetailsContainer from "../../../../../Container/tw-node/common/ReviewDetailsContainer";
import VehicleDetailsContainer from "../../../../../Container/tw-node/common/VehicleDetailsContainer";
// import OwnerDetailsContainer from "../../../../../Container/tw-node/national/owner-details-container";
import { CKYC_ROUTES } from "../../../../Path/CKYCRoutes";
import { TW_ROUTES } from "../../../../Path/TWRoutes";
import TWProposalContainer from "../../tw-proposal-container";

export const NATIONAL_ROUTES = (
  <Routes>
    <Route path={TW_ROUTES.PROPOSAL_PAGE} element={<TWProposalContainer />}>
      {/* <Route path={CKYC_ROUTES.CKYC} element={<NationalCKYCContainer />} />
      <Route
        path={TW_ROUTES.OWNER_DETAILS}
        element={<OwnerDetailsContainer />}
      /> */}
      <Route
        path={TW_ROUTES.VEHICLE_DETAILS}
        element={<VehicleDetailsContainer />}
      />
      <Route
        path={TW_ROUTES.NOMINEE_DETAILS}
        element={<NomineeDetailsContainer />}
      />
      <Route
        path={TW_ROUTES.ADDRESS_DETAILS}
        element={<AddressDetailsContainer />}
      />
      <Route
        path={TW_ROUTES.PREVIEW_DEATILS}
        element={<ReviewDetailsContainer />}
      />
    </Route>
  </Routes>
);
