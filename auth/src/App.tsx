import Auth from "./routes/auth";
import './App.scss'
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { createContext } from "react";

type Props = {
    invalidate: () => void;
    auth: any;
};

interface NavigationContextProps {
    invalidate: () => void;
    auth: any;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(
    undefined
);


const App: React.FC<Props> = ({ invalidate, auth }) => {
    return (
        <MemoryRouter>
            <NavigationContext.Provider value={{ invalidate, auth }}>
                <Routes>
                    <Route path="/" element={<Auth/>} />
                </Routes>
            </NavigationContext.Provider>
        </MemoryRouter>
    )
}

export default App