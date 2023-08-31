// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useState } from 'react';

const ClimateContext = createContext();

const ClimateProvider = ({ children }) => {
    const [temperature, setTemperature] = useState(50);

    return (
        <ClimateContext.Provider value={{ temperature, setTemperature }}>
            {children}
        </ClimateContext.Provider >
    )
}

export { ClimateContext, ClimateProvider };
