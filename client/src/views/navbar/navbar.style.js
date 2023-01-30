import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  selectMenu: {
    Padding: "0.25rem 1rem",
    width: 150,
    "& .MuiSvgIcon-root": {
      pr: "0.25rem",
      width: "3rem",
    },
  },
  Box: {
    position: "fixed",
    right: 0,
    top: 75,
    height: "50%",
    zIndex: 10,
    borderRadius: "0 0 0 10%",
    maxWidth: 500,
    minWidth: 200,
  },
  mobileNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  },
}));
