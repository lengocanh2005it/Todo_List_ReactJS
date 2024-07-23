import { Dispatch, FC, SetStateAction } from "react";
import { Task } from "../../pages/HomePage";
import TaskItem from "../TaskItem/TodoItem";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import "./TasksList.css";

interface TasksListProps {
  tasks: Task[] | undefined;
  setName: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
}

const TasksList: FC<TasksListProps> = ({ tasks, setName, setDescription }) => {
  return (
    <div
      className="task-item"
      style={{
        display: !tasks || tasks?.length === 0 ? "block" : "grid",
      }}
    >
      {tasks?.length === 0 || !tasks ? (
        <h1
          style={{
            fontSize: "20px",
          }}
        >
          You don't have any tasks. Please add new task!
        </h1>
      ) : (
        tasks?.map((task, index) => {
          return (
            <div
              key={index}
              className="task-inner"
              onClick={() => {
                setName(task.name);
                setDescription(task.description);
                document.querySelector(".modal")?.classList.add("show");
                setTimeout(() => {
                  document
                    .querySelector(".modal-content")
                    ?.classList.add("show");
                }, 300);
              }}
            >
              <TaskItem name={task.name} description={task.description} />

              <div className="bottom-inner">
                <FaPenSquare />
                <FaTrash />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TasksList;
