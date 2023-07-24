import 
{ 
	BrowserRouter as Router, 
	Routes, 
	Route
} 
from "react-router-dom";

import NotFound from "./components/helpers/404";
import Forbidden from "./components/helpers/403";
import HomePage from "./components/Home";
import Account from "./components/Account";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import ForgotPassword from "./components/helpers/Forgot-Password";
import CheckEmail from "./components/helpers/Check-Email";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Axios from 'axios'
import ValidateAccount from "./components/helpers/Validate-Account";

function App() {
	const [ auth, setAuth ] = useState(true);
	let value = useSelector((state: any) => state.authSlice.authenticated)
	// useEffect(() => {
	// 	try {
	// 		Axios.get("http://localhost:3000")
	// 		.then(res => {console.log(res.data.auth);setAuth(res.data.auth)})
	// 		.catch((err) => console.error(err))
	// 	}
	// 	catch (err) {
	// 		console.error(err)
	// 	}
	// }, [])
	return (
		<Router>
			<Routes>
				<Route path="/" index errorElement={<NotFound />} element={<HomePage />} />
				<Route path="/todos" element={<Todo />} />
				{(() => {
					if(auth){
						return(
							<Route path="/account" element={<Account />} />
						)
					}
					else {
						return(
							<Route path="/account" element={<Forbidden />} />
						)
					}
				})()}
				
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signup/validate-account" element={<ValidateAccount />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/forgot-password/check-email" element={<CheckEmail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
export default App;
