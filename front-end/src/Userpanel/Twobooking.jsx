import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './f.css';

function Twobooking() {
  const [flights, setFlights] = useState([]); 

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost/flightbackend/controllers/api/User/Get/f1.php'); 
        setFlights(response.data); 
      } catch (error) {
        console.error('Error fetching flight data:', error); 
      }
    };
    fetchFlights();
  }, []);

  return (
    <>
      <p className="h1two">Business Tickets</p>
      <div className="two-card" >
        {flights.length > 0 ? (
          flights.map((flight) => (
            <div className="flight-card" key={flight.id}>
              <img 
                src={`http://localhost/flightbackend/controllers/api/User/upload/${flight.file}`} 
                width={300} 
                height={100} 
                className="flight-image" 
                alt={flight.name}
                
              />
              <div className="flight-details"> 
                <div className="flight-name">Flight name : {flight.name}</div>
                <div className="flight-price">Price : ₹ {flight.price}</div>
                <div className="flight-type">Flight Type : {flight.brand}</div>
              </div>
              <Link 
                to={{ pathname: `/bookform/${flight.id}` }}
                state={{ price: flight.price }} 
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

export default Twobooking;

