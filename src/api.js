import axios from 'axios';

const endPoint = axios.create({
    baseURL: "https://be-nc-news-saqib.herokuapp.com/api",
  });

  export const fetchArticles = (slug) => {
    return endPoint.get("/articles", {
      params: { topic: slug },
    });
  };
  
  
  export const getTopics = () => {
    return endPoint.get("/topics");
  };