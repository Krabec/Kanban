import React from "react";
import { useState } from "react";
import { dataBase } from "../../dataBase"
import { useEffect } from 'react';
import Button from "./button";
import Block from "./block";
import "./content.css";

function Content() {

	const [data, setDataBase] = useState(dataBase)

	function addDataBase(title, id) {
		let newData = data;
		let element;
		newData.forEach((elem, i) =>{
			if(title === elem.title) {
				element = newData[i].issues
				element.forEach((el, j) => {
					if(el.id === id) {
						newData[i + 1].issues.push(newData[i].issues[j]);
						delete newData[i].issues[j];
					}
				})
			}

		})
		setDataBase(newData)
	}

	return(
		<main>
			<div className="blocks">
				{
					data.map((elems) =>{
						return (
							<div className="block">
								<Block data = {data} elems = {elems}/>
								<Button title={elems.title} data = {data} addDataBase={addDataBase}/>
							</div>
							
						)
				})}
			</div>
		</main>
		
	)
}

export default Content