import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
    useEffect(()=> {
        Aos.init();
    }, []);
    return <>

    <Header />
    <Footer />
    </>
       
}

export default App