import React, { useEffect } from "react";

export const Game = () => {
  return (
    <Board />
  )
}

const Board = () => {
  useEffect(()=>{
  },[]);
  
  const row = new Array(3).map((item, i) => <Square key={i}/> );
  console.log(row);
  return (
    <div>
        {row}
    </div>
  )
}

const Square = () => {
  
  return (
    <button>Button</button>
  );
}