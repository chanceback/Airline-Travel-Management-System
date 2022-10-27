import React from "react";

function ItinerariesPage() {
    return(
        <>
        <table>
        <thead>
        <tr>
            <th>itinerary_id</th>
            <th>passenger_id</th>
            <th>trip_name</th>
            <th>view</th>
            <th>cancel</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>Archer Vacation 2022</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>2</td>
            <td>2</td>
            <td>Bonnet Business Trip</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td>6</td>
            <td>Buffy Family Trip</td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
        </table>
        </>
    )
};

export default ItinerariesPage;