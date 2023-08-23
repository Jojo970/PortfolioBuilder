import OneProject from "./forms/OneProject";
import TwoProject from "./forms/TwoProject";
import ThreeProject from "./forms/ThreeProject";
import FourProject from "./forms/FourProject";
import { Box, Typography, useTheme, FormControl, InputLabel, Select, MenuItem, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "scenes/navbar";


const MakerPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { palette } = useTheme();
  const [numOfProjects, setNumOfProjects] = useState(1)
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);

  const handleChange = (event) => {
    setNumOfProjects(event.target.value)

    // switch(numOfProjects) {
    //   case 1:
    //     setShowOne(true);
    //     setShowTwo(false);
    //     setShowThree(false);
    //     setShowFour(false);
    //     break;
    //   case 2:
    //     setShowOne(false);
    //     setShowTwo(true);
    //     setShowThree(false);
    //     setShowFour(false);
    //     break;
    //   case 3:
    //     setShowOne(false);
    //     setShowTwo(false);
    //     setShowThree(true);
    //     setShowFour(false);
    //     break;
    //   case 4:
    //     setShowOne(false);
    //     setShowTwo(false);
    //     setShowThree(false);
    //     setShowFour(true);
    //     break;
      

    //   default:
    //     break
    // }

  }

  useEffect(() => {
    switch (numOfProjects) {
      case 1:
        setShowOne(true);
        setShowTwo(false);
        setShowThree(false);
        setShowFour(false);
        break;
      case 2:
        setShowOne(false);
        setShowTwo(true);
        setShowThree(false);
        setShowFour(false);
        break;
      case 3:
        setShowOne(false);
        setShowTwo(false);
        setShowThree(true);
        setShowFour(false);
        break;
      case 4:
        setShowOne(false);
        setShowTwo(false);
        setShowThree(false);
        setShowFour(true);
        break;
      default:
        break;
    }
  }, [numOfProjects]);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        textAlign="center"
      >
        <Box
          m = "2rem auto"
          p = "2rem 2rem"
          width= { isNonMobileScreens ? "50%" : "93%"}
        >
          <Typography
          color={palette.primary.light}
          variant = "h4"
          sx= {{
            mb: "1.5rem",
          }}
          fontWeight={500}
          >
          How many projects would you like on your portfolio?
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="projects">Projects</InputLabel>
            <Select
              labelId="projects"
              id="projects-select"
              value={numOfProjects}
              label="Projects"
              onChange={handleChange}
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
            </Select>
        </FormControl>
        </Box>
        <Box
          width={isNonMobileScreens ? "50%" : "93%"} 
          p = "2rem"
          m = "2rem auto"
          borderRadius= "1.5rem"
          backgroundColor={palette.background.default} 
        >
        { showOne && <OneProject />}
        { showTwo && <TwoProject />}
        { showThree && <ThreeProject />}
        { showFour && <FourProject />}
        </Box>

      </Box>

    </Box>
  )
}

export default MakerPage