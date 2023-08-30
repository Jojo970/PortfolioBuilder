import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";
import { 
  Box,
  Typography,
  useTheme
} from "@mui/material";

const SentForm = () => {
  const {palette} = useTheme();


  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography
      fontWeight="500" 
      variant="h3" 
      sx = {{
          mb: "1rem",
          mt: "1.5rem",
          }}>
        Creating Website Files...
      </Typography>
      <UseAnimations 
      animation={loading} 
      autoplay={true} 
      loop={true}
      size={124}
      strokeColor={palette.secondary.main}
      />
    </Box>
  )
}

export default SentForm