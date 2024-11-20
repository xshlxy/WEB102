import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import { useEffect } from 'react'

const Card = ({data}) =>  {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const fetchCount = async () => {
          const { data: fetchedData, error } = await supabase
            .from('Posts')
            .select('id, title, author, description, created_at, like_count')
            .eq('id', data.id)
            .single();
            
          if (error) {
            console.error("Error fetching count:", error);
          } else if (fetchedData) {
            setCount(fetchedData.like_count || 0); // Set the initial count from database
          }
        };
        fetchCount();
      }, [data.id]); // Runs only once when the component mounts
    
      
      

      const updateCount = async (event) => {
        event.preventDefault();
    
        const newCount = count + 1;
        
        // Update the count in the database
        const { error } = await supabase
          .from('Posts')
          .update({ like_count: newCount })
          .eq('id', data.id);
          
        if (error) {
          console.error("Error updating count:", error);
        } else {
          setCount(newCount); // Update the count locally after successful DB update
        }
      };
    

  return (
      <div className="Card">
          
          <h2 className="title">{data.title}</h2>
          <h3 className="author">{"by " + data.author}</h3>
          <p><strong>Created at:</strong> {new Date(data.created_at).toLocaleString()}</p>
          <p className="upvotes">Upvotes: {count}</p>
          <Link to={'more/'+ data.id}><img className="moreButton" alt="more button" src={more} /></Link>
          <button className="likeButton" onClick={updateCount}>Upvote</button>
      </div>
  );
};

export default Card;