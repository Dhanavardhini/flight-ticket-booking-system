import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './f.css';

function Fourbooking() {
  const [flights, setFlights] = useState([]); 

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost/flightbackend/controllers/api/User/Get/f2.php'); 
        setFlights(response.data); 
      } catch (error) {
        console.error('Error fetching flight data:', error); 
      }
    };
    fetchFlights();
  }, []);

  return (
    <>
      <p className="h1two">FIRST CLASS TICKETS</p>
      <div className="two-card" >
        {flights.length > 0 ? (
          flights.map((flightd) => (
            <div className="flight-card" key={flightd.id}>
              <img 
                src={`http://localhost/flightbackend/controllers/api/User/upload/${flightd.file}`} 
                width={300} 
                height={100} 
                className="flight-image" 
                alt={flightd.name}
                
              />
              <div className="flight-details"> 
                <div className="flight-name">Flight name : {flightd.name}</div>
                <div className="flight-price">Price : ₹ {flightd.price}</div>
                <div className="flight-type">Flight Type : {flightd.brand}</div>
              </div>
              <Link 
                to={{ pathname: `/fourbook/${flightd.id}` }}
                state={{ price: flightd.price }} 
              >
                <button className="view-button">Book</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading flights...</p> 
        )}
      </div>
    </>
  );
}

export default Fourbooking;


