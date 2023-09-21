import React, { useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Content from "./components/content/content";


function App() {

	const [activeTask, setActiveTask] = useState(0)
	const [finishedtasks, setFinishedtasks] = useState(0)

	function countTask (active, finished) {
		console.log(active)
		console.log(finished)
		setActiveTask(active)
		setFinishedtasks(finished)
	}

	return(
		<>
			<Header/>
			<Content countTask = {countTask}/>
			<Footer activeTask = {activeTask} finishedtasks = {finishedtasks}/>
		</>
	)
}

export default App