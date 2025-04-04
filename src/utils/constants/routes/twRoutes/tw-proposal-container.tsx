import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Outlet } from "react-router-dom";
import "../../../SCSS/CommonSCSS/ProposalForms.scss";
import useIsMobile from "../../../SupportingFiles/MobileProvider";
import Navbar from "../../../Component/Navbar/Navbar";
import MNavbar from "../../../Component/MNavbar/MNavbar";
import TWLeftSidebar from "../../../Component/TWLeftSideBar/TWLeftSidebar";

function TWProposalContainer() {
  const isMobile = useIsMobile();
  return (
    <Box className={`${isMobile ? "proposalWrapper_m" : "proposalWrapper"}`}>
      <>{isMobile ? <MNavbar /> : <Navbar />}</>
      <Grid container spacing={3} className="pb-0">
        {!isMobile && <TWLeftSidebar />}
        <Grid xs className="proposalContentSection">
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TWProposalContainer;
