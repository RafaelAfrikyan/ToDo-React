import ToDoList from "./toDoList"

function ToDoFooter ({todos, onComleted}) {
    const completed = todos.filter((todo) => todo.isCompleted).length
    return ( <div>
        <span>{completed}/{todos.length} Completed</span>
        <button onClick={onComleted}>Clear Comleted</button>
    </div> )
}
export default ToDoFooter