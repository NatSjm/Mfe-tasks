import {MemoryRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import './index.scss'
import {createContext} from "react";
import EditTask from "./routes/editTask.tsx";

type Props = {
    onNavigate: (to: string) => void;
};

interface NavigationContextProps {
    onNavigate: (to: string) => void;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(
    undefined
);


const App: React.FC<Props> = ({onNavigate}) => {



    return (
        <MemoryRouter>
            <NavigationContext.Provider value={{onNavigate}}>
                <Routes>
                    <Route path={ "/"} element={<EditTask/>}/>
                </Routes>
            </NavigationContext.Provider>
         </MemoryRouter>

    )
}

export default App
