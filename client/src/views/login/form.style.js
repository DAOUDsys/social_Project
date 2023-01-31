import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  pictureComponent: {
    gridColumn: "span 4",
    borderRadius: "5px",
    padding: "1rem"
  },
}));
