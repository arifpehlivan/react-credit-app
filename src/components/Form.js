import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        amount: "",
        times: "",
        time: "",
        rate: "",
        bsmv: "",
        kkdf: ""
    })
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const calculate = () => {
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
        console.log(sonuc)
    }
    
    return (
        <main>
            <div className="container">
                <div className="text">
                    <h1>Loan Calculator</h1>
                    <p>This loan calculator will help you determine the weekly,monthly and yearly payments on a loan. Simply enter the loan amount, term and interest rate in the fields below and click calculate. </p>
                </div>
                    <div className="form">
                        <div>
                            <p>Loan Amount</p>
                            <input
                                placeholder='100.000₺'
                                name="amount"
                                value={form.name}
                                onChange={onChange} />
                        </div>
                        <div className='time'>
                            <p>Loan term in
                                <select name="times" id="time" value={form.name}
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