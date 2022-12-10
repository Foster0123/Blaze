import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="./src/assets/img/blaze.png"
          className="mr-3 h-6 sm:h-9"
          alt="Blaze Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Blaze
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="text-center">
        <Navbar.Link href="/" active={true}>Home</Navbar.Link>
        <Navbar.Link href="/tasks">Tasks</Navbar.Link>
        <Navbar.Link href="/account">Account</Navbar.Link>
        <Navbar.Link href="/signin">Sign In</Navbar.Link>
        <Navbar.Link href="/signup">Sign Up</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
