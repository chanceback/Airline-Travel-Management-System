import {React, useState, useEffect} from "react";
import { API_URL } from "../API";
import { useNavigate } from 'react-router-dom';

function UpdateFlightsPage({ flight }){
    const [departureAirport, setDepartureAirport] = useState('')
    const [arrivalAirport, setArrivalAirport] = useState('')
    const [departureTime, setDepartureTime] = useState(flight.departure_time)
    const [arrivalTime, setArrivalTime] = useState(flight.arrival_time)
    const [airfare, setAirfare] = useState(flight.air_fare)
    const [capacity, setCapacity] = useState(flight.capacity)

    const navigate = useNavigate()

    const editFlight = async () => {
        const response = await fetch(`${API_URL}/flights/${flight.flight_id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                departure_airport: departureAirport,
                arrival_airport: arrivalAirport,
                departure_time: departureTime,
                arrival_time: arrivalTime,
                air_fare: airfare,
                capacity: capacity

            }),
            headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            alert("Successfully edited the flight!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update exercise. Status ${response.status}. ${errMessage.Error}`);
        }
        navigate('../flights')
    }

    // Use state to bring in the data
    const [airports, setAirports] = useState([]);
    
    // RETRIEVE the list of airports
    const loadAirports = async () => {
        const response = await fetch(`${API_URL}/airports`);
        const airports = await response.json();
        setAirports(airports);
    } 

    // LOAD Airports
    useEffect(() => {
        loadAirports();
    }, []);


    return (
        <>
        <h1>Edit a Flights Information</h1>
        <form onSubmit={(e) => { e.preventDefault();}}>
        <legend><strong>Edit Flight: {flight.flight_id}</strong></legend>
            <fieldset class="fields">
                <label>Departure Airport</label> 
                <select name="departure-airport">
                    <option value="null">select</option>
                    {airports.map((airport, i) => 
                        <option value={departureAirport} OnChange={e => setDepartureAirport(e.target.value)}>{airport.airport_name}</option>
                    )}
                </select>

                <label>Arrival Airport</label> 
                <select name="arrival-airport">
                    <option value="null">select</option>
                    {airports.map((airport, i) => 
                        <option value={arrivalAirport} OnChange={e => setArrivalAirport(e.target.value)}>{airport.airport_name}</option>
                    )}
                </select>

                <label>Departure Time</label> 
                <input 
                    type="datetime-local" 
                    name="departure-time"
                    value={departureTime}
                    onChange={e => setDepartureTime(e.target.value)}
                    id="departure-time" />
                <label>Arrival Time</label> 
                <input 
                    type="datetime-local" 
                    name="arrival-time"
                    value={arrivalTime}
                    onChange={e => setArrivalTime(e.target.value)}
                    id="arrival-time" />
                <label>Airfare</label> 
                <input 
                    type="number" 
                    name="airfare"
                    value={airfare}
                    onChange={e => setAirfare(e.target.value)}
                    id="phoneNumber" />  
                <label>Capacity</label> 
                <input 
                    type="number" 
                    name="capacity"
                    value={capacity}
                    onChange={e => setCapacity(e.target.value)}
                    id="capacity" />  

                <label for="submit">
                    <button
                        type="submit"
                        onClick={editFlight}
                        id="submit"
                    >Save</button>
                </label>     
            </fieldset>
	</form> 
        </>
    )
}

export default UpdateFlightsPage;