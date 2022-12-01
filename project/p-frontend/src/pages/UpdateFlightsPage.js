import {React, useState, useEffect} from "react";
import { API_URL } from "../API";
import { useNavigate } from 'react-router-dom';

function UpdateFlightsPage({ flight }){
    const [departureAirport, setDepartureAirport] = useState(flight.departure_airport)
    const [arrivalAirport, setArrivalAirport] = useState(flight.arrival_airport)
    const [departureTime, setDepartureTime] = useState(flight.dt)
    const [arrivalTime, setArrivalTime] = useState(flight.at)
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

    const handleSubmit = async e => {
        e.preventDefault()
        editFlight()
    }

    // Use state to bring in the data
    const [airports, setAirports] = useState([]);
    
    // RETRIEVE the list of airports
    const loadAirports = async () => {
        const response = await fetch(`${API_URL}/airports`);
        const airports = await response.json();
        setAirports(airports)
    } 

    // LOAD Airports
    useEffect(() => {
        loadAirports();
    }, []);


    return (
        <>
        <h1>Edit a Flights Information</h1>
        <form onSubmit={e => handleSubmit(e)}>
        <legend><strong>Edit Flight: {flight.flight_id}</strong></legend>
            <fieldset class="fields">
                <label>Departure Airport</label>
                <select value={departureAirport} onChange={e => setDepartureAirport(e.target.value)}>
                    {airports.map((airport, i) =>
                        <option value={airport.airport_id} key={i}>{airport.airport_name}</option>
                    )}
                    <option value=''>none</option>
                </select>
                
                <label>Arrival Airport</label>
                <select value={arrivalAirport} onChange={e => setArrivalAirport(e.target.value)}>
                    {airports.map((airport, i) =>
                        <option value={airport.airport_id} key={i}>{airport.airport_name}</option>
                    )}
                    <option value=''>none</option>
                </select>

                <label>Departure Time</label> 
                <input 
                    type="datetime-local" 
                    name="departure-time"
                    pattern="datetime-local"
                    required
                    value={departureTime}
                    onChange={e => setDepartureTime(e.target.value)}
                    id="departure-time" />
                <label>Arrival Time</label> 
                <input 
                    type="datetime-local" 
                    name="arrival-time"
                    pattern="datetime-local"
                    required
                    value={arrivalTime}
                    onChange={e => setArrivalTime(e.target.value)}
                    id="arrival-time" />
                <label>Airfare</label> 
                <input 
                    type="number" 
                    name="airfare"
                    pattern="[0-9]+"
                    placeholder="Enter Airfare:"
                    required
                    value={airfare}
                    onChange={e => setAirfare(e.target.value)}
                    id="phoneNumber" />  
                <label>Capacity</label> 
                <input 
                    type="number" 
                    name="capacity"
                    pattern="[0-9]+"
                    placeholder="Enter Capacity:"
                    required
                    value={capacity}
                    onChange={e => setCapacity(e.target.value)}
                    id="capacity" />  

                <label for="submit">
                    <button
                        type="submit"
                        id="submit"
                    >Save</button>
                </label>     
            </fieldset>
	</form> 
    </>
    )
}


export default UpdateFlightsPage;