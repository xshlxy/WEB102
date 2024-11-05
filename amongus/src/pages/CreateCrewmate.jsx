import React, { useState } from 'react';
import './CreateCrewmate.css';
import { supabase } from '../client';

const CreateCrewmate = () => {
    const [crewmates, setCrewmates] = useState({ name: "", speed: "", color: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmates((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const createCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crewmates')
            .insert({ name: crewmates.name, speed: crewmates.speed, color: crewmates.color })
            .select();

        // Redirect after submission
        window.location.href = "/";
    };

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={crewmates.name} onChange={handleChange} /><br />
                <br />

                <label htmlFor="speed">Speed (mph)</label><br />
                <input type="text" id="speed" name="speed" value={crewmates.speed} onChange={handleChange} /><br />
                <br />

                <label>Color</label><br />
                <label>
                    <input type="radio" name="color" value="red" onChange={handleChange} />
                    <span className="color-circle" style={{ backgroundColor: 'red' }}></span> Red
                </label><br />
                <label>
                    <input type="radio" name="color" value="blue" onChange={handleChange} />
                    <span className="color-circle" style={{ backgroundColor: 'blue' }}></span> Blue
                </label><br />
                <label>
                    <input type="radio" name="color" value="green" onChange={handleChange} />
                    <span className="color-circle" style={{ backgroundColor: 'green' }}></span> Green
                </label><br />
                <label>
                    <input type="radio" name="color" value="yellow" onChange={handleChange} />
                    <span className="color-circle" style={{ backgroundColor: 'yellow' }}></span> Yellow
                </label><br /><br />
                
                <input type="submit" value="Submit" onClick={createCrewmate} />
            </form>
        </div>
    );
};

export default CreateCrewmate;
