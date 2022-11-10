import React from 'react';
import PassengersTable from '../components/tables/PassengersTable';
import { useState, useEffect } from 'react';
import { API_URL } from '../API';
import { useNavigate } from 'react-router-dom';

function PassengersPage({ setPassengerToUpdate }) {
    // Use navigate for updating
    const navigate = useNavigate()

    // Use state to bring in the data
    const [passengers, setPassengers] = useState([]);

    // RETRIEVE the list of passengers
    const loadPassengers = async () => {
        const response = await fetch(`${API_URL}/passengers`);
        const passengers = await response.json();
        setPassengers(passengers);
    } 

    // UPDATE a Passenger
    const onEditPassenger = async passenger => {
        setPassengerToUpdate(passenger)
        navigate('../passengers-edit')
    }

    // CREATE a Passenger
    const navigateToCreate = () => {
        navigate('../passengers-add')
    }


    // DELETE a Passenger
    const onDeletePassenger = async id => {
        const response = await fetch(`${API_URL}/passengers/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch(`${API_URL}/passengers`);
            const passengers = await getResponse.json();
            setPassengers(passengers);
        } else {
            console.error(`Failed to delete passenger with id = ${id}, status code = ${response.status}`)
        }
    }

    // LOAD the Passengers
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
                    onEdit={onEditPassenger} 
                    onDelete={onDeletePassenger} 
                />

            <button onClick={navigateToCreate}>Create New Passenger</button>
        
        </>
    )
};

export default PassengersPage;