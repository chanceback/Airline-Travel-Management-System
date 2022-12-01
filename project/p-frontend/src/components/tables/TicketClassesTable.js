import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
// Needs to receive a JSON from a fetch in classes page
function TicketClassesTable({ ticketClasses, onEdit, onDelete }) {
    return (
        <table id="ticket_classes">
            <thead>
                <tr>
                    <th>Class ID</th>
                    <th>Class Name</th>
                    <th>Upgrade Charge</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {ticketClasses.map((ticketClass, i) => 
                    <tr>
                        <td>{ticketClass.class_id}</td>
                        <td>{ticketClass.class_name}</td>
                        <td>{ticketClass.upgrade_charge}</td>
                        <td><MdEdit onClick={() => onEdit(ticketClass)} /></td>
                        <td><MdDeleteForever onClick={() => onDelete(ticketClass.class_id)} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TicketClassesTable;
