import './App.css'
import Header from './components/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import PostForm from './components/PostForm/PostForm.tsx';
import Home from './containers/Home/Home.tsx';
import OnePost from './components/OnePost/OnePost.tsx';
import EditPost from './containers/EditPost/EditPost.tsx';
import NewPost from './containers/NewPost/NewPost.tsx';

const App = () => {

  return (
    <>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Home/>}/>
          <Route path="/posts/new-post" element={<NewPost/>}/>
          <Route path="/posts/:idPost" element={<OnePost/>}/>
          <Route path="/posts/:idPost/edit" element={<EditPost/>}/>
          <Route path="*" element={<h1>Not found :(</h1>}/>
        </Routes>
      </div>
    </>
  )
};

export default App
