import React from "react";
import Characters from "./Characters.js";
import DisplayPosts from "./Tabs";
import PlayDetails from "./PlayDetails";


const DetailsMain = (props) => {
   
   return(
   <div>
        
        <div className="playDetails tabs">
       
       <h2 className="title">{props.play.title}</h2>
       <div className="synopsis">
         <h2> Synopsis:</h2>
         <p> {props.play.synopsis}</p>
         <button className="button">Read</button>
       </div> 
       {/* <PlayDetails play={props.play} /> */}
       {/* <div className="playCharacters"> */}
         {/* <Characters chars={chars} /> */}
         {/* {characters()} */}

       {/* </div> */}
       <DisplayPosts chars={props.chars} play={props.play}/>
     </div>

    </div>
   );
}


export default DetailsMain ;