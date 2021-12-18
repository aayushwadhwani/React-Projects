import React from 'react';

const List = (props) => {
  let { people } = props;
  console.log(people);
  const newPeople = people.map((p)=>{
    const { name,age,image,id } = p;
    return (
      <article className='person' key={id}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
          {/* <a style={{cursor:'pointer', fontWeight:'bolder'}} onClick={() => people = []}>Delete</a> */}
        </div>
      </article>
    )
  });
  console.log(newPeople);
  return (
    <>
      {newPeople}
    </>
  );
};

export default List;
