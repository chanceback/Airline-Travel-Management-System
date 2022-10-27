import React from "react";

function FlightsPage() {
    return(
        <>
        <table>
        <thead>
        <tr>
            <th>flight_id</th>
            <th>departure_airport</th>
            <th>arrival_airport</th>
            <th>departure_time</th>
            <th>arrival_time</th>
            <th>air_fare</th>
            <th>capacity</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>KLGA</td>
            <td>YSSY</td>
            <td>2022-10-30 08:00:00</td>
            <td>2022-10-30 14:00:00</td>
            <td>5000</td>
            <td>70</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>2</td>
            <td>YSSY</td>
            <td>RKSI</td>
            <td>2022-11-01 07:00:00</td>
            <td>2022-11-01 15:00:00</td>
            <td>5000</td>
            <td>70</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td>KLGA</td>
            <td>RJAA</td>
            <td>2023-02-20 08:00:00</td>
            <td>2023-02-21 20:00:00</td>
            <td>5000</td>
            <td>70</td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
        </table>

        <form method="POST">
        <legend><strong>Add Flight</strong></legend>
            <fieldset class="fields">
                <label> departure airport </label> <select name="departure_airport">
                    <option value="null">select</option>
                    <option value="EIDW">Dublin Airport</option>
                    <option value="1KLGA">LaGuardia Airport</option>
                    <option value="LEZL">Seville Airport</option>
                    <option value="LIMC">Malpensa Airport</option>
                    <option value="RJAA">Narita Airport</option>
                    <option value="RKSI">Incheon Airport</option>
                    <option value="YSSY">Sydney Airport</option>
                </select>

                <label> arrival airport </label> <select name="arrival_airport">
                    <option value="null">select</option>
                    <option value="EIDW">Dublin Airport</option>
                    <option value="1KLGA">LaGuardia Airport</option>
                    <option value="LEZL">Seville Airport</option>
                    <option value="LIMC">Malpensa Airport</option>
                    <option value="RJAA">Narita Airport</option>
                    <option value="RKSI">Incheon Airport</option>
                    <option value="YSSY">Sydney Airport</option>
                </select>
                <label> departure time </label> <input type="datetime-local" name="departure_time" />
                <label> arrival time</label> <input type="datetime-local" name="arrival_time" />
                <label> airfare </label> <input type="number" name="airfare" />
                <label> capacity </label> <input type="number" name="capacity" />       
            </fieldset>
          <input class="btn" type="submit" id="addPassenger" value="Create Flight" />
	</form> 
        </>
    )
};

export default FlightsPage;