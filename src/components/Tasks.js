import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
    return (
    // empty fragment
    <>
      {/* map takes in a function: for each task, return a jsx */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete}/> // each parent should have a key prop
      ))}
    </>
  );
};

export default Tasks;
