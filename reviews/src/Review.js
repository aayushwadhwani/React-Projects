import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const prevFunction = ( ) => {
    setIndex((prev) => {
      if(prev === 0) return people.length-1;
      return prev-1;
    });
  };

  const nextFunction = ( ) => {
    setIndex((prev) => {
      console.log(prev);
      if(prev === people.length-1) return 0;
      return prev+1;
    });
  };

  const randomPerson = () => {
    let randomIndex  = Math.random()*people.length;
    randomIndex = Math.floor(randomIndex);
    if(randomIndex === index) {
      if(randomIndex === people.length-1){
        randomIndex = randomIndex -1;
      }else if(randomIndex === 0){
        randomIndex = randomIndex + 1;
      }else{
        randomIndex = randomIndex + 1;
      }
    }
    setIndex(randomIndex);
    console.log(randomIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevFunction}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextFunction}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}> Surprice </button>
    </article>
  );
};

export default Review;
