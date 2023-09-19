import React from "react";
import './button.css';
import { useState } from "react";
//import { dataBase } from "../../dataBase";
//import { dataMock } from "./content";

function Button({title, data, addDataBase }) {

	const [isValide, setISValide] = useState(false);
	const [value, setValue] = useState('');
	const [dates, setDates] = useState('');
	const [datus, setDatas] = useState(data)


	const handleClickAdd = () => {
		setDates(value)
		setISValide(!isValide)
		setValue('')
		addDataBase("Backlog", "10001")
	}

	const handleClick = () => {
		setISValide(!isValide)
	}

	const handleChange = (event) => {
		setValue(event.target.value);
	}

	let form;
	let elements

	if (title !== "Backlog") {
		form = 
		<>
			{isValide === true && 
				<select value={value} onChange={(e) => handleChange(e)}>
				{
					datus.forEach((elem, i) =>{
						if(title === elem.title) {
							elements = datus[i - 1].issues
						}
				})}
				{	
							elements.map((e) => {
								return (<option value={e.name}>{e.name}</option>)
							})	
						}
				</select>
			}
			{(value !== '' && isValide) ? 
				<button type="submit" className="submit" onClick={() => handleClickAdd()}>
					Submit
				</button>
				: 
				<button className="add-card" onClick={() => handleClick()}>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z" fill="#5E6C84"/>
					</svg>
					Add card
				</button> 
			}
		</>
	} else {
		form = 
		<>
			<form id ='add'>
				<label>
					{isValide === true && <input type="text" value={value} onChange={(e) => handleChange(e)}/>}
				</label>
			</form>
			{(value !== '' && isValide) ? 
				<button type="submit" form="add" className="submit" onClick={() => handleClickAdd()}>
					Submit
				</button>
				: 
				<button className="add-card" form="add" onClick={() => handleClick()}>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z" fill="#5E6C84"/>
					</svg>
					Add card
				</button> 
			}
		</>
		
	}

	return(
		<>
			{form}
		</>
		
	)
	
} 

export default Button