// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage';



function App() {
  return (
    <Router>

          <header>
            <h1>Airline Travel Management System</h1>
            <p>Normandy Airlines is the ...</p>
          </header>

          <Navigation />

          <main>
            <Route path="">
              <HomePage />
            </Route>
          </main>

          <footer>
            <p>&copy; 2022 Chance Back & Matthew Armstrong</p>
          </footer>

      </Router>
  );
}

export default App;
