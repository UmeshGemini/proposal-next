import CustomButton from "../../../../Component/CustomButton/CustomButton";
import Navbar from "../../../../Component/Navbar/Navbar";
import { Grid, Box, Button } from "@mui/material";
import "./NstpConf.scss"
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";


function NstpConf() {
  const { PAYMENT_DATA } = useAppSelector((state) => state.Health);

  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
      >
        <Grid item xs={12} md={8}>
          <Box
            className="msgBox"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              textAlign: "center",
              padding: "24px",
              position: "relative",
            }}
          >
            <Box mb={3}>
              <img
                src="images/call-agent.svg"
                alt="Agent calling"
              />
            </Box>
            <Box>
              <p style={{ fontSize: "32px", fontWeight: "bold", lineHeight: "1.2", marginBottom: "8px" }}>
                Thank you for choosing to purchase our Lifeline product.
              </p>
              <p style={{ fontSize: "24px", lineHeight: "1.2", marginBottom: "8px", fontWeight: "500" }}>
                QuoteID : {PAYMENT_DATA.QuoteId}
              </p>
              <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px", lineHeight: "1.2" }}>
                {PAYMENT_DATA?.confMessage}
              </p>
            </Box>
            <CustomButton
              onClickFunction={() => {
                window.location.href = "/";
              }}
              text_name={"Go to Home"}
              class_name="primaryBtn mr-4"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default NstpConf;