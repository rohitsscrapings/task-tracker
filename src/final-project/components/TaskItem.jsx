function TaskItem({ task, onToggleComplete, onDeleteTask }) {
    return (
      <li>
        <label className={task.completed ? "completed" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
          />
          {task.name}
        </label>
  
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </li>
    );
  }
  
  export default TaskItem;
  