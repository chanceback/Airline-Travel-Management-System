import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

// Needs to receive a JSON from a fetch in airports page
function FlightsTable({ flights, onEdit, onDelete }) {
    return (
        <table id="flights">
            <thead>
                <tr>
                    <th>Flight ID</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Departure Time</th>
                    <th>Arrival Time</th>
                    <th>Airfare</th>
                    <th>Capacity</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight, i) => 
                    <tr>
                        <td>{flight.flight_id}</td>
                        <td>{flight.Departure}</td>
                        <td>{flight.Arrival}</td>
                        <td>{flight.dt}</td>
                        <td>{flight.at}</td>
                        <td>{flight.air_fare}</td>
                        <td>{flight.capacity}</td>
                        <td><MdEdit onClick={() => onEdit(flight)} /></td>
                        <td><MdDeleteForever onClick={() => onDelete(flight.flight_id)} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default FlightsTable;