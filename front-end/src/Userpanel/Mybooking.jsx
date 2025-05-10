import React, { useEffect, useState } from 'react';
import './mybook.css';

function Mybooking() {
  const [businessClassBookings, setBusinessClassBookings] = useState([]);
  const [firstClassBookings, setFirstClassBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const [businessClassResponse, firstClassResponse] = await Promise.all([
          fetch('http://localhost/flightbackend/controllers/api/User/Get/bbook.php'),
          fetch('http://localhost/flightbackend/controllers/api/User/Get/fbook.php'),
        ]);

        const businessClassData = await businessClassResponse.json();
        const firstClassData = await firstClassResponse.json();

        setBusinessClassBookings(businessClassData);
        setFirstClassBookings(firstClassData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const renderTableRows = (bookings) => {
    if (bookings.length === 0) {
      return (
        <tr>
          <td colSpan="8">No bookings available</td>
        </tr>
      );
    }

    return bookings.map((booking, index) => (
      <tr key={index} className="vrs-table-row">
        <td className="vrs-table-cell" data-label="Name">{booking.name}</td>
        <td className="vrs-table-cell" data-label="Email">{booking.email}</td>
        <td className="vrs-table-cell" data-label="Phone">{booking.phone}</td>
        <td className="vrs-table-cell" data-label="Number of Days">{booking.departure}</td>
        <td className="vrs-table-cell" data-label="Pickup Location">{booking.destination}</td>
        <td className="vrs-table-cell" data-label="From Date">{booking.date}</td>
        <td className="vrs-table-cell" data-label="To Date">{booking.tickets}</td>
        <td className="vrs-table-cell" data-label="To Date">{booking.price}</td>
        <td className="vrs-table-cell" data-label="Status">
          {booking.Status}{booking.status}
        </td>
      </tr>
    ));
  };

  return (
    <div className="main-mybook">
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="vrs-container">
        <h1 className="vrs-heading">Business Class Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Departure city</th>
              <th className="vrs-table-cell">Destination City</th>
              <th className="vrs-table-cell">date</th>
              <th className="vrs-table-cell">Tickets</th>
              <th className="vrs-table-cell">price</th>
              <th className="vrs-table-cell">status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(businessClassBookings)}
          </tbody>
        </table>
      </div>

      <div className="vrs-container">
        <h1 className="vrs-heading">First Class Bookings</h1>
        <table className="vrs-table">
          <thead>
            <tr className="vrs-table-header">
              <th className="vrs-table-cell">Name</th>
              <th className="vrs-table-cell">Email</th>
              <th className="vrs-table-cell">Phone</th>
              <th className="vrs-table-cell">Departure City</th>
              <th className="vrs-table-cell">Destination city</th>
              <th className="vrs-table-cell">date</th>
              <th className="vrs-table-cell">Tickets</th>
              <th className="vrs-table-cell">price</th>
              <th className="vrs-table-cell">status</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(firstClassBookings)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mybooking;
