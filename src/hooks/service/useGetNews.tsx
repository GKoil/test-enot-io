import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import context from "../../context/Context";
import api from "../../api";

const NEWS_NUMBER = 1;

const useGetNews = () => {
  const value = useContext(context);

  const { refetch, isFetching } = useQuery(
    ["news"],
    () => {
      return api.news.getNews();
    },
    {
      refetchInterval: false,
      refetchOnReconnect: false,
      enabled: false,
      onSuccess: ({ value: valueSuccess }) => {
        const prepareData = valueSuccess[NEWS_NUMBER].description;
        value?.actions.setNews(prepareData);
      },
      onError: () => {
        value?.actions.toggleNews(false);
        // process error
      },
    },
  );

  return { refetch, isFetching };
};

export default useGetNews;
