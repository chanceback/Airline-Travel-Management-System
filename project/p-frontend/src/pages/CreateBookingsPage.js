import React, { useState, useEffect } from "react";
import { API_URL } from "../API";
import {MdAddCircleOutline} from 'react-icons/md'

function CreateBookingPage({passenger}) {
    const [ticketClass, setTicketClass] = useState('')

    const [flightChoices, setFlightChoices] = useState([''])
    const [inputFields, setInputFields] = useState([''])
    const handleAddFields = () => {
        setInputFields([...inputFields, []])
    }

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
      }




    // Use state to bring in the data
    const [flights, setFlights] = useState([]);
    const [classes, setClasses] = useState([])
    
    // RETRIEVE the list of flights
    const loadFlights = async () => {
        const response = await fetch(`${API_URL}/flights-table`);
        const flights = await response.json();
        setFlights(flights);
    } 

    // RETRIEVE the list of flights
    const loadClasses = async () => {
        const response = await fetch(`${API_URL}/ticket-classes`);
        const classes = await response.json();
        setClasses(classes);
    } 

    // LOAD Flights
    useEffect(() => {
        loadFlights()
        loadClasses()
    }, []);


    return(
        <>
        <h1>Book Trip</h1>
        <p>Fill out the following form and the appropriate Itinerary/Tickets will be generated for the given Passenger.</p>
        <p>{`${passenger.first_name} ${passenger.last_name}, Passport: ${passenger.passport}`}</p>
        
        <form onSubmit={(e) => { e.preventDefault();}}>
            <fieldset class="fields">
                <label>Flight Class</label>
                <select value={ticketClass}  onChange={e => setTicketClass(e.target.value)}>
                    <option value="null">Select...</option>
                    {classes.map((ticketClass, i) =>
                        <option value={ticketClass.class_id} key={i}>{ticketClass.class_name}</option>
                    )}
                </select>
                
                {inputFields.map((inputField, i) => 
                    <>
                    <label>Flight {i+1}</label>
                    <select value={inputFields[i]} onChange={e => setInputFields[i](e.target.value)}>
                        <option value="null">Select...</option>
                        {flights.map((flight, i) =>
                            <option value={flight} key={i}>
                                {`${flight.Departure} -> ${flight.Arrival}
                                ${flight.dt} -> ${flight.at}`}
                            </option>
                        )}
                    </select>
                    <MdAddCircleOutline onClick={handleAddFields} />
                    </>
                )}

                    <label>Flight</label>
                    <select value={inputFields} onChange={e => setInputFields(e.target.value)}>
                        <option value="null">Select...</option>
                        {flights.map((flight, i) =>
                            <option value={flight} key={i}>
                                {`${flight.Departure} -> ${flight.Arrival}
                                ${flight.dt} -> ${flight.at}`}
                            </option>
                        )}
                    </select>
                    <MdAddCircleOutline onClick={handleAddFields} />

                <label for="submit">
                    <button
                        type="submit"
                        
                        id="submit"
                    >Book</button>
                </label>     
            </fieldset>
	</form> 

        <p>The submission of this form acts as the INSERT for Tickets and Itineraries</p>
        </>
    )
};

export default CreateBookingPage;