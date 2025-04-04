import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomButton from "../../../../Component/CustomButton/CustomButton";
import Navbar from "../../../../Component/Navbar/Navbar";
import { useAppSelector } from "../../../../redux/hooks";
import { FRONTEND_DOMAIN } from "../../../../URLCollection/Domain";
import "./MInspectionConf.scss";

function MInspectionConf() {
  const { OWNER_DETAILS, create_proposal_response } = useAppSelector(
    (state) => state.Car
  );

  return (
    <>
      <Box className="mpolicyConfirmWrapper ">
        <Navbar />
        <Grid container className="innerWrapper">
          <Grid xs={12} spacing={3} className="mb-6 imgsec">
            <img src="../images/policy-confirmation.svg" alt="" />
          </Grid>
          <Grid xs={12} spacing={3}>
            <>
              <h3 className="mb-4">Dear {OWNER_DETAILS.name.value}</h3>
              <p className="mb-5">
                Just a few steps left. We have sent a quick inspection link to
                your registered mobile number. Follow the steps, take a few
                pictures, and your policy will be issued quickly.
              </p>
              <p className="dwnld_p mb-8">
                break-in ID/ Transaction no/ Application no :{" "}
                {create_proposal_response.BreakinId}
              </p>
            </>
          </Grid>
          <Grid xs={12} textAlign="center">
            <div className="ctaBtn">
              <CustomButton
                onClickFunction={() => {
                  window.location.href = FRONTEND_DOMAIN;
                }}
                text_name={"Go to Home"}
                class_name="greenXlBtn"
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MInspectionConf;
