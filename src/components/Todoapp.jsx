import { useState } from "react";
import { Plus, Calendar, CheckCircle2, Circle, ArrowLeft } from "lucide-react";

const Todoapp = () => {
  //State to track the which screen is currently displayed
  const [currentScreen, setCurrentScreen] = useState("main");

  // State to hold the list of tasks
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Go to work",
      subtitle: "",
      completed: true,
      time: "09:00 AM",
      type: "single",
    },
    {
      id: 2,
      time: "10:30 AM - 11:30 AM",
      title: "Meeting",
      description: "Meeting with John and Alice",
      completed: false,
      type: "meeting",
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@gmail.com",
          Image: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          id: 2,
          name: "Alice Smith",
          email: "alicesmith@gmail.com",
          Image: "https://randomuser.me/api/portraits/women/2.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Lunch",
      description: "Order italian food",
      completed: false,
      time: "12:00 AM",
      type: "single",
    },
  ]);
  // State for creating new tasks
  const [newTask, setNewTask] = useState({
    text: "Test task",
    description: "Complete and turn in the task.",
    completed: false,
    starTime: "11:00",
    endTime: "",
    type: "single",
  }); // state to hold the new task details]

  //containers to handle progress bar
  const completedTasks = tasks.filter((task) => task.completed).length; // count of completed tasks
  const totalTasks = tasks.length; // total number of tasks
  const progressPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) *100 : 0; // calculate progress percentage

  //function to handle toggling task completion
  const toggleTaskCompletion = (taskId) => {
    console.log("Toggling task completion for task ID:", taskId);
    setTasks(
      tasks.map((task) => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
  )
    );
  };
  console.log(completedTasks);
  console.log(totalTasks);
  console.log(progressPercentage);
  //state for adding new tasks

  // calendar data
  const calendarDays = [
    { date: 1 },
    { date: 2 },
    { date: 3 },
    { date: 4 },
    { date: 5 },
    { date: 6 },
    { date: 7 },
    { date: 8 },
    { date: 9 },
    { date: 10 },
    { date: 11 },
    { date: 12 },
    { date: 13 },
    { date: 14 },
    { date: 15 },
    { date: 16 },
    { date: 17 },
    { date: 18 },
    { date: 19 },
    { date: 20 },
    { date: 21 },
    { date: 22 },
    { date: 23 },
    { date: 24 },
    { date: 25 },
    { date: 26 },
    { date: 27 },
    { date: 28 },
    { date: 29 },
    { date: 30 },
    { date: 31 },
  ];
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date(); // This get the current date on users device eg 20 july 2024 12:30 pm
  const todayDate = currentDate.getDate; // this extracts the date itself (1-30) from the currentDate

  if (currentScreen === "main") {
    return (
      <div className="bg-black  max-w-md mx-auto p-4 rounded-md">
        <div className="bg-black">
          <div className="flex justify-between items-center mb-4">
            <div className="h-8 w-10 bg-pink-200 text-black flex items-center justify-center rounded-xl">
              2/9
            </div>
            <div className="h-10 w-10 bg-pink-200 flex justify-center items-center rounded-4xl">
              <img
                src=" https://randomuser.me/api/portraits/women/2.jpg"
                alt="random user"
                className="h-8 w-8 rounded-3xl"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-white text-4xl ">
              Daily <br /> Tasks
            </h1>
            <p className="text-white mt-10">july 10</p>
          </div>
          <div className="bg-gray-700 rounded-full  h-2 mb-4">
             <div className="bg-pink-200 rounded-full transition-all duration-300 h-2" style={{width:`${progressPercentage}%`}}></div>
          </div>
          {/* Displaying tasks */}
          <div className=" space-y-4 rounded-2xl ">
               {tasks.map((task) => (
              <div key={task.id} className={`${task.completed ? "bg-pink-200 text-black " : "bg-gray-800 text-white "} h-26 rounded-2xl p-4 flex justify-between items-center`}>
                <div className="flex justify-between items-center w-full">
                  <div className="flex-col flex justify-between">
                      <p>{task.time}</p> 
                      <h3 className={`font-medium ${task.completed ? "line-through" : ""} my-2`}>{task.title}</h3>
                      {task.description && <p className="text-gray-300">{task.description}</p>}
                  </div>
                    <div className=" flex justify-end items-center">
                  <button onClick={() => toggleTaskCompletion(task.id)}>
                    {task.completed ? (<CheckCircle2 className="text-black" /> ): (<Circle className="text-gray-400" />)}
                  </button>
                 </div>
                </div>
               
              </div>


             ))}
          </div>
          {/*bottom navigation bar */}
          <div className="flex mt-4 justify-between items-center px-12 mt-5">
             <div className="grid grid-cols-2 gap-2">
             <span className="bg-gray-200 h-3 w-3 rounded-full"></span>
              <span className="bg-gray-200 h-3 w-3 rounded-full"></span>
              <span className="bg-gray-200 h-3 w-3 rounded-full"></span>
              <span className="bg-gray-200 h-3 w-3 rounded-full"></span>
             </div>
             <button className=" bg-gray-950 h-10 w-10 text-white rounded-sm flex items-center justify-center" onClick={() => setCurrentScreen("create")}><Plus /></button>
             <div className="bg-black text-white"> <Calendar className="w-8 h-8 text-white" /></div>
          </div>
        </div>
      </div>
    );
  }
  //task creation screen
  else if (currentScreen === "create") {
    return (
      <div className="bg-black h-screen max-w-md mx-auto p-4 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setCurrentScreen("main")}>
            <ArrowLeft className="text-white" />
          </button>
          <h1 className="text-white text-2xl">Create Task</h1>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 space-y-4">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.text}
            onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
            className="w-full p-2 bg-gray-700 text-white rounded-md"
          />
          <textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className="w-full p-2 bg-gray-700 text-white rounded-md"
          />
          <input
            type="time"
            value={newTask.starTime}
            onChange={(e) =>
              setNewTask({ ...newTask, starTime: e.target.value })
            }
            className="w-full p-2 bg-gray-700 text-white rounded-md"
          />
          <button
            onClick={() => {
              setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
              setCurrentScreen("main");
              setNewTask({
                text: "",
                description: "",
                completed: false,
                starTime: "11:00",
                endTime: "",
                type: "single",
              });
            }}
            className="bg-pink-200 text-black px-4 py-2 rounded-md"
          >
            Add Task
          </button>
        </div>
      </div>
    );
  }
};
export default Todoapp;
