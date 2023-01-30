import { makeStyles } from "@mui/styles";
import {Typography} from '@mui/material';

export default makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "1rem 6%",
    textAlign: "center",
  },
  typography: {
    fontWeight: "bold",
    fontSize: "32px",
    color: "primary",
  },
  formBox: {
    padding: "2rem",
    margin: "2rem auto",
    borderRadius: "1.5rem"
  },
  ".Typography.selected": {
    "& .css-w0l7p-MuiTypography-root": {

        marginBottom: "1.5rem",
        fontWeight: "500",
    }
    
  }
}));
