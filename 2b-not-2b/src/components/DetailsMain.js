import React from "react";
import Characters from "./Characters.js";
import DisplayPosts from "./Tabs";
import PlayDetails from "./PlayDetails";

const DetailsMain = (props) => {

  const file = () => {
    if (props.fileExists) {
      
      return (<button className="button" onClick={props.toggleReadText}>
        Read
      </button>)
    } else {
      //this will toggle the class to be gray and sad and not allowed woo
      return (<button className="button sadbutton" >
        Read 
      </button>)
    }

    
// .sadbutton {
//   background-color: grey;
//   cursor: not-allowed;
// }
  }

  return (
    <div>
      <div className="playDetailsMain tabs">
        <div className="synopsis">
          <div>
            <h2> Synopsis:</h2>
            <p> {props.play.synopsis}</p>
            {file()}

          </div>
        </div>

        <DisplayPosts
          chars={props.chars}
          play={props.play}
          fileExists={props.fileExists}
        />
      </div>
    </div>
  );
};

export default DetailsMain;
