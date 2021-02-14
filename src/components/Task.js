const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div>
            <li >
                <p>Description : {task.text}</p>
                <p>Day : {task.day}</p>
                <p>Reminder: {task.reminder.toString()}</p>
                <p onClick={() => { onDelete(task.id) }}>Delete Task</p>
                <p onClick={() => { onToggle(task.id) }}>Toggle Reminder</p>
            </li>
        </div>
    )
}

export default Task
