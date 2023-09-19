import React from "react";
import './block.css';
import { useEffect } from 'react';
import { useState } from "react";
//import Button from "./button";


function Block({data, elems }) {

	const [dataBase] = useState(data)
	const [elemsBase, setElemsBase] = useState(elems)

	useEffect(() => {
		dataBase.forEach((elem) =>{
			if(elem.title === elems.title) {
				setElemsBase(elem)
			}
		})
	}, [elems.title, dataBase]);

	

	return(
		<>
			<h2>{elemsBase.title}</h2>
			<ul>
				{
					elemsBase.issues.map((elem) => {
						return <li><a href="#" id = {elem.id}>{elem.name}</a></li>
					})
				}
			</ul>
		</>
	)
}


export default Block