import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Stack
} from '@chakra-ui/react';
const AccountDelete = () => {
    return (
        <section className="account-operation account-window">
            <h2 className='account-window-headers'>Danger Zone</h2>
            <Popover isLazy>
                <Stack direction="row" align="center" spacing={0} className='input-section'>
                    <PopoverTrigger>
                        <Button width="100%" colorScheme="orange" size="lg">Delete Account</Button>
                    </PopoverTrigger>
                </Stack>
                <PopoverContent maxWidth="100%">
                    <PopoverHeader color="crimson" fontWeight='semibold' textAlign="center">Delete Account ? No Going Back!</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody maxW={{ base: "100%", lg: "max-content" }}>
                        <Stack direction="row" style={{ display: "flex", justifyContent: "center" }}>
                            <Button colorScheme="red">Yes</Button>
                            <Button colorScheme="blue">Cancel</Button>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>

        </section>
    )
}
export default AccountDelete