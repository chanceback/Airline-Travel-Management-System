import {React, useState} from "react";
import { API_URL } from '../../API';

function UpdatePassenger({ passenger, setPassengers }){
    const [firstName, setFirstName] = useState(passenger.first_name)
    const [lastName, setLastName] = useState(passenger.last_name)
    const [passport, setPassport] = useState(passenger.passport)
    const [email, setEmail] = useState(passenger.email)
    const [phoneNumber, setPhoneNumber] = useState(passenger.phone_number)

    const editPassenger = async () => {
        const response = await fetch(`${API_URL}/passengers/${passenger.passenger_id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                firstName: firstName,
                lastName: lastName,
                passport: passport,
                email: email,
                phoneNumber: phoneNumber
            }),
            headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            const getResponse = await fetch(`${API_URL}/passengers`);
            const passengers = await getResponse.json();
            setPassengers(passengers);
            alert("Successfully edited passenger!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update exercise. Status ${response.status}. ${errMessage.Error}`);
        }
    }

    return (
        <>
        <label>Update a Passenger</label>
        <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="firstName">First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} 
                        id="firstName" />
                    
                    <label for="lastName">Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} 
                        id="lastName" />

                    <label for="passport">Passport</label>
                    <input
                        type="text"
                        value={passport}
                        onChange={e => setPassport(e.target.value)} 
                        id="passport" />

                    <label for="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        id="email" >
                    </input>

                    <label for="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        id="phoneNumber" />

                    <label for="submit">
                    <button
                        onClick={editPassenger}
                        id="submit"
                    >Save</button></label>
                </fieldset>
            </form>
        </>
    )
}

export default UpdatePassenger;