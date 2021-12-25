import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { tours, removeTour } = props;

  const singleTours = tours.map( (tour) => {
    return (
      <Tour key={tour.id} infoo={tour} removeTour={removeTour}/>
    );
  });
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div className="underline"></div>
      <div>
        {singleTours}
      </div>
    </section>
  );
};

export default Tours;
