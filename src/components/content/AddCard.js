import React from "react";
import './AddCard.css';
import { useState } from "react";
import { ButtonAdd } from "./Button/ButtonAdd";
import { ButtonSubmit } from "./Button/ButtonSubmit";


function AddCard({title, data, addDataBase }) {

	const [isValide, setISValide] = useState(false);
	const [value, setValue] = useState('');
	const [dataBase] = useState(data)

	const handleClickSubmit = () => {
		setISValide(!isValide)
		addDataBase(title, value)
		setValue('')
	}

	const handleClickAdd = () => {
		setISValide(!isValide)
	}

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	let form;
	let elements
	let buttons = 
		<>
				{(value !== '' && isValide) && 
					<ButtonSubmit handleClickSubmit={handleClickSubmit}/>
				}
				{(!isValide) &&
					<ButtonAdd handleClickAdd={handleClickAdd}/>
				}
		</>

	if (title !== "Backlog") {
		form = 
		<>
			{isValide === true && 
				<select value={value} onChange={(e) => handleChange(e)}>
					<option selected disabled hidden></option>
				{
					dataBase.forEach((elem, i) =>{
						if(title === elem.title) {
							console.log(title)
							elements = dataBase[i - 1].issues
						}
				})}
				{	
							elements.map((e) => {

								return (<option value={e.name}>{e.name}</option>)
							})	
						}
				</select>
			}
			{buttons}
		</>
	} else {
		form = 
		<>
			{
				isValide === true && 
				<input placeholder="___________________________________________"type="text" value={value} onChange={(e) => handleChange(e)}/>
			}

			{buttons}
		</>
		
	}

	return(
		<>
			{form}
		</>
		
	)
	
} 

export default AddCard