import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
// Needs to receive a JSON from a fetch in Passengers page
function PassengersTable({ passengers, onEdit, onDelete }) {

    return (
        <table id="passengers">
            <thead>
                <tr>
                    <th>Passenger ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Passport</th>
                    <th>E-mail</th>
                    <th>Phone Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {passengers.map((passenger, i) => 
                    <tr>
                        <td>{passenger.passenger_id}</td>
                        <td>{passenger.first_name}</td>
                        <td>{passenger.last_name}</td>
                        <td>{passenger.passport}</td>
                        <td>{passenger.email}</td>
                        <td>{passenger.phone_number}</td>
                        <td><MdEdit onClick={() => onEdit(passenger)} /></td>
                        <td><MdDeleteForever onClick={() => onDelete(passenger.passenger_id)} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default PassengersTable;
