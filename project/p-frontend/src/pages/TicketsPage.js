import React from "react";

function TicketsPage() {
    return(
        <>
        <h1>Tickets</h1>
        <table>
        <thead>
        <tr>
            <th>ticket_id</th>
            <th>itinerary_id</th>
            <th>flight_id</th>
            <th>ticket_class_id</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>3</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
        </tr>
        <tr>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>4</td>
        </tr>
        </tbody>
        </table>

        <p><strong>Tickets are created through the booking page. To delete a ticket, delete the Itinerary containing the ticket.</strong></p>
        </>
    )
};

export default TicketsPage;