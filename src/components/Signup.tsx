import { Stack, InputGroup, InputLeftAddon, InputRightAddon, Input, Checkbox, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "./shared/NavBar";

const Signup = () => {
    return (
        <div>
            <NavBar />
            <div className="signin-form-container">
                <form action="" className="signin-form">
                    <Stack>

                        <Text fontSize="4xl" textAlign="center">Sign In</Text>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }}className="bi bi-person-fill"></i>
                            </InputLeftAddon>
                            <Input type="text" placeholder="Fullname" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-circle"></i>
                            </InputLeftAddon>
                            <Input type="text" placeholder="Username" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-envelope"></i>
                            </InputLeftAddon>
                            <Input type="text" placeholder="Email" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>

                        <InputGroup>
                            <InputLeftAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-key"></i>
                            </InputLeftAddon>
                            <Input type="password" placeholder="Password" />
                            <InputRightAddon style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                                <i style={{ fontSize: "24px" }} className="bi bi-info-circle"></i>
                            </InputRightAddon>
                        </InputGroup>

                        <Checkbox name="remember">Remember Me</Checkbox>

                        <Text fontSize="md">
                            Forgot Password?
                            <Link style={{ color: "teal", fontWeight: "bold" }} to="/forgot-password">Reset</Link>
                        </Text>

                        <Button>Sign In</Button>
                    </Stack>
                </form>
            </div>
        </div>
    )
}
export default Signup;