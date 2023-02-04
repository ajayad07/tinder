import React, { useState, useEffect } from 'react';
import './Profile.css';
import TinderCard from 'react-tinder-card';
import axios from "./axios";

function Profile() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/cards");

            setPeople(req.data);
        }
        fetchData();
    }, []);

    const onSwipe = (direction, name) => {
        console.log('Swiping: ' + name);
      }
      
    const onCardLeftScreen = (name) => {
        console.log(name + ' left the screen');
      }
  return (
    <div className="tinder-cards">
        <div className="tinder-container">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    onSwipe={(dir) => onSwipe(dir, person.name)} 
                    onCardLeftScreen={() => onCardLeftScreen(person.name)} 
                    preventSwipe={['up', 'down']}>
                <div className="card" style={{backgroundImage : "url(" + person.url + ")"}}>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
            ))}
        
        </div>
    </div>
  )
}

export default Profile