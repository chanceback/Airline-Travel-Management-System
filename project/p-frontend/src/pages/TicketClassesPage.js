import React from "react";

function TicketClassesPage() {
    return(
        <>
        <table>
        <thead>
        <tr>
            <th>ticket_class_id</th>
            <th>class_name</th>
            <th>upgrade_charge</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>First Class</td>
            <td>5000</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>2</td>
            <td>Business</td>
            <td>1000</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td>Premium Economy</td>
            <td>500</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td>Economy</td>
            <td>0</td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
        </table>

        <form method="POST">
        <legend><strong>Add Ticket Class</strong></legend>
            <fieldset class="fields">
                <label> class name </label> <input type="text" name="fname" />
                <label> upgrade charge</label> <input type="number" name="lname" />    
            </fieldset>
          <input class="btn" type="submit" id="addTicketClass" value="Add" />
	</form> 
        </>
    )
};

export default TicketClassesPage;