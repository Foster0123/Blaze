import { Button, IconButton, Stack, Text } from "@chakra-ui/react";

const TodoBar = () => {
    return (
        <div className="todobar-container">
            <div className="todobar">
                <Stack>
                    <h1>Header</h1>
                </Stack>
                <Stack className="todobar-task-name">
                    <Text>Tasks</Text>
                </Stack>
                <Stack direction="row" spacing={2} className="todobar-buttons">
                    <Button size="sm" colorScheme="green">Add</Button>
                </Stack>
            </div>
        </div>
    )
}

export default TodoBar;