import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../API";

function BookingPage({setPassengerResults}) {
    // Use navigate for updating
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const lookupPassenger = async () =>{
        const response = await fetch(`${API_URL}/passengers/${firstName}/${lastName}`);
        const passengers = await response.json();
        setPassengerResults(passengers);
        navigate('../booking-search')
        
    }

    const handleSubmit = async e => {
        e.preventDefault()
        lookupPassenger()
    }

    return(
        <>
        <h1>Book Trip</h1>
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


        <p>The results of this process act as the CREATE for Tickets and Itineraries</p>
        </>
    )
};

export default BookingPage;