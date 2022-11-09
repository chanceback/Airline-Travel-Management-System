import React, { useState } from 'react';
import { API_URL } from '../../API';
import Axios from 'axios';

function CreatePassenger() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [passport, setPassport] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const addPassenger = async () => {
        const newPassenger = { firstName, lastName, passport, email, phoneNumber}
        const response = await fetch(`${API_URL}/passengers/add`, {
            method: 'post',
            body: JSON.stringify(newPassenger),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 201){
            alert("Successfully added the passenger!")
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`)
        };
    }

  return (
    <>
    <form onSubmit={(e) => { e.preventDefault();}}>
        <legend><strong>Add New Passenger to Table</strong></legend>
            <fieldset class="fields">
                <label for="firstName"> first name </label>
                <input 
                    type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    id="firstName" />

                <label> last name </label> 
                <input 
                    type="text" 
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} 
                    id="lastName" />

                <label> passport # </label> 
                <input 
                    type="text" 
                    name="passport"
                    value={passport}
                    onChange={e => setPassport(e.target.value)}
                    id="passport" />
                <label> email </label> 
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="email" />
                <label> phone number </label> 
                <input 
                    type="text" 
                    name="phone"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    id="phoneNumber" />  

                <label for="submit">
                    <button
                        type="submit"
                        onClick={addPassenger}
                        id="submit"
                    >Add</button>
                </label>     
            </fieldset>
	</form> 
    </>
  );
}

export default CreatePassenger;