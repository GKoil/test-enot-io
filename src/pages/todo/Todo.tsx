import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import ModalSetting from "./components/ModalSetting";
import styles from "./Todo.module.scss";

function Todo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.todo__title}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>To Do</Typography>
        <Button onClick={toggleModal} variant="text">
          <SettingsIcon />
        </Button>
      </Box>

      {isOpen && <ModalSetting isOpen={isOpen} toggleModal={toggleModal} />}
    </div>
  );
}

export default Todo;
