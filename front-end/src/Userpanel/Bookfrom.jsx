import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./bookform.css";

function BookForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    departure: "",
    destination: "",
    date: "",
    tickets: "",
    price: 0,
    status:""
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { price = 0 } = location.state || {}; 

 
  useEffect(() => {
    if (formData.tickets && price) {
      const calculatedPrice = Number(formData.tickets) * price;
      setFormData((prevData) => ({
        ...prevData,
        price: calculatedPrice,
      }));
    }
  }, [formData.tickets, price]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/flightbackend/controllers/api/User/post/bticketbook.php",
        formData, 
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data.message);
      alert("Ticket booked successfully!");
      navigate("/booktwo");
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div className="vr-body">
      <div className="vr-container">
        <h1 className="vr-title">Flight Ticket Booking</h1>
        <form className="vr-form" onSubmit={handleSubmit}>
          <div className="vr-form-group">
            <label className="vr-label">Name:</label>
            <input
              className="vr-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Email:</label>
            <input
              className="vr-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Phone Number:</label>
            <input
              className="vr-input"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Departure City:</label>
            <input
              className="vr-input"
              type="text"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Destination City:</label>
            <input
              className="vr-input"
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Date:</label>
            <input
              className="vr-input"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Total Tickets:</label>
            <input
              className="vr-input"
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </div>
          <div className="vr-form-group">
            <label className="vr-label">Calculated Price:</label>
            <input
              className="vr-input"
              type="text"
              value={formData.price || "N/A"}
              disabled
            />
          </div>
          <button className="vr-submit-btn" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
