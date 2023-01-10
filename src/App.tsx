import 
{ 
	BrowserRouter, 
	Routes, 
	Route 
} 
from "react-router-dom";

import Error from "./components/shared/404";
import NavBar from "./components/shared/NavBar";
import HomePage from "./components/HomePage";
import Account from "./components/Account";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Todo from "./components/Todo";

import Logo from "./assets/img/blaze.png";

import "./assets/scss/main.scss";

function App() {
	return (
		<BrowserRouter>
			<NavBar logoImage = {Logo} />
			<Routes>
				<Route path="/" errorElement={<Error />} element={<HomePage />} />
				<Route path="/todos" element={<Todo />} />
				<Route path="/account" element={<Account />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
