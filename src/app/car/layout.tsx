import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import "../../../SCSS/CommonSCSS/ProposalForms.scss";
import useIsMobile from "@/utils/MobileProvider";
import Navbar from "@/components/common/desktop/Navbar/Navbar";
import MNavbar from "@/components/common/mobile/MNavbar/m-navbar";
import CarLeftSidebar from "@/components/car/car-left-sidebar";

function CarProposalLayout() {
  const isMobile = useIsMobile();

  return (
    <Box className={`${isMobile ? "proposalWrapper_m" : "proposalWrapper"}`}>
      <>{isMobile ? <MNavbar /> : <Navbar />}</>

      <Grid container spacing={3} className="pb-0">
        {/* Left Sidebar */}
        {!isMobile && <CarLeftSidebar />}
        <Grid xs className="proposalContentSection">
          {}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CarProposalLayout;
