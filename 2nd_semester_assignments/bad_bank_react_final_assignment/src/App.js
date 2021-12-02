import React from "react";
import {HashRouter, Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Navbar from "./Navbar";
import Home from "./Home";
import CreateAccount from "./CreateAccount";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import AllData from './AllData';

function App() {
	return (
		<HashRouter>
			<Navbar/>
			<div className="container"> 
				<Route path="/" exact component={Home} />
				<Route path="/CreateAccount/" component={CreateAccount} />
				<Route path="/Deposit/" component={Deposit} />
				<Route path="/Withdraw/" component={Withdraw} />
				<Route path="/AllData/" component={AllData} />
			</div>
		</HashRouter>
	);
}

reportWebVitals();

export default App;