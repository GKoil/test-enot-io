import { Box, Modal, Switch, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import context from "../../../../context/Context";
import styles from "./ModalSetting.module.scss";
import api from "../../../../api";

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
  const value = useContext(context);

  const { refetch } = useQuery(
    ["news"],
    async () => {
      try {
        const data = await (await api.news.getNews()).json();
        const prepareData = data.value[1].description as string;
        value?.actions.setNews(prepareData);
        console.log(data.value[1].description);
      } catch (error) {
        // process error
      }

      return () => {};
    },
    { enabled: false },
  );

  const toggleNews = (event: React.ChangeEvent<HTMLInputElement>) => {
    refetch();
    value?.actions.toggleNews(event.target.checked);
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
        <Switch checked={value?.data?.news.isShow} onChange={toggleNews} />
      </Box>
    </Modal>
  );
}

export default ModalSetting;
