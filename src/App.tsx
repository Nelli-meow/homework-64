import './App.css'
import Header from './components/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import OnePost from './components/OnePost/OnePost.tsx';
import EditPost from './containers/EditPost/EditPost.tsx';
import NewPost from './containers/NewPost/NewPost.tsx';
import About from './containers/About/About.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';
import Footer from './components/Footer/Footer.tsx';

const App = () => {

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header/>
        <div className="container" style={{flex: '1'}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Home/>}/>
            <Route path="/posts/new-post" element={<NewPost/>}/>
            <Route path="/posts/:idPost" element={<OnePost/>}/>
            <Route path="/posts/:idPost/edit" element={<EditPost/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="*" element={<h1>Not found :(</h1>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
      </>
      )
      };

      export default App
