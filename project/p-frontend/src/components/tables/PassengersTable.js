import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
// Needs to receive a JSON from a fetch in Passengers page
function PassengersTable({ passengers, onEdit, onDelete }) {

    return (
        <table id="passengers">
            <caption>Current Passengers</caption>
            <thead>
                <tr>
                    <th>passenger_id</th>
                    <th>first_name</th>
                    <th>last_name</th>
                    <th>passport</th>
                    <th>email</th>
                    <th>phone_number</th>
                    <th>edit</th>
                    <th>delete</th>
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