import React from 'react';
import PassengersTable from '../components/tables/PassengersTable';
import CreatePassenger from '../components/forms/CreatePassenger';
import { useState, useEffect } from 'react';
import { API_URL } from '../API';
import UpdatePassenger from '../components/forms/UpdatePassenger';

function PassengersPage() {

    // Use state to bring in the data
    const [passengers, setPassengers] = useState([]);

    // RETRIEVE the list of passengers
    const loadPassengers = async () => {
        const response = await fetch(`${API_URL}/passengers`);
        const passengers = await response.json();
        setPassengers(passengers);
    } 

    // UPDATE a Passenger
    const [passengerToUpdate, setPassengerToUpdate] = useState([])
    const dummyPassenger = {
        passenger_id : null,
        first_name : null,
        last_name: null,
        passport: null,
        email: null,
        phone_number: null

    }
    const onEditPassenger = passenger => {
        setPassengerToUpdate(passenger);
        toggleVisible()
        // similar to how when it opens a new page. It takes the passenger, then renders the form with passenger info. that should be goal
    }

    const [isVisible, setIsVisible] = useState(false)
    const toggleVisible = () => { setIsVisible(!isVisible) }


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

            <CreatePassenger setPassengers={setPassengers} />

            {isVisible
                ? <UpdatePassenger passenger={passengerToUpdate} setPassengers={setPassengers} />
                : <></>
            }



        
        </>
    )
};

export default PassengersPage;