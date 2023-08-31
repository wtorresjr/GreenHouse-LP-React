import "./LightSwitch.css";
import { useContext } from "react";
import { ThemeContext, useTheme } from "../../context/ThemeContext";

function LightSwitch() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <div className={`light-switch day`}>
      <div className="on" onClick={() => setThemeName("day")}>
        DAY
      </div>
      <div className="off" onClick={() => setThemeName("night")}>
        NIGHT
      </div>
    </div>
  );
}

export default LightSwitch;
