import { Stack, Input, InputGroup, InputLeftAddon, Text, Button, FormLabel, Checkbox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "./shared/NavBar";

const Signin = () => {
    return (
        <div>
            <NavBar />
            <div className="signin-form-container">
                <form action="" className="signin-form">
                    <Stack>
                        <Text fontSize="4xl" textAlign="center" >Sign In</Text>
                        <InputGroup>
                            <InputLeftAddon style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                <i style={{ fontSize: "24px" }} className="bi bi-person-circle"></i>
                            </InputLeftAddon>
                            <Input type="text" placeholder="Username or Email" />
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Username Invalid</Text>
                        <InputGroup>
                            <InputLeftAddon style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                <i style={{ fontSize: "24px" }} className="bi bi-key"></i>
                            </InputLeftAddon>
                            <Input type="password" placeholder="Password" />
                        </InputGroup>
                        <Text textAlign="right" fontSize="md" color="red">Password Invalid</Text>
                        <Checkbox name="remember">Remember Me</Checkbox>
                        <Text fontSize="md">
                            Forgot Password?
                            <Link style={{ color: "teal", fontWeight: "bold" }} to="/forgot-password"> Reset</Link>
                        </Text>
                        <Button>Sign In</Button>
                    </Stack>
                </form>
            </div>
        </div>
    );
};
export default Signin;
