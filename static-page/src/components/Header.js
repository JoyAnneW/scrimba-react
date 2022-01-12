import React from "react";
import reactLogo from "../images/react-logo.png";

export default function Header() {
	return (
		<header>
			<nav className="navigation">
				<img src={reactLogo} alt="react logo" className="nav-img" />
				<h3 className="nav_main-heading">ReactFacts</h3>
				<h4 className="nav_sub-heading">React Course - Project 1</h4>
			</nav>
		</header>
	);
}
