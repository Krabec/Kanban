import { Link } from "react-router-dom"
import React from "react";
import './block.css';
import { useState } from "react";

function Block({ elems}) {

	const [elemsBase] = useState(elems)

	return(
		<>
			<h2>{elemsBase.title}</h2>
			<ul>
				{
					elemsBase.issues.map((elem) => {
						return <li key={elem.id}><Link to={"/tasks/" + elem.id}>{elem.name}</Link></li>
					})
				}
			</ul>
		</>
	)
}


export default Block