import {
  Box,
  useMediaQuery, 
  Typography, 
  useTheme, 
  Button,
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
  const navigate = useNavigate();


  return (
    <Box>
    <Navbar />
    <Box textAlign="center">
      <Typography
      color={palette.primary.light}
      variant = "h2"
      >
        Free Tier
      </Typography>
      <Typography
          color={palette.primary.light}
          variant = "h4"
          sx= {{
            mb: "1.5rem",
            fontStyle: "italic"
          }}
          fontWeight={500}
        >Simple, mobile responsive site made with pure HTML/CSS</Typography>
      <Box 
      mt="6%" 
      display="flex" 
      justifyContent="center"
      flexDirection={isNonMobileScreens ? "row" : "column"}>
        <Box>
          <img
            style={{
              maxWidth: isNonMobileScreens ? "50vw" : "80vw",
              marginRight: isNonMobileScreens ? "50px" : undefined,
              height: "auto",
              border: `3.5px solid ${palette.secondary.blue}`,
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
              border: `3.5px solid ${palette.secondary.blue}`,
              borderRadius: "8%",
            }}
            src={HomePageMobileImage}
            alt="homepage"
          />
        </Box>
        
      </Box>
      <Box 
      mt="6%" 
      display="flex" 
      justifyContent="center"
      flexDirection={isNonMobileScreens ? "row" : "column"}>
        <Box>
          <img
            style={{
              maxWidth: isNonMobileScreens ? "50vw" : "80vw",
              marginRight: isNonMobileScreens ? "50px" : undefined,
              height: "auto",
              border: `3.5px solid ${palette.secondary.blue}`,
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
              border: `3.5px solid ${palette.secondary.blue}`,
              borderRadius: "8%",
            }}
            src={ProjectsMobile}
            alt="homepage"
          />
        </Box>
        
      </Box>

      <Button
                        onClick={() => navigate("/home")}
                        sx = {{
                            width: isNonMobileScreens ? "20%" : "40%",
                            m:"2rem 0",
                            p:"1rem",
                            backgroundColor: palette.neutral.dark,
                            color:palette.secondary.main,
                            border: `1.5px solid ${palette.neutral.dark}`,
                            "&:hover": {color: palette.secondary.blue}
                        }}
                        >
                            Go Back Home
                        </Button>
    </Box>
  </Box>
  )
}

export default Examples;