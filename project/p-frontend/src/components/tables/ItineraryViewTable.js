import React from 'react';

// Needs to receive a JSON from a fetch in airports page
function ItineraryViewTable({ itinerary }) {

    return (
        <table id="itinerary-view">
            <thead>
                <tr>
                    <th>Flight ID</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Airfare</th>
                    <th>Capacity</th>
                </tr>
            </thead>
            <tbody>
                {itinerary.map((flight, i) => 
                    <tr>
                        <td>{flight.flight_id}</td>
                        <td>{flight.Departure}</td>
                        <td>{flight.Arrival}</td>
                        <td>{flight.dt}</td>
                        <td>{flight.at}</td>
                        <td>{flight.air_fare}</td>
                        <td>{flight.capacity}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default ItineraryViewTable;