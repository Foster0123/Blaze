import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text, Stack } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const styles1 = {
    transform:"scaleX(0)",
    transformOrigin: "left"
}
const styles2 = {
    transform: "scaleX(1)"
}
const TodoSideBar = () => {
    const sidebarActive = useSelector((state: any) => state.uiSlice.value)
    return (
        <div className="todo-sidebar-container" style={!sidebarActive ? styles1 : styles2}>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex={1} textAlign='left'>Completed</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Remaining
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Stack direction="column" spacing={2} className="sidebar-items">
                            <a href="#" >
                                <Text>task-1</Text>
                            </a>
                            <a href="#">
                                <Text>task-2</Text>
                            </a>
                            <a href="#">
                                <Text>task-3</Text>
                            </a>
                            <a href="#">
                                <Text>task-4</Text>
                            </a>
                            <a href="#">
                                <Text>task-5</Text>
                            </a>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
export default TodoSideBar