// Dependencies
import { useState, useEffect } from "react";
// Styles
import { CssBaseline, GeistProvider } from "@geist-ui/react";
import Sun from "@geist-ui/react-icons/sun";
import Moon from "@geist-ui/react-icons/moon";

const App = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState("dark");

  const switchThemes = () => {
    const update = themeType === "dark" ? "light" : "dark";
    window.localStorage.setItem("themepref", update);
    setThemeType(update);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("themepref");
    setThemeType(theme);
  });

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <div
        style={{ position: "absolute", top: "20px", right: "20px" }}
        onClick={() => switchThemes()}
      >
        {themeType === "dark" ? <Sun /> : <Moon />}
      </div>
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default App;
