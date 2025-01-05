import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CertificationContext = createContext();

export function CertificationProvider({ children }) {
    const [info, setInfoState] = useState(null);

    const setInfo = (newInfo) => {
        setInfoState(newInfo);
        if (newInfo) {
            setOpen(true);
        }
    };

    const [isOpen, setOpen] = useState(false);

    return (
        <CertificationContext.Provider value={{ info, setInfo, isOpen, setOpen }}>
            {children}
        </CertificationContext.Provider>
    );
}

export function useCertificationContext() {
    return useContext(CertificationContext);
}