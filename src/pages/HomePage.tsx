import { useState } from "react";
import TaskInput from "../components/TaskInput/TaskInput";
import TasksList from "../components/TasksList/TasksList";
import Modal from "../components/Modal/Modal";

export interface Task {
  name: string;
  description: string;
}

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[] | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="container">
      <div className="left-container">
        <h1>Todo List</h1>
        <TaskInput setTasks={setTasks} />
      </div>

      <div className="right-container">
        <h1>Your tasks</h1>
        <div className="right-inner">
          <TasksList
            tasks={tasks}
            setName={setName}
            setDescription={setDescription}
          />
        </div>
      </div>

      {/* modal */}
      <Modal name={name} description={description} />
    </div>
  );
};

export default HomePage;
