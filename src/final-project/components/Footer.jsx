function Footer({ totalTasks, completedTasks }) {
    return (
      <footer>
        <p>Total tasks: {totalTasks}</p>
        <p>Completed tasks: {completedTasks}</p>
      </footer>
    );
  }
  
  export default Footer;
  