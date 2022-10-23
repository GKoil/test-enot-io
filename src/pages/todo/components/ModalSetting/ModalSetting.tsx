import { Box, Modal, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import context from "../../../../context/Context";
import styles from "./ModalSetting.module.scss";
import useGetNews from "../../../../hooks/service/useGetNews";
import { actions } from "../../../../context/Provider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
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
  const value = useContext(context);
  const { refetch, isFetching } = useGetNews();

  const toggleNews = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      refetch();
    }

    actions?.toggleNews(event.target.checked);
  };

  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <Box sx={style}>
        <Typography
          className={styles.modalSetting__title}
          id="modal-modal-title"
          variant="h6"
        >
          Включить новости?
        </Typography>
        <Switch
          checked={value?.data?.news.isShow}
          disabled={isFetching}
          onChange={toggleNews}
        />
      </Box>
    </Modal>
  );
}

export default ModalSetting;
