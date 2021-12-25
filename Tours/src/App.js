import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async() => {
    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours);
  };

  const removeTour = (id) => {
    const newTours = tours.filter( (tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect( () => {
    fetchTours();
  }, []);

  return (
    <>
    {isLoading ? (
        <main>
          <Loading />
        </main>
      ):(
        <main>
          <Tours tours={tours} removeTour={removeTour}/>
        </main>
      )
    }
    </>
  )
}

export default App
