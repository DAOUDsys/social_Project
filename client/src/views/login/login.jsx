import useStyle from "./login.style.js";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Form from "./form.jsx";

function Login() {
  const theme = useTheme();
  const styles = useStyle();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  const alt = theme.palette.background.alt;

  return (
    <Box>
      <Box className={styles.container} background={alt}>
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SoialPedia
        </Typography>
      </Box>
      <Box
        className={styles.formBox}
        width={isNonMobileScreen ? "50%" : "90%"}
        backgroundColor={alt}
      >
        <Typography variant="h5" marginBottom="1.5rem" fontWeight="500">
          Welcome to SoialPedia, the social media for socialPaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
}

export default Login;
