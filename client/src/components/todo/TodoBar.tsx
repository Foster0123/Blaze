import { Button, IconButton, Stack, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { showSideBar } from "../../features/uiSlice";
const TodoBar = () => {
    const dispatch = useDispatch()
    const sidebarActive = useSelector((state: any) => state.uiSlice.value)
    return (
        <div className="todobar-container">
            <div className="todobar">
                <Stack direction="row" padding={0}>
                    <IconButton aria-label="" size="sm" colorScheme="white" variant="outline" onClick={() => dispatch(showSideBar)}>
                        <i className="bi bi-layout-sidebar"></i>
                    </IconButton>
                    <Text fontSize="xl">User's Todo Dashboard</Text>
                </Stack>
                <Stack direction="row" spacing={2} className="todobar-buttons">
                    <Button size="sm" colorScheme="green">Add</Button>
                    <Button isDisabled size="sm" colorScheme="red">Delete</Button>
                </Stack>
            </div>
        </div>
    )
}

export default TodoBar;