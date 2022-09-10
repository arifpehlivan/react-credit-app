import React from 'react'
import "./footer.css"
import { AiOutlineInstagram, AiFillYoutube, AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { MdCall } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="aboutUs">
                    <h2>About Us</h2>
                    <p>Bank guides savers and spenders through the next steps of their financial journey.
                        Whether you’re buying a home, paying off a loan or saving up for college, we offer
                        free tools and resources to help you reach your goals.
                    </p>
                    <ul className="social">
                        <li>
                            <a href="/#">
                                <i><AiOutlineInstagram /></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i><FaFacebookSquare /></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i><AiFillYoutube /></i>
                            </a>
                        </li>
                        <li>
                            <a href="/#">
                                <i><AiFillGoogleCircle /></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="quickLinks">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">FAQ</a></li>
                        <li><a href="/#">Privacy Policy</a></li>
                        <li><a href="/#">Help</a></li>
                        <li><a href="/#">Terms And Consitions</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <i><GoLocation /></i>
                            <span>3269 Crosswind Drive
                                Hopkinsville <br /> USA
                            </span>
                        </li>
                        <li>
                            <i><MdCall /></i>
                            <p><a href="tel:1234567890">123456789</a></p>
                        </li>
                        <li>
                            <i><HiOutlineMail /></i>
                            <p><a href="mailto:test@gmail.com">test@gmail.com</a></p>
                        </li>
                    </ul>
                </div>

                <div className="copyrightText">
                    <p>Copyright © 2022. All rights reserved. </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer