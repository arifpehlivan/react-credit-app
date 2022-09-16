import React, { useState } from 'react'
import "./form.css"
import { Context, useContext } from '../context';
import CurrencyFormat from 'react-currency-format';
import { useEffect } from 'react';

const Form = () => {
    const [disabled, setDisabled] = useState(true);
    const {setPopup, setShow, form, setForm} = useContext(Context);
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log("form.amount",form.amount); 
    }
    const calculate = () => {
        setPopup(true)
        setShow(false)
    }
    useEffect(() => {
        function isNull(){
            if(form.time && form.times && form.rate && form.kkdf && form.bsmv){
                setDisabled(false);
            }
            console.log(disabled);
        }
        isNull()
    },[form])
    return (
        <main onClick={()=> setShow(false)}> 
            <div className="container">
                <div className="text">
                    <h1>Loan Calculator</h1>
                    <p>This loan calculator will help you determine the weekly, monthly and yearly payments on a loan. Simply enter the loan amount, term and interest rate in the fields below and click calculate. </p>
                </div>
                    <div className="form">
                        <div>
                            <p>Loan Amount</p>
                            <input
                            type="number"
                                placeholder='100.000₺'
                                name="amount"
                                value={form.name}
                                onChange={onChange} />
                                {/* <CurrencyFormat thousandSeparator={true}  name="amount"
                                value={form.name}
                                onChange={onChange} placeholder='₺100.000' /> */}
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
                                <p>Kkdf</p>
                            <input placeholder='15' name="kkdf" value={form.name}
                                onChange={onChange}/>
                            <p>Bsmv</p>
                            <input placeholder='5' name="bsmv" value={form.name}
                                onChange={onChange}/>
                        </div>
                        <div className="calculate">
                            <button onClick={calculate} disabled={disabled}>Calculate</button>
                        </div>
                    </div>
            </div>
        </main>
    )
}

export default Form