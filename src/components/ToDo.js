import { useState } from "react";

const ToDo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState({name: "", id: "", done: false});
    const { name } = task;
    const handlerChange = ({ target}) => {
        const { name } = target;
        const { value } = target;
        setTask({...task, [name]: value, id: new Date().getTime(), done: false });
    };
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(task);
        const newtask = [...todos, task];
        setTodos(newtask);
        setTask({ ...task, name: ""});
    };
    const removeTask = (id) => {
        const newTodo = todos.filter(item => item.id !== id);
        setTodos(newTodo);
    };
    return (
    <div>
        <ol>
            {todos.map((item) => (
                <li key={item.id}>
                    {item.name} <button 
                    onClick={() => {
                        removeTask(item.id);
                    }}
                >
                    Eliminar
                </button>
                </li>
            ))}
        </ol>
        <form onSubmit={onSubmitForm}>
            <input type="texto" name="name" value={name} onChange={handlerChange} />
            <button type="submit">Add task</button>
        </form>
    </div>
    );
};
export default ToDo;