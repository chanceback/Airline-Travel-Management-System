import React from 'react';
import PassengersTable from '../components/tables/PassengersTable';
import { useState, useEffect } from 'react';
import { API_URL } from '../API';
import { useNavigate } from 'react-router-dom';

function PassengersPage({ setPassengerToUpdate }) {
    // Use navigate for updating
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

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

    const lookupPassenger = async () =>{
        const response = await fetch(`${API_URL}/passengers/${firstName}/${lastName}`);
        const passengers = await response.json();
        setPassengers(passengers);
    }

    const handleSubmit = async e => {
        e.preventDefault()
        lookupPassenger()
    }

    // LOAD the Passengers
    useEffect(() => {
        loadPassengers();
    }, []);



    return(
        <>
        <p>Search Passenger</p>
        <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <label>First Name</label>
                    <input type="text" 
                            id="first_name"
                            placeholder="Enter first name:"
                            pattern="^[a-zA-Z \s]+$"
                            required 
                            onChange={e => setFirstName(e.target.value)}/>
                    <label>Last Name</label>
                    <input type="text" 
                            id="last_name"
                            placeholder="Enter last name:"
                            pattern="[a-zA-Z]+"
                            required  
                            onChange={e => setLastName(e.target.value)}/>
                    
                    <label for="submit">
                    <button
                        type="submit"
                        id="submit"
                    >Search</button>
                    </label>
                </fieldset>
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