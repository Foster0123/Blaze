import { Stack, Input, InputGroup, InputLeftAddon, Text, Button, FormLabel, Checkbox, InputRightAddon } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const toggleVisibility1 = () => setShowPassword(!showPassword)
    return (
        <div className="signin-form-section">
            <NavBar />
            <div className="signin-form-container">
                <form action="" className="signin-form">
                    <Stack>
                        <Text fontSize="4xl" textAlign="center" >Sign In</Text>
                        <InputGroup>
                            <InputLeftAddon style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-circle"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signin_username_email" placeholder="Username or Email" />
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Username Invalid</Text>
                        <InputGroup>
                            <InputLeftAddon style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                <i style={{ fontSize: "24px" }} className="bi bi-key"></i>
                            </InputLeftAddon>
                            <Input type={showPassword ? 'text' : 'password'} name="signin_password" placeholder="Password" />
                            <InputRightAddon style={{paddingLeft:"5px", paddingRight:"5px"}} onClick={toggleVisibility1}>
                                <i className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Password Invalid</Text>
                        <Checkbox name="remember">Remember Me</Checkbox>
                        <Text fontSize="md" textAlign="center">
                            Forgot Password?
                            <Link style={{ color: "yellowgreen", fontWeight: "bold", fontSize:"18px", marginLeft: "10px" }} to="/forgot-password">Reset</Link>
                        </Text>
                        <Button>Sign In</Button>
                    </Stack>
                </form>
            </div>
            <Footer />
        </div>
    );
};
export default Signin;
