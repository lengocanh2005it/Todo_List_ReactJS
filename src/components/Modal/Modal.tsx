import { FC } from "react";
import "./Modal.css";
import { Button } from "@mui/material";

interface ModalProps {
  name: string;
  description: string;
}

const Modal: FC<ModalProps> = ({ name, description }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="content">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>

        <Button
          variant="contained"
          onClick={() => {
            document.querySelector(".modal-content")?.classList.remove("show");
            setTimeout(() => {
              document.querySelector(".modal")?.classList.remove("show");
            }, 200);
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
