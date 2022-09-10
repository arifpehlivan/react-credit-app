import React, { useState } from 'react'
import "./header.css"
import { Context, useContext } from '../context';    
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {RiExchangeDollarLine} from 'react-icons/ri';
import {GiPalmTree, GiShakingHands} from 'react-icons/gi';
import {MdArrowForwardIos} from 'react-icons/md';
import {BsBank, BsFillCreditCard2BackFill, BsCurrencyDollar} from 'react-icons/bs';

const Header = () => {
    // const [show,setShow] = useState(false);
    const {show,setShow} = useContext(Context);
    return (
        <header>
            <div className="toggle" onClick={()=> setShow(!show)}>
                {show ? (<AiOutlineClose/>) : (<FaBars/>)}
            </div>
            <a href='/#' className="logo">Bank</a>
            {/* <ul className="navigation"> */}
            <ul className={show ? "active" : "navigation" }>
                <li>
                    <span><BsBank/></span>
                    <a href='/#'>Banking</a>
                    <i><MdArrowForwardIos/></i>
                </li>
                <li>
                    <span><BsFillCreditCard2BackFill/></span>
                    <a href='/#'>Credit Cards</a>
                    <i><MdArrowForwardIos/></i>
                </li>
                <li>
                    <span><BsCurrencyDollar/></span>
                    <a href='/#'>Loans</a>
                    <i><MdArrowForwardIos/></i>
                </li>
                <li>
                    <span><RiExchangeDollarLine/></span>
                    <a href='/#'>Investing</a>
                    <i><MdArrowForwardIos/></i>
                </li>  
                <li>
                    <span><GiShakingHands/></span>
                    <a href='/#'>Insurance</a>
                    <i><MdArrowForwardIos/></i>
                </li>   
                <li>
                    <span><GiPalmTree/></span>
                    <a href='/#'>Retirement</a>
                    <i><MdArrowForwardIos/></i>
                </li>
            </ul>
            <div className="login">
                <button className="signIn">Sign In</button>
                <button className="signUp">Sign Up</button>
            </div>
        </header>
    )
}

export default Header