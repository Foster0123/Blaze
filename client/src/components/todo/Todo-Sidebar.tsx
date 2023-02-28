import { Box, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text, Stack } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { toggleSideBar } from "../../features/uiSlice"
const TodoSideBar = (props: any) => {
    const dispatch = useDispatch()
    const sidebarVisible = useSelector((state: any) => state.uiSlice.sidebarVisible)
    console.log(sidebarVisible)
    const hideSideBar = {
        transform: "scaleX(0)",
        transition:"transform 200ms ease-in-out",
        transformOrigin: "left"
    }
    window.addEventListener("resize", () => {
        if(window.innerWidth >= 768) {
            dispatch(toggleSideBar(true))
        }
    })
    window.addEventListener("load", () => {
        if(window.innerWidth >= 768) {
            dispatch(toggleSideBar(true))
        }
    })
    return (
        <div className="todo-sidebar-container" style={!sidebarVisible ? hideSideBar : {}}>
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