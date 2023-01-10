
function NavbarModule(props: any) {
	return (
		<>
			<nav className="navbar">
				<div className="navbar-header">
					<img src={props.logoImage} width="50" height="50" alt="Blaze Logo" />
					<header className="nav-title">Blaze</header>
				</div>
				<div>
					<ul className="nav-link-container">
						<li><a href="#">Home</a></li>
						<li><a href="#">Todos</a></li>
						<li><a href="#">Sign In</a></li>
						<li><a href="#">Sign Up</a></li>
						<li><a href="#">About</a></li>
					</ul>
					<ul className="nav-profile-container">
						<li><img src={props.logoImage} alt="Profile Picture" /></li>
						<li><button><i className="fa-solid fa-bars"></i></button></li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default NavbarModule;