import { useState } from "react";
import { Stack, InputGroup, InputLeftAddon, InputRightAddon, Input, Checkbox, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "./shared/NavBar";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showRetypePassword, setShowRetypePassword] = useState(false)

    const toggleVisibility1 = () => setShowPassword(!showPassword)
    const toggleVisibility2 = () => setShowRetypePassword(!showRetypePassword)
    return (
        <div>
            <NavBar />
            <div className="signin-form-container">
                <form action="" className="signin-form">
                    <Stack>

                        <Text fontSize="4xl" textAlign="center">Register</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-fill"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signup_fullname" placeholder="Fullname" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Name Invalid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-circle"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signup_username" placeholder="Username" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Username Invalid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-envelope"></i>
                            </InputLeftAddon>
                            <Input type="text" name="signup_email" placeholder="Email" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "16px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Email Invalid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-key"></i>
                            </InputLeftAddon>
                            <Input type={showPassword ? 'text' : 'password'} name="signup_password" placeholder="Password" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }} onClick={toggleVisibility1}>
                                <i style={{ fontSize: "16px" }} className={showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Password Invalid</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-lock"></i>
                            </InputLeftAddon>
                            <Input name="signup_retype_password" type={showRetypePassword ? 'text' : 'password'} placeholder="Retype Password" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }} onClick={toggleVisibility2}>
                                <i style={{ fontSize: "16px" }} className={showRetypePassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Password Doesnt Match</Text>
                        <Checkbox name="signup_remember">Remember Me</Checkbox>
                        <Button>Register</Button>
                    </Stack>
                </form>
            </div>
        </div>
    )
}
export default Signup;