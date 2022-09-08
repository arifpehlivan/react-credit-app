import React from 'react'
import "./popup.css"
import { popupContext, useContext } from '../context';

const Popup = (props) => {
    const {popup,setPopup} = useContext(popupContext);
    return (popup) ? (
        <div className='popup'>
            <div className="popupText">
                <button className="close" onClick={()=>setPopup(false)}>X</button>
                {props.children}    
            </div>            
        </div>
    ) : "";
}

export default Popup