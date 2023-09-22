import React from "react";
import { useState } from "react";
import { dataBase } from "../../dataBase"
import AddCard from "./AddCard";
import Block from "./block";
import "./content.css";
import TaskWindow from "./TaskWindow";
import { Route, Routes } from "react-router-dom"

function Content({countTask}) {

	const [data, setDataBase] = useState(() => {
		if (localStorage.dataBase) {
			const localStorageData = JSON.parse(localStorage.dataBase)
			return (localStorageData)
		} else return (dataBase)
	})

	function footerContent () {
		let activeTask;
		let finishedtasks;

		data.forEach((elem) =>{
			if(elem.title === "Backlog") {
				activeTask = elem.issues.length
			} if(elem.title === "Finished") {
				finishedtasks = elem.issues.length
			}
		})

		countTask(activeTask, finishedtasks)
	}

	footerContent()

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
							data.map((elems,i) =>{
								return (
									<div className="block">
										<Block elems = {elems} />
										{((i === 0)) && 
											<AddCard title={elems.title} data = {data} addDataBase={addDataBase}/>
										}
										{((i > 0) && (data[i - 1].issues.length > 0)) && 
											<AddCard title={elems.title} data = {data} addDataBase={addDataBase}/>
										}
									</div>
									
								)
						})}
					</div>
				} />
				{data.map((elems) =>{
					return (
						elems.issues.map((elem) => {
							return (<Route path={"/tasks/" + elem.id} element={ <TaskWindow data={elem} handleClickUpdate={handleClickUpdate}/> }/>)
						})
					)	
				})}
				
			</Routes>			
		</main>
		
	)
}

export default Content