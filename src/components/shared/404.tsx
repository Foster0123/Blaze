import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="error-page">
			<div className="error-header">
				<i className="bi bi-emoji-frown"></i>
				<h1>404 Not Found</h1>
			</div>
			<div className="back-to-home-from-error">
				<button>
					<Link className="text-2xl text-white bg-zinc-900 p-3 rounded-full" to="/">Back To Home</Link>
				</button>
			</div>
		</div>
	);
};
export default Error;
