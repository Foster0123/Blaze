import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Stack,
    Textarea
} from '@chakra-ui/react';
import { useState } from 'react';
import Hr from './../modules/Hr';

const AccountUpdate = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const toggleVisibility1 = () => setShowCurrentPassword(!showCurrentPassword)
    const toggleVisibility2 = () => setShowNewPassword(!showNewPassword)
    const toggleVisibility3 = () => setShowConfirmPassword(!showConfirmPassword)
    return (
        <section className="account-update account-window">
            <h2 className='account-window-headers'>Update Details</h2>
            <div>
                <Stack className='input-section'>
                    <InputGroup>
                        <InputLeftAddon>
                            <i style={{ marginLeft: "2px" }} className="fa-solid fa-user-secret"></i>
                        </InputLeftAddon>
                        <Input type='text' name='username' placeholder='Full Name' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className="fa-solid fa-user-circle"></i>
                        </InputLeftAddon>
                        <Input type='text' name='username' placeholder='Username' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className='fa-solid fa-envelope'></i>
                        </InputLeftAddon>
                        <Input type='text' name='username' placeholder='Email' />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className="bi bi-journal-richtext"></i>
                        </InputLeftAddon>
                        <Textarea size="md" borderRadius="0 7px 7px 0" rows={3} name='bio' placeholder='Bio'></Textarea>
                    </InputGroup>
                    <Hr color="teal" width="100%" height="1px" />
                    <InputGroup>
                        <InputLeftAddon>
                            <i className="bi bi-unlock-fill"></i>
                        </InputLeftAddon>
                        <Input type={showCurrentPassword ? 'text' : 'password'} name='username' placeholder='Current Password' />
                        <InputRightAddon onClick={toggleVisibility1}>
                            <i className={showCurrentPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                        </InputRightAddon>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className="bi bi-key"></i>
                        </InputLeftAddon>
                        <Input type={showNewPassword ? 'text' : 'password'} name='username' placeholder='New Password' />
                        <InputRightAddon onClick={toggleVisibility2}>
                            <i className={showNewPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                        </InputRightAddon>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftAddon>
                            <i className="bi bi-lock-fill"></i>
                        </InputLeftAddon>
                        <Input type={showConfirmPassword ? 'text' : 'password'} name='username' placeholder='Confirm Password' />
                        <InputRightAddon onClick={toggleVisibility3}>
                            <i className={showConfirmPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                        </InputRightAddon>
                    </InputGroup>
                    <Button type='submit'>Submit</Button>
                </Stack>
            </div>
        </section>
    )
}

export default AccountUpdate;