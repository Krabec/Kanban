import React from "react";
import './footer.css';

function Footer({activeTask, finishedtasks}) {
	return(
		<footer>
			<div className="info-tasks">
				<div>Active tasks: {activeTask}</div>
				<div>Finished tasks: {finishedtasks}</div>
			</div>
			<div className="kanban-board">Kanban board by Ivan Krabec</div>
		</footer>
	)
}

export default Footer