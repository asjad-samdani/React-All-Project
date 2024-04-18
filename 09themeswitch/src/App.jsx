/** @format */

import { useEffect, useState } from "react";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/Themebutton";
import Card from "./Components/Card";

export default function App() {
  const [themeMode, sethemeMode] = useState("light");
  const lightTheme = () => {
    sethemeMode("light");
  };
  const darkTheme = () => {
    sethemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {<ThemeBtn/>}
          </div>

          <div className="w-full max-w-sm mx-auto">{<Card/>}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
