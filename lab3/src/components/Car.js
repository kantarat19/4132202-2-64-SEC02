import React, { useState } from 'react';

const dom = (
  <>
   <h1>Hello React !!!</h1>
   <p>My name is kantarat</p>;
  </>
);

function Car() {
  const [color, setColor] = useState (" purple");

  const id = "630112418062";
  return (
  <>
    {dom}
    <p>ID : {id} </p>
    <p>My color is{color}</p>
    <button>CHANGE</button>
    </>
  );
}

export default Car;