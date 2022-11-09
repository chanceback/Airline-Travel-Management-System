// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';
import PassengersPage from './pages/PassengersPage';
import AirportPage from './pages/AirportsPage';
import FlightsPage from './pages/FlightsPage';
import ItinerariesPage from './pages/ItinerariesPage';
import CreateBookingPage from './pages/CreateBookingPage';
import TicketsPage from './pages/TicketsPage';
import TicketClassesPage from './pages/TicketClassesPage';


function App() {

  return (
    <Router>

          <header>
            <h1>Airline Travel Management System</h1>
            <p>Normandy Airlines</p>
          </header>

          <Navigation />

          <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="passengers" element={<PassengersPage />} />
            <Route path="airports" element={<AirportPage />} />
            <Route path="flights" element={<FlightsPage />} />
            <Route path="itineraries" element={<ItinerariesPage />} />
            <Route path="create-booking" element={<CreateBookingPage/>} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="ticket-classes" element={<TicketClassesPage />} />
          </Routes>
          </main>

          <footer>
            <p>&copy; 2022 Chance Back & Matthew Armstrong</p>
          </footer>

      </Router>
  );
}

export default App;
