import React from "react";
import './header.css';
import UserMenu from "./userMenu";

function Header() {
	return(
		<header>
			<div>Awesome Kanban Board</div>
			<UserMenu/>
		</header>
	)
}

export default Header