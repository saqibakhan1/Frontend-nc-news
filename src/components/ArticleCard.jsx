

const ArticleCard = ({item}) => {

    return <li key= {item.article_id}>
    <h3>{item.title}</h3>
        <p>Topic: {item.topic}</p>
        <p>Author: {item.author}</p>
        <p>Comment Count: {item.comment_count}</p>
        <p>Votes: {item.votes}</p>
             </li>
}


export default ArticleCard