import React from "react";

const Characters = (props) => {
    console.log(props.chars);
   return (
       props.chars.map(p =>  <div><h2>{p.player}</h2> <h3>{p.desc}</h3></div>)
   )
}

export default Characters;