import MyModal from "./shared/Modal";
const Todo = () => {
  let todos = [
    {
      id: 1,
      content:
        "Task-1 it seems like this todo is wayy much larger and longer than i expected it to be",
    },
    { id: 2, content: "Task-2" },
    { id: 3, content: "Task-3" },
    { id: 4, content: "Task-4" },
    { id: 5, content: "Task-5" },
  ];
  return (
    <div className="px-2">
      <MyModal />
    </div>
  );
};
export default Todo;
