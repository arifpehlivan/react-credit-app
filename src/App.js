import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Popup from './components/Popup';
import {popupContext} from "./context.js";

function App() {
  const [popup,setPopup] = useState(false);
  const data = {
    popup, setPopup
  }
  return (
    <popupContext.Provider value={data}>
      <Header/>
      <Popup>My Popup</Popup> 
      {/* show={true} */}
      <Form/>
    </popupContext.Provider>
  );
}

export default App;
