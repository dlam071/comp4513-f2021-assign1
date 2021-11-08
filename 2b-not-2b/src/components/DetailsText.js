import React, { useEffect, useState } from "react";
import TextForm from "./TextForm";
import ScriptText from "./ScriptText";

const DetailsText = (props) => {
	return (
		<section className="playText">
			<div className="textForm">
				<TextForm />
			</div>
			<div className="scriptText">
				<ScriptText 
					play={props}/>
			</div>
		</section>
	)
}

export default Text;