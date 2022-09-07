import React from 'react'

const Header = () => {
    return (
        <header>
            <a href='/#' className="logo">Bank</a>
            <ul className="navigation">
                <li><a href='/#'>Banking</a></li>
                <li><a href='/#'>Credit Cards</a></li>
                <li><a href='/#'>Loans</a></li>
                <li><a href='/#'>Investing</a></li>
                <li><a href='/#'>Insurance</a></li>
                <li><a href='/#'>Retirement</a></li>
            </ul>
            <div className="login">
                <button className="signIn">Sign In</button>
                <button className="signUp">Sign Up</button>
            </div>
        </header>
    )
}

export default Header