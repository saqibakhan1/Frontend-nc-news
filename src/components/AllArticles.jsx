import axios from "axios";
import { useEffect,useState } from "react";

const AllArticles = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
      axios
        .get(
          "https://be-nc-news-saqib.herokuapp.com/api/articles"
        )
        .then(({ data }) => {
            console.log(data.allArticles)
          setItems(data.allArticles);
          console.log(items)
        });
    }, []);

    return (
      <main>
        <h1>Listed Items</h1>
        <ol>
           {items.map((item) => {
                return <li key= {item.article_id}>
                <h3>{item.title}</h3>
                    <p>Topic: {item.topic}</p>
                    <p>Author: {item.author}</p>
                    <p>Comment Count: {item.comment_count}</p>
                    <p>Votes: {item.votes}</p>
                         </li>
            })}
          </ol>
        </main>
      );
    };
  
  export default AllArticles;