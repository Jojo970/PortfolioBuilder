import { Box, useMediaQuery, Typography, useTheme, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import Navbar from "scenes/navbar";



const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const { palette } = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
      textAlign="center"
      >
        <Box
        mt="6%"
        >
        <Typography
          color={palette.primary.light}
          variant = "h1"
          sx= {{ mb: "1.5rem"}}
          fontWeight={800}
        >
          Build Your Dream Developer Portfolio
        </Typography>
        </Box>
        <Box
        m = "2rem auto"
        width= {isNonMobileScreens ? '50%' : undefined}
        >
          <Box
        mt="8%"
        >
        <Typography
          color={palette.primary.light}
          variant = "h4"
          sx= {{
            mb: "1.5rem",
            fontStyle: "italic"
          }}
          fontWeight={500}
        >
          Every programmer should have a portfolio displaying their projects to the world. However it can be daunting to think about first building projects, then building a portfolio website. Let us do the heavy lifting and code one for you.
        </Typography>
        </Box>


          <Box
          display="grid"
          gap="30px"
          gridTemplateColumns= "repeat(2, minmax(0, 1fr))"
          sx ={{
              "& > div":{ gridColumn: isNonMobileScreens ? undefined : "span 4"}
          }}
          >
            <Button
                        fullWidth
                        onClick={() => navigate("/examples")}
                        sx = {{
                            m:"2rem 0",
                            p:"1rem",
                            backgroundColor: palette.neutral.dark,
                            color:palette.secondary.main,
                            border: `1.5px solid ${palette.neutral.dark}`,
                            "&:hover": {color: palette.secondary.blue}
                        }}
                        >
                            See examples
                        </Button>
            <Button
                        fullWidth
                        onClick={() => navigate("/home")}
                        sx = {{
                            m:"2rem 0",
                            p:"1rem",
                            backgroundColor: palette.neutral.dark,
                            color:palette.secondary.main,
                            border: `1.5px solid ${palette.neutral.dark}`,
                            "&:hover": {color: palette.secondary.blue}
                        }}
                        >
                            Make a Portfolio
                        </Button>

        
          </Box>

        </Box>

      </Box>
    </Box>
  )
}

export default HomePage