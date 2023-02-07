import {
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Stack,
    StackItem,
    Text,
    Textarea
} from '@chakra-ui/react';
import ProfilePicture from './../assets/img/user.png'
import Hr from './shared/Hr';
const Account = () => {
    let addonWidth = "auto";
    return (
        <div>
            <div className="account-page">
                <section className="account-intro account-window">
                    <h2 className='account-window-headers'>Info</h2>
                    <section className='account-intro-profile-section'>
                        <div className='account-intro-profile-image-section'>
                            <div className="account-intro-profile-image">
                                <img src={ProfilePicture} alt="Account Profile Image" />
                                <label htmlFor="account-image-input" className='account-image-input-label'>
                                    <i className="bi bi-camera2"></i>
                                    <Input type="file" name="account_profile_image" id='account-image-input' />
                                </label>
                            </div>
                        </div>
                        <Stack direction="column">
                            <StackItem>
                                <Text fontSize="md" fontWeight="bold">Full Name</Text>
                                <Text>Foster Z</Text>
                            </StackItem>
                            <StackItem>
                                <Text fontSize="md" fontWeight="bold">Username</Text>
                                <Text>Foster0123</Text>
                            </StackItem>
                            <StackItem>
                                <Text fontSize="md" fontWeight="bold">Email</Text>
                                <Text>somethingspecial6834@gmail.com</Text>
                            </StackItem>
                            <StackItem>
                                <Text fontSize="md" fontWeight="bold">Bio</Text>
                                <Text>Some Bio Here</Text>
                            </StackItem>
                        </Stack>
                    </section>
                </section>
                <section className="account-update account-window">
                    <h2 className='account-window-headers'>Update Details</h2>
                    <div>
                        <Stack className='input-section'>
                            <InputGroup>
                                <InputLeftAddon width={addonWidth}>
                                    <i style={{ marginLeft: "2px" }} className="fa-solid fa-user-secret"></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Full Name' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon width={addonWidth}>
                                    <i className="fa-solid fa-user-circle"></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Username' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon width={addonWidth}>
                                    <i className='fa-solid fa-envelope'></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Email' />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon width={addonWidth}>
                                    <i className="bi bi-journal-richtext"></i>
                                </InputLeftAddon>
                                <Textarea borderRadius="0 7px 7px 0" rows={1} name='bio' placeholder='Bio'></Textarea>
                            </InputGroup>
                            <Hr color="teal" width="100%" height="1px" />
                            <InputGroup>
                                <InputLeftAddon width={addonWidth}>
                                    <i className="bi bi-unlock-fill"></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Current Password' />
                                <InputRightAddon width={addonWidth}>
                                    <i className="fa-solid fa-eye-slash"></i>
                                </InputRightAddon>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon width={addonWidth}>
                                    <i className="bi bi-key"></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='New Password' />
                                <InputRightAddon width={addonWidth}>
                                    <i className="fa-solid fa-eye-slash"></i>
                                </InputRightAddon>
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon width={addonWidth}>
                                    <i className="bi bi-lock-fill"></i>
                                </InputLeftAddon>
                                <Input type='text' name='username' placeholder='Confirm Password' />
                                <InputRightAddon width={addonWidth}>
                                    <i className="fa-solid fa-eye-slash"></i>
                                </InputRightAddon>
                            </InputGroup>
                            <Button type='submit'>Submit</Button>
                        </Stack>
                    </div>
                </section>
                <form className="account-additionals account-window">
                    <h2 className='account-window-headers'>Additionals</h2>
                    <Stack className='input-section'>
                        <InputGroup>
                            <InputLeftAddon width={addonWidth}>
                                <i className="fa-solid fa-globe"></i>
                            </InputLeftAddon>
                            <Input type='text' name='website' placeholder='Website' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon width={addonWidth}>
                                <i className='fa-solid fa-phone'></i>
                            </InputLeftAddon>
                            <Input type='text' name='phone' placeholder='Phone Number' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon width={addonWidth}>
                                <i className='fa-solid fa-location'></i>
                            </InputLeftAddon>
                            <Input type='text' name='location' placeholder='Location' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon width={addonWidth}>
                                <i className="fa-solid fa-briefcase"></i>
                            </InputLeftAddon>
                            <Input type='text' name='profession' placeholder='Profession' />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon width={addonWidth}>
                                <i className="bi bi-buildings-fill"></i>
                            </InputLeftAddon>
                            <Input type='text' name='company' placeholder='Company Name' />
                        </InputGroup>
                        <Button type='submit'>Submit</Button>
                    </Stack>
                </form>
                <section className="account-operation account-window">
                    <h2 className='account-window-headers'>Danger Zone</h2>
                    <Stack direction="row" align="center" spacing={4} className='input-section'>
                        <Button width="100%" colorScheme="red" size="lg">Delete Account</Button>
                    </Stack>
                </section>
            </div>
        </div>
    )
}
export default Account;