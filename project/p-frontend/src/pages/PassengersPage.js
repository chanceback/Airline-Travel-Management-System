import React from "react";

function PassengersPage() {
    return(
        <>
        <h1>Passengers</h1>

            <form method="GET">
                <fieldset>
                    <label>Lookup Passenger by Passport #</label><input type="text" name="search_passenger" />
                </fieldset>
                <button>Search</button>
            </form>

            <table>
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
            <tr>
                <td>1</td>
                <td>Sterling</td>
                <td>Archer</td>
                <td>542637785</td>
                <td>archer@hello.com</td>
                <td>814-825-5951</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Stede</td>
                <td>Bonnet</td>
                <td>919608451</td>
                <td>bonnet@hello.com</td>
                <td>919-252-6000</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Steve</td>
                <td>Harrington</td>
                <td>135516591</td>
                <td>harrington@hello.com</td>
                <td>505-820-2961</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Mabel</td>
                <td>Mora</td>
                <td>637071702</td>
                <td>mora@hello.com</td>
                <td>315-794-6533</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Michael</td>
                <td>Scott</td>
                <td>571921982</td>
                <td>scott@hello.com</td>
                <td>716-475-1975</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr>
                <td>6</td>
                <td>Buffy</td>
                <td>Summers</td>
                <td>678996728</td>
                <td>summers@hello.com</td>
                <td>813-273-1085</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            <tr>
                <td>7</td>
                <td>Jeff</td>
                <td>Winger</td>
                <td>218571886</td>
                <td>winger@hello.com</td>
                <td>408-558-2426</td>
                <td><button>edit</button></td>
                <td><button>delete</button></td>
            </tr>
            </tbody>
            </table>


    <form method="POST">
        <legend><strong>Add New Passenger to Table</strong></legend>
            <fieldset class="fields">
                <label> first name </label> <input type="text" name="fname" />
                <label> last name </label> <input type="text" name="lname" />
                <label> passport # </label> <input type="text" name="passport" />
                <label> email </label> <input type="email" name="email" />
                <label> phone number </label> <input type="tel" name="phone" />       
            </fieldset>
          <input class="btn" type="submit" id="addPassenger" value="Add" />
	</form> 
        </>
    )
};

export default PassengersPage;