import 
{ 
	BrowserRouter, 
	Routes, 
	Route 
} 
from "react-router-dom";

import Error from "./components/helpers/404";
import HomePage from "./components/Home";
import Account from "./components/Account";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import ForgotPassword from "./components/helpers/ForgotPassword";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" errorElement={<Error />} element={<HomePage />} />
				<Route path="/todos" element={<Todo />} />
				<Route path="/account" element={<Account />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Error />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
