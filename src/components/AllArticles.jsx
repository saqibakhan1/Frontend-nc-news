import axios from "axios";
import { useEffect,useState } from "react";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      axios
        .get(
          "https://be-nc-news-saqib.herokuapp.com/api/articles"
        )
        .then(({ data }) => {

          setItems(data.allArticles);

        });
    }, []);

    return (
      <main>
        <h1>Listed Items</h1>
        <ul>
           {items.map((item, index) => {
         return <ArticleCard item={item} key={index}/>

            })}
          </ul>
        </main>
      );
    };
  
  export default AllArticles;