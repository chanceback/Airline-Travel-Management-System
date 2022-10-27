import React from "react";

function CreateBookingPage() {
    return(
        <>
        <form method="POST">
        <legend><strong>Book Trip</strong></legend>
            <fieldset class="fields">
                <label> first name </label> <input type="text" name="fname" />
                <label> last name </label> <input type="text" name="lname" />
                <label> passport # </label> <input type="text" name="passport" />
                <label> trip name </label> <input type="text" name="trip_name" />
                <label> Flight 1 </label> <select name="flight_1">
                    <option value="null">select</option>
                    <option value="EIDW">Flight ID 1</option>
                    <option value="1KLGA">Flight ID 2</option>
                    <option value="LEZL">Flight ID 3</option>
                </select>
                <label> Flight 2 </label> <select name="flight_2">
                    <option value="null">select</option>
                    <option value="EIDW">Flight ID 1</option>
                    <option value="1KLGA">Flight ID 2</option>
                    <option value="LEZL">Flight ID 3</option>
                </select>
                <label> Flight n </label> <select name="flight_n">
                    <option value="null">select</option>
                    <option value="EIDW">Flight ID 1</option>
                    <option value="1KLGA">Flight ID 2</option>
                    <option value="LEZL">Flight ID 3</option>
                </select> 
            </fieldset>
          <input class="btn" type="submit" id="addItinerary" value="Book" />
	    </form> 
        </>
    )
};

export default CreateBookingPage;