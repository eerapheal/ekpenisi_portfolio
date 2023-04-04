import { useEffect } from "react";
import Aos from "aos";
import "./App.css";

const App = () => {
    useEffect(()=> {
        Aos.init();
    }, []);
    return (
        <h1 className="text-indigo-600 text-2xl font-[500]">Portfolio</h1>
    )
}

export default App