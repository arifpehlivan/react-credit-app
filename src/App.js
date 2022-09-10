import { useState } from 'react';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Popup from './components/Popup';
import {Context} from "./context.js";

function App() {
  const [popup,setPopup] = useState(false);
  const [show,setShow] = useState(false);
  const data = {
    popup, 
    setPopup,
    show,
    setShow
  }
  return (
    <Context.Provider value={data}>
      <Header/>
      <Popup />
      {/* My Popup</Popup>  */}
      {/* show={true} */}
      <Form/>
      <Footer/>
    </Context.Provider>
  );
}

export default App;
