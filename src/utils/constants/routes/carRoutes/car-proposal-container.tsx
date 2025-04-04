import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Outlet } from "react-router-dom";
import CarLeftSidebar from "../../../Component/CarLeftSidebar/CarLeftSidebar";
import MNavbar from "../../../Component/MNavbar/MNavbar";
import Navbar from "../../../Component/Navbar/Navbar";
import "../../../SCSS/CommonSCSS/ProposalForms.scss";
import useIsMobile from "../../../SupportingFiles/MobileProvider";

function CarProposalContainer() {
  const isMobile = useIsMobile();

  return (
    <Box className={`${isMobile ? "proposalWrapper_m" : "proposalWrapper"}`}>
      <>{isMobile ? <MNavbar /> : <Navbar />}</>

      <Grid container spacing={3} className="pb-0">
        {/* Left Sidebar */}
        {!isMobile && <CarLeftSidebar />}
        <Grid xs className="proposalContentSection">
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CarProposalContainer;
