import React from 'react';

// Needs to receive a JSON from a fetch in classes page
function TicketsTable({ tickets }) {
    return (
        <table id="tickets">
            <thead>
                <tr>
                    <th>Ticket ID</th>
                    <th>Itinerary ID</th>
                    <th>Flight ID</th>
                    <th>Ticket Class ID</th>
                </tr>
            </thead>
            <tbody>
                {tickets.map((tickets, i) => 
                    <tr>
                        <td>{tickets.ticket_id}</td>
                        <td>{tickets.itinerary_id}</td>
                        <td>{tickets.flight_id}</td>
                        <td>{tickets.ticket_class}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TicketsTable;