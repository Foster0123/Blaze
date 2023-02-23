import { useSelector } from "react-redux";
import NavBar from "./shared/NavBar";
import TodoPreview from "./todo/Todo-Preview";
import TodoSideBar from "./todo/Todo-Sidebar";
import TodoBar from "./todo/TodoBar";

const Todo = () => {
    const val = useSelector((state: any) => state.uiSlice.value)
    console.log(val)
    return (
        <div>
            <NavBar />
            <div className="todo-container">
                <div className="todo">
                    <TodoBar />
                    <TodoSideBar />
                    <TodoPreview />
                </div>
            </div>
        </div>
    );
};
export default Todo;
