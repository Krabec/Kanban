import React from "react";
import './button.css';
import { dataMock } from "./block";


class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			button: false,
			value: null,
			id: 10000,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick() {
		this.setState({
			button: !this.state.open
		})
	}

	handleClickS(value, title) {
		dataMock.forEach((elem, i) =>{
			if(title === elem.title) {
				dataMock[i].issues.push({id: this.state.id + 1, name: value, description: 'Fix all the bugs'});
				this.setState({
					id: this.state.id + 1
				})				
				console.log(dataMock[i].issues)
			}
		})
		this.setState({
			button: !this.state.open,
			value: null,
		})
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		let button
		let elements
		const { title } = this.props
		let window = null;
		
		if (this.state.button) {
			if(title === "Backlog") {
				window = <>
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
				</>
			} else {
				dataMock.forEach((elem, i) =>{
					if(title === elem.title) {
						elements = dataMock[i - 1].issues
					}
				})
				window = <>
					<select value={this.state.value} onChange={this.handleChange}>
						<option value=""></option>
						{	
							elements.map((e) => {
								console.log(e.name)
								return (<option value={e.name}>{e.name}</option>)
							})	
						}

					</select>
				</>
			}
		}

		if (this.state.value) {
			button = <button className="submit" onClick={() => this.handleClickS(this.state.value, title)}>
				Submit
			</button>
		} else {
			button = <button className="add-card" onClick={() => this.handleClick()}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14 7H9V2C9 1.448 8.552 1 8 1C7.448 1 7 1.448 7 2V7H2C1.448 7 1 7.448 1 8C1 8.552 1.448 9 2 9H7V14C7 14.552 7.448 15 8 15C8.552 15 9 14.552 9 14V9H14C14.552 9 15 8.552 15 8C15 7.448 14.552 7 14 7Z" fill="#5E6C84"/>
				</svg>
				Add card
			</button>	
		}
		return(
			<>
				{window}
				{button}
			</>
			
		)
		
	}
} 

export default Button