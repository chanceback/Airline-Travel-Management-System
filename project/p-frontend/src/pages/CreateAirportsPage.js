import React, { useState } from 'react';
import { API_URL } from '../API';
import { useNavigate } from 'react-router-dom';

function CreateAirportsPage() {
    const [airport_id, setAirport_id] = useState('')
    const [airport_name, setAirport_name] = useState('')
    const [airport_location, setAirport_location] = useState('')

    const navigate = useNavigate()

    const addAirport = async () => {
        const newAirport = { airport_id, airport_name, airport_location }
        const response = await fetch(`${API_URL}/airports/add`, {
            method: 'post',
            body: JSON.stringify(newAirport),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 201){
            alert("Successfully added the Airport!")

        } else {
            alert(`Failed to add airport, status code = ${response.status}`)
        };
        navigate('../airports')
    }

    const handleSubmit = async e => {
        e.preventDefault()
        addAirport()
    }

  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)}>
        <legend><strong>Add New Airport to the Table</strong></legend>
            <fieldset class="fields">
                <label for="airport_id"> Airport ID </label>
                <input 
                    type="airport_id" 
                    name="airport_id"
                    placeholder="Enter Airport ID:"
                    pattern="[a-zA-Z]+"
                    required 
                    value={airport_id}
                    onChange={e => setAirport_id(e.target.value)}
                    id="airport_id" />

                <label> Airport Name </label> 
                <input 
                    type="airport_name" 
                    name="airport_name"
                    placeholder="Enter Airport Name:"
                    pattern="^[a-zA-Z \s]+$"
                    required
                    value={airport_name}
                    onChange={e => setAirport_name(e.target.value)} 
                    id="airport_name" />

                <label> Airport location </label> 
                <input 
                    type="airport_location" 
                    name="airport_location"
                    placeholder="Enter Airport Location:"
                    pattern="^[a-zA-Z \s]+$"
                    required
                    value={airport_location}
                    onChange={e => setAirport_location(e.target.value)}
                    id="airport_location" />

                <label for="submit">
                    <button
                        type="submit"
                        id="submit"
                    >Add</button>
                </label>     
            </fieldset>
	</form> 
    </>
  );
}

export default CreateAirportsPage;
