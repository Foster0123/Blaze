import {
    Stack,
    Input,
    InputGroup,
    InputLeftAddon,
    Text,
    Button,
    Checkbox,
    InputRightAddon,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { Axios } from 'axios'
import Footer from './shared/Footer'
import NavBar from './shared/NavBar'
import GoogleIcon from './../assets/img/icons/social/google.png'
import background from './../assets/img/bg/background-2.svg'

const serverURL = "http://localhost:3000"

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const axios = new Axios()
    const toggleVisibility1 = () => setShowPassword(!showPassword)
    
    const handleSubmit = async (form: any): Promise<any> => {
        console.log(form)
        await axios.post(form.target.action, new FormData(form.target))
        navigate("/signin")
    }
    return (
        <div
            className="signin-form-section"
            style={{ backgroundImage: `url(${background})` }}
        >
            <NavBar />
            <div className="signin-form-container">
                <form action={`${serverURL}/signin`} className="signin-form" method="POST" onSubmit={handleSubmit}>
                    <Stack>
                        <Text fontSize="4xl" textAlign="center">
                            Sign In
                        </Text>
                        <InputGroup>
                            <InputLeftAddon
                                style={{
                                    paddingLeft: '5px',
                                    paddingRight: '5px',
                                }}
                            >
                                <i
                                    style={{ fontSize: '24px' }}
                                    className="bi bi-person-circle"
                                ></i>
                            </InputLeftAddon>
                            <Input
                                type="text"
                                name="signin_user"
                                placeholder="Username or Email"
                            />
                        </InputGroup>
                        <Text
                            textAlign="right"
                            fontSize="md"
                            color="var(--default-fg-error)"
                        >
                            Username Invalid
                        </Text>
                        <InputGroup>
                            <InputLeftAddon
                                style={{
                                    paddingLeft: '5px',
                                    paddingRight: '5px',
                                }}
                            >
                                <i
                                    style={{ fontSize: '24px' }}
                                    className="bi bi-key"
                                ></i>
                            </InputLeftAddon>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                name="signin_password"
                                placeholder="Password"
                            />
                            <InputRightAddon
                                style={{
                                    paddingLeft: '5px',
                                    paddingRight: '5px',
                                }}
                                onClick={toggleVisibility1}
                            >
                                <i
                                    className={
                                        showPassword
                                            ? 'fa-solid fa-eye'
                                            : 'fa-solid fa-eye-slash'
                                    }
                                ></i>
                            </InputRightAddon>
                        </InputGroup>
                        <Text
                            textAlign="right"
                            fontSize="md"
                            color="var(--default-fg-error)"
                        >
                            Password Invalid
                        </Text>
                        <Checkbox name="remember">Remember Me</Checkbox>
                        <Text fontSize="md" textAlign="center">
                            Forgot Password?
                            <Link
                                style={{
                                    color: 'yellowgreen',
                                    fontWeight: 'bold',
                                    fontSize: '18px',
                                    marginLeft: '10px',
                                }}
                                to="/forgot-password"
                            >
                                Reset
                            </Link>
                        </Text>
                        <Button type='submit'>Sign In</Button>
                        <Button
                            colorScheme="orange"
                            type="submit"
                            isDisabled={true}
                            title='Coming Soon'
                            leftIcon={
                                <img
                                    src={GoogleIcon}
                                    width="25"
                                    height="25"
                                    alt="google icon"
                                />
                            }
                        >
                            Sign In With Google
                        </Button>
                    </Stack>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Signin
