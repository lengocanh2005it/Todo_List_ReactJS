import {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  ChangeEventHandler,
} from "react";
import { TextField, Button } from "@mui/material";
import { Task } from "../../pages/HomePage";
import "./TaskInput.css";

interface InputItem {
  icon: string;
  label: string;
  id: string;
  element: JSX.Element;
}

const inputs: InputItem[] = [
  {
    icon: "fa-solid fa-list-check",
    label: "Task name",
    id: "name",
    element: <div></div>,
  },
  {
    icon: "fa-regular fa-comments",
    label: "Description",
    id: "description",
    element: <div></div>,
  },
];

interface TaskInputProps {
  setTasks: Dispatch<SetStateAction<Task[] | undefined>>;
}

const TaskInput: FC<TaskInputProps> = ({ setTasks }) => {
  const [formData, setFormData] = useState<Task>({ name: "", description: "" });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  inputs.forEach((input) => {
    if (input.id === "name") {
      input.element = (
        <TextField
          id={input.id}
          name={input.id}
          label={input.label}
          variant="outlined"
          onChange={handleChange}
          value={formData[input.id] || ""}
        />
      );
    } else if (input.id === "description") {
      input.element = (
        <textarea
          name={input.id} // Ensure this matches state key
          id={input.id}
          placeholder={input.label}
          onChange={handleChange}
          value={formData[input.id] || ""}
        ></textarea>
      );
    }
  });

  const handleAddTask = () => {
    setTasks((prevTasks) => [...(prevTasks || []), formData]);
  };

  return (
    <div className="task-input-container">
      {inputs.map((item, index) => {
        return (
          <div key={index} className="input-control">
            <div className="label-input">
              <i className={item.icon}></i>
              <label htmlFor={item.id}>{item.label}</label>
            </div>
            {item.element}
          </div>
        );
      })}

      <Button variant="contained" onClick={handleAddTask}>
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;
