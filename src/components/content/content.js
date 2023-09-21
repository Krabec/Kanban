import React from "react";
import { useState } from "react";
import { dataBase } from "../../dataBase"
import AddCard from "./AddCard";
import Block from "./block";
import "./content.css";
import { LocalClear } from "./Button/LocalClear";
import TaskWindow from "./TaskWindow";
import { Route, Routes } from "react-router-dom"

function Content() {

	const [data, setDataBase] = useState(() => {
		if (localStorage.dataBase) {
			const localStorageData = JSON.parse(localStorage.dataBase)
			console.log("монтирование")
			console.log(localStorageData)
			return (localStorageData)
		} else return (dataBase)
	})

	function addDataBase(title, name) {

		let newData = data.slice();
		let element;

		if(title !== 'Backlog') {
			newData.forEach((elem, i) =>{
				if(title === elem.title) {
					element = newData[i - 1].issues
					element.forEach((el, j) => {
							if(el.name === name) {
								newData[i].issues.push(newData[i - 1].issues[j]);
								newData[i - 1].issues.splice(j, 1);
								setDataBase(newData)
								localStorage.setItem('dataBase', JSON.stringify(newData))
							}						
					})
				}
	
			})
		} else {
			newData[0].issues.push({
				id: String(Math.floor(1000000 * Math.random())),
				name: name,
				description: ''
			})
			setDataBase(newData)
			localStorage.setItem('dataBase', JSON.stringify(newData))
			
		}
	}

	function handleClickUpdate (e) {
		let newData = data.slice();

		const suffering = e.target.value.split("{/d/")
        const id = suffering[1]
		const description = suffering[0]
/* 		console.log(e.target.value)
		console.log(id) */

		newData.forEach((elem, i) =>{
				elem.issues.forEach((el, j) => {
						if(el.id === id) {
							newData[i].issues[j].description = description
							setDataBase(newData)
							localStorage.setItem('dataBase', JSON.stringify(newData))
						}						
				})
			

		})
    }

	return(
		<main> 
			<Routes>
				<Route path="/" element={
					<div className="blocks">
						{
							data.map((elems) =>{
								return (
									<div className="block">
										<Block elems = {elems} />
										<AddCard title={elems.title} data = {data} addDataBase={addDataBase}/>
									</div>
									
								)
						})}
						<LocalClear/>
					</div>
				} />
				{data.map((elems) =>{
					return (
						elems.issues.map((elem) => {
							console.log("/" + elem.id)
							return (<Route path={"/tasks/" + elem.id} element={ <TaskWindow data={elem} handleClickUpdate={handleClickUpdate}/> }/>)
						})
					)	
				})}
				
			</Routes>			
		</main>
		
	)
}

export default Content