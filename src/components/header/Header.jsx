import "./header.css";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header container">
            <h1 className="logo">Hi, Wobber</h1>
            <button className="hamburger" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`nav-links flex ${isMobileMenuOpen ? "open" : ""}`}>
                <Link to={"/"} className="link" onClick={toggleMobileMenu}>Campaigns</Link>
                <Link to={"/message"} className="link" onClick={toggleMobileMenu}>Message</Link>
                <p className="link"><FaUser /></p>
            </nav>
        </header>
    );
};

export default Header;
