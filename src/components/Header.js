import React, { useState } from 'react'
import "./header.css"
import { Context, useContext } from '../context';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { GiPalmTree, GiShakingHands } from 'react-icons/gi';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsBank, BsFillCreditCard2BackFill, BsCurrencyDollar } from 'react-icons/bs';

const Header = () => {
    // const [show,setShow] = useState(false);
    const { show, setShow } = useContext(Context);
    return (
        <header>
            <div className="toggle" onClick={() => setShow(!show)}>
                {show ? (<AiOutlineClose />) : (<FaBars />)}
            </div>
            <a href='/#' className="logo">Bank</a>
            {/* <ul className="navigation"> */}
            <ul className={show ? "active" : "navigation"}>
                <li className='banking'>
                    <span><BsBank /></span>
                    <a href='/#' >Banking</a>
                    <i><MdArrowForwardIos /></i>
                    <div className="bankingText">
                        <div>
                            <h2>Compare Accounts</h2>
                            <p><a href="/#">CD Rates</a></p>
                            <p><a href="/#">Savings accounts</a></p>
                            <p><a href="/#">High-yield savings accounts</a></p>
                            <p><a href="/#">Money market accounts</a></p>
                            <p><a href="/#">1-year CD rates</a></p>
                            <p><a href="/#">5-year CD rates</a></p>
                            <p><a href="/#">Checking accounts</a></p>
                            <p><a href="/#">Best banks</a></p>
                        </div>
                        <div>
                            <h2>Use calculators</h2>
                            <p><a href="/#">Savings calculator</a></p>
                            <p><a href="/#">CD calculator</a></p>
                            <p><a href="/#">Compound savings calculator</a></p>
                            <p><a href="/#">All banking calculators</a></p>
                            <p><a href="/#">Savings calculator</a></p>
                            <p><a href="/#">CD calculator</a></p>
                            <p><a href="/#">Compound savings calculator</a></p>
                            <p><a href="/#">All banking calculators</a></p>
                        </div>
                        <div>
                            <h2>Get advice</h2>
                            <p><a href="/#">Federal Reserve news</a></p>
                            <p><a href="/#">What is a savings account?</a></p>
                            <p><a href="/#">What is a money market account?</a></p>
                            <p><a href="/#">Which certificate of deposit account is best?</a></p>
                            <p><a href="/#">How to open a savings account</a></p>
                            <p><a href="/#">Tax advice</a></p>
                        </div>
                        <div>
                            <h2>Bank reviews</h2>
                            <p><a href="/#">Capital One Bank</a></p>
                            <p><a href="/#">Marcus by Goldman Sachs</a></p>
                            <p><a href="/#">CIT Bank</a></p>
                            <p><a href="/#">Synchrony Bank</a></p>
                            <p><a href="/#">HBarclays Bank</a></p>
                            <p><a href="/#">All bank reviews</a></p>
                        </div>
                    </div>
                </li>
                <li>
                    <span><BsFillCreditCard2BackFill /></span>
                    <a href='/#'>Credit Cards</a>
                    <i><MdArrowForwardIos /></i>
                </li>
                <li>
                    <span><BsCurrencyDollar /></span>
                    <a href='/#'>Loans</a>
                    <i><MdArrowForwardIos /></i>
                </li>
                <li>
                    <span><RiExchangeDollarLine /></span>
                    <a href='/#'>Investing</a>
                    <i><MdArrowForwardIos /></i>
                </li>
                <li>
                    <span><GiShakingHands /></span>
                    <a href='/#'>Insurance</a>
                    <i><MdArrowForwardIos /></i>
                </li>
                <li>
                    <span><GiPalmTree /></span>
                    <a href='/#'>Retirement</a>
                    <i><MdArrowForwardIos /></i>
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