import React from 'react'
import "./popup.css"
import { Context, useContext } from '../context';

const Popup = (props) => {
    const {popup,setPopup} = useContext(Context);
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