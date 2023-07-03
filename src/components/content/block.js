import React from "react";
import './block.css';
import Button from "./button";

export const dataMock = [
	{
		 title: 'Backlog',
		 issues: [
			{
				id: '10000',
				name: 'Sprint bugfix',
				description: 'Fix all the bugs'
			},
			{
				id: '10001',
				name: 'Login page – performance issues',
				description: 'Fix all the bugs'
			}
		 ]
	},
	{
		title: 'Ready',
		issues: [
		   {
			   id: '10002',
			   name: 'Shop page – performance issues',
			   description: 'Fix all the bugs'
		   },
		   {
			   id: '10003',
			   name: 'Checkout bugfix',
			   description: 'Fix all the bugs'
		   },
		   {
			id: '10004',
			name: 'Shop bug1',
			description: 'Fix all the bugs'
			},
			{
				id: '10005',
				name: 'Shop bug2',
				description: 'Fix all the bugs'
			},
			{
				id: '10006',
				name: 'Shop page – performance issues',
				description: 'Fix all the bugs'
			}

		]
   },
   {
		title: 'In Progress',
		issues: [
			{
				id: '10007',
				name: 'User page – performance issues',
				description: 'Fix all the bugs'
			},
			{
				id: '10008',
				name: 'Auth bugfix',
				description: 'Fix all the bugs'
			}
	]
	},
	{
		title: 'Finished',
		issues: [
		   {
			   id: '10009',
			   name: 'Main page – performance issues',
			   description: 'Fix all the bugs'
		   },
		   {
			   id: '10010',
			   name: 'Main page bugfix',
			   description: 'Fix all the bugs'
		   }
		]
		},
	// и так далее
 ]

function Block(props) {

	let elements;
	dataMock.forEach((elem) =>{
		if(props.title === elem.title) {
			return elements = elem.issues
		}
	})

	return(
		<div className="block">
			<h2>{props.title}</h2>
			<ul>
				{
					elements.map((elem) => {
						return <li><a href="#" id = {elem.id}>{elem.name}</a></li>
					})
				}
			</ul>
			<Button title={props.title}/>
		</div>
	)
}


export default Block