import React from 'react'
import "./popup.css"
import { Context, useContext } from '../context';
import Table from './Table';

const Popup = () => {
    const {popup,setPopup, form, column, table, setShow} = useContext(Context);
    // const timeArray = [];
    // timeArray.length = form.time;
    // console.log(timeArray.length);
    return (popup) ? (
        <div className='popup' onClick={()=> setShow(false)}>
            <div className="popupText">
                <button className="close" onClick={()=>setPopup(false)}>X</button>
                {/* {props.children} */}
                {console.log(form)}
                <h1>Geri Ödeme Planı Tablosu</h1>
                <Table data1={table} column={column}/>   
            </div>            
        </div>
    ) : "";
}

export default Popup