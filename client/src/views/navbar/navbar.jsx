import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state/state.js";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/flex_between";
import useStyle from "./navbar.style.js";

function Navbar() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const styles = useStyle();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();

  const fullName = `${user?.firstName ?? "Daoud"} ${
    user?.lastName ?? "Tazaza"
  }`;

  const neutralLight = theme.palette.neutral.light;
  const themeMode = theme.palette.mode;
  const alt = theme.palette.background.alt;
  const dark = theme.palette.neutral.dark;
  const primaryLight = theme.palette.primary.light;

  const ListItems = (
    <FlexBetween gap="2rem" className={!isNonMobileScreen && styles.mobileNav}>
      <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: "25px" }}>
        {themeMode === "dark" ? (
          <DarkMode sx={{ fontSize: "25px" }} />
        ) : (
          <LightMode sx={{ color: dark, fontSize: "25px" }} />
        )}
      </IconButton>
      <Message sx={{ fontSize: "25px" }} />
      <Notifications sx={{ fontSize: "25px" }} />
      <Help sx={{ fontSize: "25px" }} />
      <FormControl variant="standard" value={fullName}>
        <Select
          value={fullName}
          className={styles.selectMenu}
          input={<InputBase />}
          sx={{
            paddingLeft: "5px",
            borderRadius: "10px",
            backgroundColor: neutralLight,
            "& .MuiSelect-select:focus": {
              borderRadius: "10px",
              backgroundColor: neutralLight,
            },
          }}
        >
          <MenuItem value={fullName}>
            <Typography>{fullName}</Typography>
          </MenuItem>
          <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
        </Select>
      </FormControl>
    </FlexBetween>
  );

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          onClick={() => {
            navigate("/home");
          }}
          borderRadius="0.25rem"
          color="primary"
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem,2.25rem)"
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          SocialPedia
        </Typography>
        {isNonMobileScreen && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>
      {/* MOBILE NAV */}
      {isNonMobileScreen ? (
        ListItems
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/*mobile nav*/}
      {!isNonMobileScreen && isMobileMenuToggled && (
        <Box className={styles.Box} backgroundColor={alt}>
          {/* close Icon */}

          {/* Menu Items */}
          {ListItems}
        </Box>
      )}
    </FlexBetween>
  );
}

export default Navbar;
