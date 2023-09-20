import React from "react";
import './block.css';
import { useState } from "react";

function Block({ elems }) {

	const [elemsBase] = useState(elems)

	return(
		<>
			<h2>{elemsBase.title}</h2>
			<ul>
				{
					elemsBase.issues.map((elem) => {
						return <li key={elem.id}><a href="#" id = {elem.id}>{elem.name}</a></li>
					})
				}
			</ul>
		</>
	)
}


export default Block