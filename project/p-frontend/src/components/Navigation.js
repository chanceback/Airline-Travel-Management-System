import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/">Home test</Link>
        <Link to="passengers">Passengers</Link>
        <Link to="airports">Airports</Link>
        <Link to="flights">Flights</Link>
        <Link to="itineraries">Itineraries</Link>
        <Link to="create-booking">Create Booking</Link>
        <Link to="ticket-classes">Ticket Classes</Link>
        <Link to="Tickets">Tickets</Link>

    </nav>
  );
}

export default Navigation;