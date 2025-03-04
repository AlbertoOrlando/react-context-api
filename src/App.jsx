import { useState, useEffect } from 'react'
import axios from 'axios'
import PostsContext from './contexts/PostsContext'
import PostsPage from './pages/PostsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  const [posts, setPosts] = useState([]);

  // funzione gestione chiamata API
  function fetchPosts() {
    axios.get("http://localhost:3000/posts/")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Errore nella chiamata API:", error);
      });
  }

  // richiamo la funzione di richiesta dati al caricamento del componente solo al primo rendering
  useEffect(fetchPosts, []);

  return (

    <PostsContext.Provider value={{ posts }
    }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider >
  )
}

export default App
