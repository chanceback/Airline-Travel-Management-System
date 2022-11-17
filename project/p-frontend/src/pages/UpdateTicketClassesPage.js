import {React, useState} from "react";
import { API_URL } from "../API";
import { useNavigate } from 'react-router-dom';

function UpdateTicketClassesPage({ ticketClass }){
    const [class_name, setClass_name] = useState(ticketClass.class_name)
    const [upgrade_charge, setUpgrade_charge] = useState(ticketClass.upgrade_charge)

    const navigate = useNavigate()

    const editClasses = async () => {
        const response = await fetch(`${API_URL}/ticket-classes/${ticketClass.class_id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                class_name: class_name,
                upgrade_charge: upgrade_charge
            }),
            headers: {'Content-Type': 'application/json',},
        });
        if (response.status === 200) {
            alert("Successfully edited the class!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update exercise. Status ${response.status}. ${errMessage.Error}`);
        }
        navigate('../ticket-classes')
    }

    return (
        <>
        <h1>Edit Class Information</h1>
        <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Class ID: {ticketClass.class_id}</legend>
                    <label for="class_name">Class Name</label>
                    <input
                        type="text"
                        value={class_name}
                        onChange={e => setClass_name(e.target.value)} 
                        id="class_name" />
                    <label for="upgrade_charge">Upgrade</label>
                    <input
                        type="text"
                        value={upgrade_charge}
                        onChange={e => setUpgrade_charge(e.target.value)} 
                        id="upgrade_charge" />

                    <label for="submit">
                    <button
                        onClick={editClasses}
                        id="submit"
                    >Save</button></label>
                </fieldset>
            </form>
        </>
    )
}

export default UpdateTicketClassesPage;