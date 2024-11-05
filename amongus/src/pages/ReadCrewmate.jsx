import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';
import './ReadCrewmate.css';

const ReadCrewmate = (props) => {
    const [crewmates, setCrewmates] = useState(props.data || []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('Crewmates')
                    .select()
                    .order('created_at', { ascending: true });
                
                if (error) throw error;
                
                // Update state only if data is fetched successfully
                setCrewmates(data);
            } catch (error) {
                console.error("Error fetching crewmates:", error.message);
            }
        };

        fetchPosts();
    }, []); // Empty dependency array to fetch data only once on mount

    return (
        <div className="ReadCrewmate">
            {
                crewmates && crewmates.length > 0 ? (
                    crewmates.map((crewmate) => (
                        <Card 
                            key={crewmate.id} // Unique key prop
                            id={crewmate.id} 
                            name={crewmate.name} 
                            speed={crewmate.speed} 
                            color={crewmate.color} 
                        />
                    ))
                ) : (
                    <h2>{'No Crewmates Yet 😞'}</h2>
                )
            }
        </div>
    );
};

export default ReadCrewmate;
