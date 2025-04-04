import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { useAppSelector } from "../../Store/hooks";
import { isEmpty } from "../../SupportingFiles/HelpingFunction";
import { CLIENTS } from "../../URLCollection/Clients";
import { CRM_DOMAIN, FRONTEND_DOMAIN } from "../../URLCollection/Domain";
import "../Navbar/Navbar.scss";

const Navbar: React.FC = () => {
  const [logoSrc, setLogoSrc] = React.useState<string>("");
  const { TW, Car } = useAppSelector((state) => state);

  const imagePaths = {
    [CLIENTS.AMAZE]: [
      "../images/clients/bimastreet.svg",
      "./images/clients/bimastreet.svg",
    ],
    [CLIENTS.GROWWINSURANCE]: [
      "../images/clients/groww-insurance.svg",
      "./images/clients/groww-insurance.svg",
    ],
    [CLIENTS.JIO]: [
      "../images/clients/jio.svg",
      "./images/clients/jio.svg",
      "../../images/clients/jio.svg",
    ],
    [CLIENTS.MOTILAL]: [
      "../images/clients/motilal.svg",
      "./images/clients/motilal.svg",
    ],
    [CLIENTS.MOTILAL_PHP]: [
      "../images/clients/motilal.svg",
      "./images/clients/motilal.svg",
    ],
    [CLIENTS.MUTHOOT]: [
      "../images/clients/muthoot.svg",
      "./images/clients/muthoot.svg",
    ],
    [CLIENTS.CLICKPOLICY]: [
      "../images/clients/1clickpolicy_logo.svg",
      "./images/clients/1clickpolicy_logo.svg",
    ],
    [CLIENTS.POLICYPARIVAAR]: [
      "../images/clients/policyparivaar-logo.svg",
      "./images/clients/policyparivaar-logo.svg",
    ],
    [CLIENTS.UNISON]: [
      "../images/clients/unison-logo.svg",
      "./images/clients/unison-logo.svg",
    ],
    [CLIENTS.BESECURED]: [
      "../images/clients/beScured_logo.svg",
      "./images/clients/beScured_logo.svg",
    ],
    [CLIENTS.WALNNUT]: [
      "../images/clients/jb-boda-logo.svg",
      "./images/clients/jb-boda-logo.svg",
    ],
    [CLIENTS.AHALIA]: [
      "../images/clients/policyfirst-logo.svg",
      "./images/clients/policyfirst-logo.svg",
    ],
    // Add more clients as needed
  };

  React.useEffect(() => {
    const hostname = window.location.hostname;
    const navbar = document.querySelector(".proposalNavbar");

    if (!navbar) {
      console.warn("Navbar element with class '.proposalNavbar' not found.");
      return;
    }

    const paths = imagePaths[hostname];

    if (!paths || paths.length === 0) {
      console.warn(`No logo paths defined for hostname: ${hostname}`);
      return;
    }

    let isMounted = true; // Prevent state updates if component unmounts

    const loadLogo = async () => {
      for (const path of paths) {
        try {
          const img = new Image();
          img.src = path;

          // Image onload error
          img.onerror = () => {
            console.error(`Failed to load logo (onerror): ${path}`);
          };

          await img.decode(); // Ensures the image is fully loaded
          if (isMounted) {
            setLogoSrc(path);
            console.info(`Logo loaded successfully from: ${path}`);
            break; // Use the first successfully loaded image
          }
        } catch (error) {
          console.error(`Failed to decode image at path: ${path}`, error);
        }
      }
    };

    loadLogo();

    return () => {
      isMounted = false; // Cleanup to prevent updates if unmounted
    };
  }, []); // No need for dependencies as hostname will not change during runtime

  const handleLogoClick = () => {
    if (window.location.hostname === CLIENTS.JIO) {
      return;
    }
    if (
      isEmpty(TW.ADD_FORM_RESPONSE.utm_medium) &&
      isEmpty(Car.ADD_FORM_RESPONSE.utm_medium)
    ) {
      window.location.href = FRONTEND_DOMAIN;
    } else {
      window.location.href = CRM_DOMAIN;
    }
  };

  return (
    <Box className="proposalNavbar">
      <Grid container columnSpacing={3} paddingTop={0} paddingBottom={0}>
        <Grid xs={12}>
          <Box
            sx={{ width: "220px", height: "44px", cursor: "pointer" }}
            display="flex"
            alignItems="center">
            {TW.REDIRECTED || Car.REDIRECTED ? (
              <h5 style={{ fontSize: "16px" }}>
                {TW.REDIRECTED ? "Two Wheeler Insurance" : "Car Insurance"}
              </h5>
            ) : (
              <img
                onClick={handleLogoClick}
                src={logoSrc}
                alt="Brand Logo"
                style={{ height: "44px", maxWidth: "100%", width: "100%" }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
