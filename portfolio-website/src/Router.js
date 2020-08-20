import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Banner from './components/Banner/Banner';





const Router = () =>
{
	return <div>
				<Switch>
					{/* <Route exact path="/">
        				<Redirect to="/FriendChatBar"/>
      				</Route>
					<Route component={FriendChatBar} exact path='/FriendChatBar'/>
					<Route component={Home} exact path='/home'/> */}


					{/* <Route exact path="/">
        				<Redirect to="/home"/>
      				</Route> */}

					<Route component={NavBar} exact path='/NavBar'/>
					<Route component={Home} exact path='/'/>
					<Route component={Banner} exact path='/Banner'/>


				</Switch>

				
				
			</div>
}

export default Router;