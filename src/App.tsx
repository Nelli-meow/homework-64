import './App.css'
import Header from './components/Header/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import Add from './containers/Add/Add.tsx';

const App = () => {

  return (
    <>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="*" element={<h1>Not found :(</h1>}/>
        </Routes>
      </div>
    </>
  )
};

export default App
