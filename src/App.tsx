import React from "react";
import Routes from "./routes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./scss/style.scss"
import { useMainState } from "./context/gloabal";


const App: React.FC = () => {
    const { loading } = useMainState();
    return(
        <>
            {/* {loading && <Loader/>} */}
           <Routes />
        </>
    )
}

export default App;