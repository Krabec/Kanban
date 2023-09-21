import React from "react";
import './footer.css';

function Footer({activeTask, finishedtasks}) {
	return(
		<footer>
			<div>Active tasks: {activeTask} Finished tasks: {finishedtasks}</div>
			<div>Profile</div>
		</footer>
	)
}

export default Footer