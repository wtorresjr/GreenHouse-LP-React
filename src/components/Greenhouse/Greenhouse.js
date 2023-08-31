import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { ThemeContext, useTheme } from "../../context/ThemeContext";
import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";
import { useContext } from "react";

function Greenhouse() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  if (themeName === "day") {
    setThemeName(dayImage);
  }
  if (themeName === "night") {
    setThemeName(nightImage);
  }

  return (
    <section>
      <img className="greenhouse-img" src={themeName} alt="greenhouse" />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
