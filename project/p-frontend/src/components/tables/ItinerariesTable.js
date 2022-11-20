import React from 'react';
import { MdVisibility, MdDeleteForever } from 'react-icons/md';

// Needs to receive a JSON from a fetch in airports page
function ItinerariesTable({ itineraries, onView, onDelete }) {
    return (
        <table id="itineraries">
            <thead>
                <tr>
                    <th>Itinerary ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Passport</th>
                    <th>Trip Name</th>
                    <th>view</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {itineraries.map((itinerary, i) => 
                    <tr>
                        <td>{itinerary.itinerary_id}</td>
                        <td>{itinerary.first_name}</td>
                        <td>{itinerary.last_name}</td>
                        <td>{itinerary.passport}</td>
                        <td>{itinerary.trip_name}</td>
                        <td><MdVisibility onClick={() => onView(itinerary)} /></td>
                        <td><MdDeleteForever onClick={() => onDelete(itinerary.itinerary_id)} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default ItinerariesTable;