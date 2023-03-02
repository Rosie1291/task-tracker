const tasks = [
  {
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 5th at 2:30pm",
    reminder: true,
  },
  {
    id: 2,
    text: "School Meeting",
    day: "Feb 6th at 10:a0pm",
    reminder: true,
  },
  {
    id: 3,
    text: "Grocery Shopping",
    day: "Feb 8th at 5:30pm",
    reminder: false,
  },
];

const Tasks = () => {
  return (
    // empty fragment
    <>
      {/* map takes in a function: for each task, return a jsx */}
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3> // each parent should have a key prop
      ))}
    </>
  );
};

export default Tasks;
