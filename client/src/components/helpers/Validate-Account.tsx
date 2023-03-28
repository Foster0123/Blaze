import { Button, HStack, PinInput, PinInputField, Stack, Text } from "@chakra-ui/react"
import Footer from "../shared/Footer";
const ValidateAccount = () => {
    return (
        <div className="validate-account-container">
            <section className="validate-account-header-section">
                <h1 className="validate-account-header">Please Validate Your Account</h1>
            </section>
            <section className="validate-account-section">
                <Stack mb={4} fontWeight="bold">
                    <Text align="center" fontSize="24px">Enter The Code</Text>
                    </Stack>
                <HStack>
                    <PinInput type='alphanumeric' size="lg" otp>
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                        <PinInputField />
                    </PinInput>
                </HStack>
                <Stack mt={4}>
                    <Button colorScheme="green">Activate Account</Button>
                </Stack>
            </section>
            <Footer />
        </div>
    )
}
export default ValidateAccount;