import React from "react";

function ItinerariesPage() {
    return(
        <>
        <h1>Itineraries</h1>
        <table>
        <thead>
        <tr>
            <th>itinerary_id</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>passport_#</th>
            <th>trip_name</th>
            <th>view</th>
            <th>cancel</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Sterling</td>
            <td>Archer</td>
            <td>542637785</td>
            <td>Archer Vacation 2022</td>
            <td><button>view</button></td>
            <td><button>cancel</button></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Stede</td>
            <td>Bonnet</td>
            <td>919608451</td>
            <td>Bonnet Business Trip</td>
            <td><button>view</button></td>
            <td><button>cancel</button></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Buffy</td>
            <td>Summers</td>
            <td>678996728</td>
            <td>Buffy Family Trip</td>
            <td><button>view</button></td>
            <td><button>cancel</button></td>
        </tr>
        </tbody>
        </table>
        </>
    )
};

export default ItinerariesPage;