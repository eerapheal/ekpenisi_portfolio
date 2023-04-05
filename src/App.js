import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import View from './components/View/View.jsx';
const App = () => {
    useEffect(()=> {
        Aos.init();
    }, []);
    return <>

    <Header />
    <main> 
      <View />
     </main>
    <Footer />
    </>
       
}

export default App