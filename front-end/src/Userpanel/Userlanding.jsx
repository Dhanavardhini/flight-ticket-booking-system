import React from 'react'
import "./userlanding.css"
import { Link } from 'react-router-dom'
function Userlanding() {
  return (
    <>
    <div className="user1-main">
    <nav className="navbar-user">
        <div className="navbar-container">
            <div className="logo">Flight Booking System</div>
            <ul className="nav-links">
               <li><a href="#">Home</a></li>
               
                <Link to={"/mybooking"}><li><a href="#">My booking</a></li></Link>
                <Link to={"/userlogin"}><li><a href="#">Logout</a></li></Link>
            </ul>
        </div>
    </nav>

    <div className="hero-image1">
        <div className="hero-text">
            <h1>Catch flights, not feelings</h1>
            <p>Booking a flight is the first step to making memories</p>
            <Link to={"/booktwo"}><a href="#" class="cta-button">Business Class Tickets</a>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to={"/bookfour"}><a href="#" class="cta-button">First class Tickets</a></Link>
        </div>
    </div>

    <main className="main-content1">
        <div className="card-container1">
            <div className="card">
                <h2>Business Class Tickets</h2>
                <p>Designed for comfort, offering spacious seating, better meals, and premium lounge access.</p>
               
                <Link to={"/booktwo"}><a href="#" className="btnu">book</a></Link>
            </div>
            <div className="card">
                <h2>First class Tickets</h2>
                <p>Most luxurious, featuring private suites, gourmet dining, and top-notch personalized service.</p>
                <Link to={"/bookfour"}><a href="#" className="btnu">book</a></Link>
            </div>
           
        </div>
    </main>
    <footer className="footer">
        <div className="footer-container">
            <p>&copy; 2023 Flight Booking System. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Userlanding