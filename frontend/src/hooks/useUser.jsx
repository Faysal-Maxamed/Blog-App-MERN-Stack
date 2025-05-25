import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const Logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('expirationTime');
        setUser(null);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const expirationTime = localStorage.getItem('expirationTime');

        console.log("storedUser", storedUser);
        console.log("expirationTime", expirationTime);

        if (expirationTime && storedUser) {
            const currentTime = new Date().getTime();
            if (currentTime < parseInt(expirationTime)) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (e) {
                    console.error("Error parsing stored user:", e);
                    Logout();
                }
            } else {
                Logout();
            }
        }
    }, []);
    useEffect(() => {
    }, [user]);

    const Logging = (userInfo, expirationIn) => {
        const expirationTime = Date.now() + expirationIn * 1000;

        localStorage.setItem('user', JSON.stringify(userInfo));
        localStorage.setItem('expirationTime', expirationTime.toString());
        setUser(userInfo);
    };

    return (
        <CreateUser.Provider value={{ user, setUser, Logging, Logout }}>
            {children}
        </CreateUser.Provider>
    );
};

export const useUser = () => {
    return useContext(CreateUser);
};

export default CreateUser;
