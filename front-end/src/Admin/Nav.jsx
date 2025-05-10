import React from 'react'
import './Nav.css'
import { MdDashboard, MdTwoWheeler } from 'react-icons/md'
import FlightIcon from '@mui/icons-material/Flight';
import { Link } from 'react-router-dom'
import { GrLogout } from 'react-icons/gr'
import FlightClassIcon from '@mui/icons-material/FlightClass';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
function Navbar() {

  return (
    <>
<nav className="sidebar">
        <div className="logo"> Flight Ticket Booking System</div>
        <div className="nav-links1">
            <Link to={"/dash"}><a href="#" ><MdDashboard /> Dashboard</a></Link>
            <Link to={"/two"}><a href="#">< FlightIcon/> business tickets</a></Link>
            <Link to={"/four"}><a href="#">< FlightClassIcon/> firstclass tickets</a>  </Link>
            <Link to={"/userd"}><a href="#">< FlightLandIcon/>B tickets Users</a></Link>
            <Link to={"/users"}><a href="#"><FlightTakeoffIcon />firstclass Users</a></Link>
            <Link to={"/logout"}><a href="#"><GrLogout />Logout</a></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar