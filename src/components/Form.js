import React, { useState } from 'react'
import "./form.css"
import { Context, useContext } from '../context';
import CurrencyFormat from 'react-currency-format';

const Form = () => {
    const {setPopup, setShow, form, setForm, tableArray} = useContext(Context);
    // const [form, setForm] = useState({
    //     amount: "",
    //     times: "",
    //     time: "",
    //     rate: "",
    //     bsmv: "",
    //     kkdf: ""
    // })
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const calculate = () => {
        // var dataTable = [
        //     {
                
        //         "a": "2",
        //         "b": "2",
        //         "c": "2",
        //         "d": "2",
        //         "e": "2",
        //         "f": "2",
        //         "g": "2",
        //     }
        // ]
        // setTable(dataTable);
        // tableArray.length = form.time;
        // console.log("tableArray.length",tableArray.length);
        // tableArray.map((item,index) => {

        //     console.log("item",item);
        //     console.log("index",index);
        // })
        // for(var i=0; i< 12; i++){
        //     for(var x=0; x<7; x++){
        //         tableArray[i][x] = i  ;
        //     }
        // }
        console.log(tableArray);
        // tableArray[0][0] = 1;
        // Basit → Kâr = ( Anapara * Kâr oranı * ( gün sayısı / 30 ))
        // Bileşik → Kâr = ( Anapara * ( ( 1 + kâr oranı) ^ (gün sayısı / 30) ) ) - Anapara
        const basitKar = form.amount * form.rate * (form.time / 12);
        const bilesikKar = (form.amount * (Math.pow((1 + form.rate),(form.time / 12) ))) - form.amount ;
        const basitKar1 = basitKar.toFixed(2);
        const bilesikKar1 = bilesikKar.toFixed(2);
        // console.log("basit",basitKar1);
        // console.log(bilesikKar1);
        // var rate1 = (form.rate / 100) + (form.bsmv / 100) + (form.kkdf / 100) ;
        var rate1 = 0.0285;
        var sonuc = form.amount * (rate1 * (Math.pow((1 + rate1),(form.time) )))  / (Math.pow((1 + rate1), (form.time)) - 1);
        console.log("sonuc",sonuc)
        setPopup(true)
        setShow(false)
    }
    
    return (
        <main onClick={()=> setShow(false)}> 
        {/* opacity: show ? ("0.5") :( "1") */}
        {/* style={{filter: "brightness(50%)"}} */}
            <div className="container">
                <div className="text">
                    <h1>Loan Calculator</h1>
                    <p>This loan calculator will help you determine the weekly,monthly and yearly payments on a loan. Simply enter the loan amount, term and interest rate in the fields below and click calculate. </p>
                </div>
                    <div className="form">
                        <div>
                            <p>Loan Amount</p>
                            {/* <input
                                placeholder='100.000₺'
                                name="amount"
                                value={form.name}
                                onChange={onChange} /> */}
                                <CurrencyFormat thousandSeparator={true} prefix={'₺'} name="amount"
                                value={form.name}
                                onChange={onChange} placeholder='₺100.000'/>
                        </div>
                        <div className='time'>
                            <p>Loan term in
                                <select name="times" value={form.name}
                                onChange={onChange}>
                                    <option value="weeks" >Weeks</option>
                                    <option value="monts" defaultValue>Monts</option>
                                    <option value="years">Years</option>
                                </select> (Please select time)</p>
                            <input placeholder='12' name="time" value={form.name}
                                onChange={onChange}/>
                        </div>
                        <div className="rate">
                            <p>Profit Rate</p>
                            <input placeholder='2.28' name="rate" value={form.name}
                                onChange={onChange}/>
                            <p>Bsmv</p>
                            <input placeholder='3' name="bsmv" value={form.name}
                                onChange={onChange}/>
                            <p>Kkdf</p>
                            <input placeholder='3' name="kkdf" value={form.name}
                                onChange={onChange}/>
                        </div>
                        <div className="calculate">
                            <button onClick={calculate}>Calculate</button>
                        </div>
                    </div>
            </div>
        </main>
    )
}

export default Form