import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

function App() {
	return (
		<div className="container">
			<Header />
			<Main />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));
