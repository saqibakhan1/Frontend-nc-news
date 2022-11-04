
const ArticleCard = ({item}) => {
    <main>
  return <div key={article.article_id} className="article">
<h3>{article.title}</h3>
    <p>Topic: {article.topic}</p>
    <p>Author: {article.author}</p>
    <p>Created at: {new Date(article.created_at).toUTCString()}</p>
    <p>Votes: {article.votes}</p>
    <p>Comment count: {article.omment_count}</p>
    </div>
             </main>
}



export default ArticleCard