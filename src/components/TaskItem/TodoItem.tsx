import { FC } from "react";
import "./TodoItem.css";

interface TodoItemProps {
  name: string;
  description: string;
}

const TaskItem: FC<TodoItemProps> = ({ name }) => {
  return (
    <div className="task-title">
      <h3>{name}</h3>
    </div>
  );
};

export default TaskItem;
