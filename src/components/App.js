import '../css/App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import NavBar from './NavBar'; 
import { useEffect, useState } from 'react';
import Home from './Home';
import Table from './Table';
import Comp1 from './Comp1';



function App() {

    return (
		<Router>
			<NavBar/>
				<Switch>	
					<Route path='/Comp1' component={Comp1}/>
					<Route path='/Table' component={Table}/>
					<Route path='/' component={Home}/>
				</Switch>
		</Router>
    );
}

export default App;
