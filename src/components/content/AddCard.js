import React from "react";
import './button.css';
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
		console.log(event.target)
		setValue(event.target.value);
	}

	let form;
	let elements

	if (title !== "Backlog") {
		form = 
		<>
			{isValide === true && 
				<select value={value} onChange={(e) => handleChange(e)}>
					<option value=''></option>
				{
					dataBase.forEach((elem, i) =>{
						if(title === elem.title) {
							elements = dataBase[i - 1].issues
						}
				})}
				{	
							elements.map((e) => {
								console.log(e.id)
								return (<option value={e.name}>{e.name}</option>)
							})	
						}
				</select>
			}
			{(value !== '' && isValide) ? 
				<ButtonSubmit handleClickSubmit={handleClickSubmit}/>
				: 
				<ButtonAdd handleClickAdd={handleClickAdd}/>
			}
		</>
	} else {
		form = 
		<>
			{
				isValide === true && 
				<input type="text" value={value} onChange={(e) => handleChange(e)}/>
			}

			{(value !== '' && isValide) ? 
				<ButtonSubmit handleClickSubmit={handleClickSubmit}/>
				: 
				<ButtonAdd handleClickAdd={handleClickAdd}/>
			}
		</>
		
	}

	return(
		<>
			{form}
		</>
		
	)
	
} 

export default AddCard