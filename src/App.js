import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
const  [tours,setTours] = useState([]);

  const getTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    console.log(tours);
  };

  useEffect(() => {
    getTours();
  }, []);
  return (
    <>
      <h3>Tours</h3>
      <ul>
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <li key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{info}</p>
                <p>{price}</p>
              </div>
            </li>
          );
        })}
        </ul>
    </>
  );
};


export default App
