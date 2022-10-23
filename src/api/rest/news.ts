import makeRequest from "../makeRequest";
import { ArticleNews } from "../../types/articleNews.type";

// eslint-disable-next-line import/prefer-default-export
export const getNews = () => {
  return makeRequest<{ value: ArticleNews[] }>(
    "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=%3CREQUIRED%3E&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null",
    {
      "X-RapidAPI-Key": "573d6d351bmsh0f85dd072f7e49bp194e92jsn4010ddd4e665",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
    "GET",
  );
};
