import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Stack,
    StackItem,
    Text,
    Textarea
} from '@chakra-ui/react';
import ProfilePicture from './../assets/img/user.png'
const Account = () => {

    return (
        <div>
            <div className="account-page">
                <section className="account-intro account-window">
                    <h2 className='account-window-headers'>Info</h2>
                    <section className='account-intro-profile-section'>
                        <div className="account-intro-profile-image">
                            <img src={ProfilePicture} alt="Account Profile Image" />
                            <label htmlFor="account-image-input" className='account-image-input-label'>
                                <i className="bi bi-camera2"></i>
                                <Input type="file" name="account_profile_image" id='account-image-input' />
                            </label>
                        </div>
                        <Stack direction="column">
                            <StackItem>
                                <Text fontSize="xl">Full Name</Text>
                            </StackItem>
                            <StackItem>
                                <Text fontSize="xl">Username</Text>
                            </StackItem>
                            <StackItem>
                                <Text fontSize="xl">Email</Text>
                            </StackItem>
                        </Stack>
                    </section>
                </section>
                <section className="account-update account-window">
                    <h2 className='account-window-headers'>Update Details</h2>
                    <div>
                        <Stack className='input-section'>
                            <InputGroup>
                                <InputLeftAddon>
                                    <i className='fa-solid fa-circle-user'></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Full Name' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon>
                                    <i className='fa-solid fa-circle-user'></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Username' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon>
                                    <i className='fa-solid fa-circle-user'></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Email' />
                            </InputGroup>
                        </Stack>
                    </div>
                </section>
                <section className="account-additionals account-window">
                    <h2 className='account-window-headers'>Additionals</h2>
                    <Stack className='input-section'>
                        <InputGroup>
                            <InputLeftAddon>
                                <i className='fa-solid fa-circle-user'></i>
                            </InputLeftAddon>
                            <Input type='text' name='website' placeholder='Website' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon>
                                <i className='fa-solid fa-phone'></i>
                            </InputLeftAddon>
                            <Input type='text' name='phone' placeholder='Phone Number' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon>
                                <i className='fa-solid fa-location'></i>
                            </InputLeftAddon>
                            <Input type='text' name='location' placeholder='Location' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon>
                                <i className="fa-solid fa-briefcase"></i>
                            </InputLeftAddon>
                            <Input type='text' name='profession' placeholder='Profession' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon>
                                <i className="bi bi-buildings-fill"></i>
                            </InputLeftAddon>
                            <Input type='text' name='company' placeholder='Company Name' />
                        </InputGroup>
                    </Stack>
                </section>
                <section className="account-operation account-window">
                    <h2 className='account-window-headers'>Danger Zone</h2>
                    <Stack direction="row" align="center" spacing={4} className='input-section'>
                        <Button width="100%" colorScheme="red" size="lg">Delete</Button>
                    </Stack>
                </section>
            </div>
        </div>
    )
}
export default Account;