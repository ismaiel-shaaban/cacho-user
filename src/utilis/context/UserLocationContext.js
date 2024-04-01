import{ createContext, useContext, useState } from 'react';

const UserLocationContext = createContext(undefined);

export const useUserLocation = () => useContext(UserLocationContext);

export const UserLocationProvider = ({ children }) => {
    const [userLocation, setUserLocation] = useState(null);

    return (
        <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
            {children}
        </UserLocationContext.Provider>
    );
};