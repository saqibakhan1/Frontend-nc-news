import './App.css';

import Header from './components/Header'
import AllArticles from './components/AllArticles'
import Homepage from './components/Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/AllArticles" element={<AllArticles />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


// app.get("/api/topics", getTopics)
// app.get("/api/articles/:article_id", getArticleById)
// app.get('/api/users', getUsers)
// app.get('/api/articles', getArticles)
// app.get("/api/articles/:article_id/comments", getArticleComments)
// app.post('/api/articles/:article_id/comments', postCommentsByArticleId)