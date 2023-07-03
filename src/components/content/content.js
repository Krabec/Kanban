import React from "react";
import Block from "./block";
import "./content.css";

function Content() {
	return(
		<main>
			<div className="blocks">
				<Block title={"Backlog"}/>
				<Block title={"Ready"}/>
				<Block title={"In Progress"}/>
				<Block title={"Finished"}/>
			</div>
		</main>
		
	)
}

export default Content