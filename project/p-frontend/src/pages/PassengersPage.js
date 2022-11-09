import React from 'react';
import PassengersTable from '../components/tables/PassengersTable';
import CreatePassenger from '../components/forms/CreatePassenger';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../API';

function PassengersPage() {
    // Use the navigate for updating
    const navigate = useNavigate();

    // Use state to bring in the data
    const [passengers, setPassengers] = useState([]);

    // RETRIEVE the list of passengers
    const loadPassengers = async () => {
        const response = await fetch(`${API_URL}/passengers`);
        const passengers = await response.json();
        setPassengers(passengers);
    } 


    // LOAD the movies
    useEffect(() => {
        loadPassengers();
    }, []);

    return(
        <>
        <h1>Passengers</h1>

            <form method="GET">
                <fieldset>
                    <label>Lookup Passenger by Passport #</label><input type="text" name="search_passenger" />
                </fieldset>
                <button>Search</button>
            </form>

            <PassengersTable
                    passengers={passengers} 
                    onEdit={null} 
                    onDelete={null} 
                />

            <CreatePassenger />



        
        </>
    )
};

export default PassengersPage;