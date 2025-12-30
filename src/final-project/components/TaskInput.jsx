function TaskInput({ taskName, setTaskName, onAddTask }) {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        onAddTask();
      }
    };
  
    return (
      <>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={onAddTask}>Add Task</button>
      </>
    );
  }
  
  export default TaskInput;
  