import { Button, IconButton, Stack, Text } from "@chakra-ui/react";

const TodoBar = () => {
    return (
        <div className="todobar-container">
            <div className="todobar">
                <Stack direction="row" padding={0}>
                    <IconButton  aria-label="" size="sm" colorScheme="white" variant="outline">
                        <i className="bi bi-layout-sidebar"></i>
                    </IconButton>
                    <Text fontSize="xl">Header</Text>
                </Stack>
                <Stack className="todobar-task-name">
                    <Text>Tasks</Text>
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