
import useStyle from "./login.style.js";
import {useTheme, useMediaQuery, Typography} from '@mui/material';
import { Box } from "@mui/system";

function Login() {
  const theme = useTheme();
  const styles = useStyle();
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");


  const alt = theme.palette.background.alt;
  

  return (
    <Box>
      <Box className={styles.container} background={alt}>
      <Typography className={styles.typography}>
        SoialPedia
      </Typography>
      </Box>
      <Box className={styles.formBox} width={isNonMobileScreen ? "50%" : "90%"} backgroundColor={alt}>
        <Typography selected className={styles.secondaryTypography} variant="h5">
          Welcome to SoialPedia
        </Typography>

      </Box>
    </Box>
  );
}

export default Login;
