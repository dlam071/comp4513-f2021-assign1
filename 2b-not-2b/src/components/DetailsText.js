import React, { useEffect, useState } from "react";
import TextForm from "./TextForm";
import ScriptText from "./ScriptText";
import "../styles/DetailsText.css";

const DetailsText = (props) => {
	return (
		<section className="playText">
			<div className="textForm">
				<TextForm
					toggleReadText={props.toggleReadText}
				/>
			</div>
			<div className="scriptText">
				<ScriptText 
					play={props}
					/>
			</div>
		</section>
	)
}

export default DetailsText;