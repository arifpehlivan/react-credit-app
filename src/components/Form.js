import React, { useState, useRef } from 'react'
import "./form.css"
import { Context, useContext } from '../context';
import { useEffect } from 'react';
import { modeContext } from '../modeContext';
import CurrencyFormat from 'react-currency-format';

const Form = () => {
    const [disabled, setDisabled] = useState(true);
    // const [showSpan, setShowSpan] = useState(false);
    const { setPopup, setShow, form, setForm } = useContext(Context);
    const inputRef = useRef()
    // const { mode } = useContext(modeContext);
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        // console.log("form.amount",form.amount); 
    }
    const calculate = () => {
        setPopup(true)
        setShow(false)
    }
    useEffect(() => {
        function isNull() {
            if (form.amount && form.times && form.rate && form.kkdf && form.bsmv) {
                inputRef.current.style.opacity = "1";
                setDisabled(false);
                
            }
        }
        isNull()
    }, [form])
    // inputRef.current.style.opacity = "0.5";
    // const isClick = () => {
    //     // setShowSpan(true)
    //     // spanRef.current.focus();
    //     spanRef.current.focus();
    //     console.log("click")
    // }

    // spanRef.current?.focus();
    // spanRef.current.style.color = "red";
    // spanRef.current.style.display = "block";
    return (
        <main onClick={() => setShow(false)}>
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
                            onChange={onChange}
                            />
                        {/* <CurrencyFormat thousandSeparator={true}  name="amount"
                                value={form.name}
                                onChange={onChange} placeholder='₺100.000' /> form.amount ? "errorMessage" : "" */}
                        <span className="errorMessage" >
                            Loan amount cannot be empty
                        </span>
                        {/* <span ref={spanRef}>
                            Loan amount cannot be empty
                        </span> */}
                    </div>
                    <div className='time'>
                        <p>Loan term in
                            <select name="times" value={form.name}
                                onChange={onChange}>
                                <option value="monts" defaultValue>Monts</option>
                                <option value="weeks" >Weeks</option>
                                <option value="years">Years</option>
                            </select> (Please select time)</p>
                        <input placeholder='12' name="time" value={form.name}
                            onChange={onChange}  />
                        <span className="errorMessage" >
                            Loan term cannot be empty
                        </span>
                    </div>
                    <div className="rate">
                        <p>Profit Rate</p>
                        <input placeholder='2.28' name="rate" value={form.name}
                            onChange={onChange}  />
                        <span className="errorMessage">
                            Rate cannot be empty
                        </span>
                        <p>Kkdf</p>
                        <input placeholder='15' name="kkdf" value={form.name}
                            onChange={onChange}  />
                        <span className="errorMessage">
                            Kkdf cannot be empty
                        </span>
                        <p>Bsmv</p>
                        <input placeholder='5' name="bsmv" value={form.name}
                            onChange={onChange}  />
                        <span className="errorMessage">
                            Bsmv cannot be empty
                        </span>
                    </div>
                    <div className="calculate">
                        {/*className={disabled ? "calculate disabled" : "calculate"}*/}
                        <button onClick={calculate} disabled={disabled} ref={inputRef}>Calculate</button>
                        {/* <input ref={spanRef} />
                        <button  onClick={isClick}>Calculate</button> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Form