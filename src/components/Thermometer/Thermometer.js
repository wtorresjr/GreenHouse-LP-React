import { ClimateContext, useClimate } from "../../context/ClimateContext";
import { useContext, useState, useEffect } from 'react';
import ClimateProvider from "../../context/ClimateContext";

import ReactSlider from "react-slider";
import './Thermometer.css';

function Thermometer() {
  const { temp, setTemp } = useContext(ClimateContext);
  const [tempChange, setTempChange] = useState(temp)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (setTemp > temp) setTempChange(temp + 1)
      if (setTemp < temp) setTempChange(temp - 1)
    }, 5000)
    if (setTemp === temp) {
      clearTimeout(timer)
    }
  }, [temp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={(val) => { setTemp(val) }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
