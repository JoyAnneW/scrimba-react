import React from "react";
import reactLogo from "../images/react-logo.png";

export default function Header() {
	return (
		<header>
			<nav>
				<img src={reactLogo} alt="react logo" width="40px" />
				<title>ReactFacts</title>
				<span>React Course - Project 1</span>
			</nav>
		</header>
	);
}
