import { Box, Modal, Switch, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

type ModalSettingType = {
  isOpen: boolean;
  toggleModal: () => void;
};

function ModalSetting({ isOpen, toggleModal }: ModalSettingType) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleNews = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6">
          Включить новости?
        </Typography>
        <Switch checked={isChecked} onChange={toggleNews} />
      </Box>
    </Modal>
  );
}

export default ModalSetting;
