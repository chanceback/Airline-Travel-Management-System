import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
// Needs to receive a JSON from a fetch in airports page
function AirportsTable({ airports, onEdit, onDelete }) {
    return (
        <table id="airports">
            <thead>
                <tr>
                    <th>Airport ID</th>
                    <th>Airport Name</th>
                    <th>Airport Location</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {airports.map((airport, i) => 
                    <tr>
                        <td>{airport.airport_id}</td>
                        <td>{airport.airport_name}</td>
                        <td>{airport.airport_location}</td>
                        <td><MdEdit onClick={() => onEdit(airport)} /></td>
                        <td><MdDeleteForever onClick={() => onDelete(airport.airport_id)} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default AirportsTable;
