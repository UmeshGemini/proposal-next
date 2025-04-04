import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Link } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";
import "../MNavbar/MNavbar.scss";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useAppSelector } from "../../Store/hooks";
import { useEffect, useState } from "react";
import { isEmpty } from "../../SupportingFiles/HelpingFunction";

const MNavbar = () => {
  const navigate = useNavigate();
  const { TW, Car, Health, Term } = useAppSelector((state) => state);

  const CUS = Car?.CUS_TYPE || TW?.CUS_TYPE;

  const [param, setParam] = useState("");
  const [type, setType] = useState("");
  const [userType, setUserType] = useState<string>("");

  useEffect(() => {
    const windowURL = window.location.search;
    const params = new URLSearchParams(windowURL);
    const type = params.get("type");
    const payment = params.get("cus_type");
    const encodedUserType = params.get("user_type");
    const decodedUserType = encodedUserType ? atob(encodedUserType) : "";
    setType(type || "");
    setParam(payment || "");
    setUserType(decodedUserType || "");
  }, []);

  return (
    <Box className="mProposalNavbar">
      {!CUS && (
        <Grid container columnSpacing={0} rowSpacing={3}>
          <Grid xs={12}>
            {userType === "agent" ? null : (
              <Link
                className="backStep"
                onClick={(e) => {
                  window.history.back();
                }}
              >
                {TW.REDIRECTED ||
                Car.REDIRECTED ||
                Health.REDIRECTED ||
                Term.REDIRECTED ? (
                  <ArrowBackIosNewRoundedIcon />
                ) : (
                  <ArrowBackIcon />
                )}
              </Link>
            )}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default MNavbar;
