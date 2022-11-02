import React from "react";

function CreateBookingPage() {
    return(
        <>
        <h1>Book Trip</h1>
        <p>Fill out the following form and the appropriate Itinerary/Tickets will be generated for the given Passenger based on your input.</p>
        <form method="POST">
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
                <label> Choose Ticket Class</label> <select name="flight_n">
                    <option value="null">select</option>
                    <option value="4">Economy</option>
                    <option value="3">Premium Economy</option>
                    <option value="2">Business</option>
                    <option value="1">First Class</option>
                </select> 
            </fieldset>
          <input class="btn" type="submit" id="addItinerary" value="Book" />
	    </form> 
        <p>The goal is for the actual form to have a dynamic list of Flights that will allow you to choose as little or many as needed.</p>
        <p>The submission of this form acts as the INSERT for Tickets and Itineraries</p>
        </>
    )
};

export default CreateBookingPage;