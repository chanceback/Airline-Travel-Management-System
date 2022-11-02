import React from "react";

function AirportPage() {
    return(
        <>
        <h1>Airports</h1>
        <table>
        <thead>
        <tr>
            <th>airport_id</th>
            <th>airport_name</th>
            <th>airport_location</th>
            <th>description...</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>EIDW</td>
            <td>Dublin Airport</td>
            <td>Ireland</td>
            <td>description...</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>KLGA</td>
            <td>LaGuardia Airport</td>
            <td>New York</td>
            <td>description...</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>LEZL</td>
            <td>Seville Airport</td>
            <td>Spain</td>
            <td>description...</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>LIMC</td>
            <td>Malpensa Airport</td>
            <td>Milan</td>
            <td>description...</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>RJAA</td>
            <td>Narita Airport</td>
            <td>Tokyo</td>
            <td>description...</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>RKSI</td>
            <td>Incheon Airport</td>
            <td>Seoul</td>
            <td>description...</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
        <tr>
            <td>YSSY</td>
            <td>Sydney Airport</td>
            <td>Australia</td>
            <td>description...</td>
            <td><button>edit</button></td>
            <td><button>delete</button></td>
        </tr>
        </tbody>
        </table>

        
        <form method="POST">
        <legend><strong>Add New Airport to Table</strong></legend>
            <fieldset class="fields">
                <label> airport identifier </label> <input type="text" name="airport_id" />
                <label> airport name </label> <input type="text" name="airport_name" />
                <label> airport location </label> <input type="text" name="airport_location" />
                <label> description </label> <input type="text" name="description" />    
            </fieldset>
          <input class="btn" type="submit" id="addAirport" value="Add" />
	    </form> 

        </>
    )
};

export default AirportPage;