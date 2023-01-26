import {Navigate, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./views/home/home.jsx";
import Login from "./views/login/login.jsx";
import Profile from "./views/profile/profile.jsx";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {CssBaseLine, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {themeSittings} from "./theme.js"


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSittings(mode)), [mode])
  return <div className="App">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
    <Routes>
      <Route path="/" element={Login} />
      <Route path="/home" element={Home} />
      <Route path="/profile/:id" element={Profile} />
    </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </div>;
}

export default App;
