import {
  Box,
  useMediaQuery, 
  Typography, 
  useTheme, 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";
import HomePageImage from "./images/homepage.png";
import HomePageMobileImage from "./images/homeMobile.png";
import Projects from "./images/projects.png";
import ProjectsMobile from "./images/projectsMobile.png";

const Examples = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();


  return (
    <Box>
    <Navbar />
    <Box textAlign="center">
      <Box mt="6%" display="flex" flexDirection={isNonMobileScreens ? "row" : "column"}>
        <Box>
          <img
            style={{
              maxWidth: isNonMobileScreens ? "50vw" : "80vw",
              height: "auto",
              border: `1.5px solid ${palette.primary.light}`,
              borderRadius: "8%",
              marginBottom: isNonMobileScreens ? 0 : "20px",
            }}
            src={HomePageImage}
            alt="homepage"
          />
          <img
            style={{
              maxWidth: isNonMobileScreens ? "13vw" : "80vw",
              height: "auto",
              border: `1.5px solid ${palette.primary.light}`,
              borderRadius: "8%",
            }}
            src={HomePageMobileImage}
            alt="homepage"
          />
        </Box>
        
      </Box>
      <Box mt="6%" display="flex" flexDirection={isNonMobileScreens ? "row" : "column"}>
        <Box>
          <img
            style={{
              maxWidth: isNonMobileScreens ? "50vw" : "80vw",
              height: "auto",
              border: `1.5px solid ${palette.primary.light}`,
              borderRadius: "8%",
              marginBottom: isNonMobileScreens ? 0 : "20px",
            }}
            src={Projects}
            alt="homepage"
          />
          <img
            style={{
              maxWidth: isNonMobileScreens ? "13vw" : "80vw",
              height: "auto",
              border: `1.5px solid ${palette.primary.light}`,
              borderRadius: "8%",
            }}
            src={ProjectsMobile}
            alt="homepage"
          />
        </Box>
        
      </Box>
    </Box>
  </Box>
  )
}

export default Examples;