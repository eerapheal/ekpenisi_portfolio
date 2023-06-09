import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import View from './components/View/View.jsx';
import Service from './components/Service/Service.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
    useEffect(()=> {
        Aos.init();
    }, []);
    return <>

    <Header />
    <main> 
      <View />
      <Service />
      <Portfolio />
      <Contact />
     </main>
    <Footer />
    </>
}

export default App