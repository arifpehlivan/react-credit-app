import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Popup from './components/Popup';
import {Context} from "./context.js";

function App() {
  const [popup,setPopup] = useState(false);
  const data = {
    popup, setPopup
  }
  return (
    <Context.Provider value={data}>
      <Header/>
      <Popup>My Popup</Popup> 
      {/* show={true} */}
      <Form/>
    </Context.Provider>
  );
}

export default App;
