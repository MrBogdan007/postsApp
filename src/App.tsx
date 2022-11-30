import './style/style.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';
import Users from './components/Users';
import Navbar from './components/navigation/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { fetchPosts } from './redux/reducers/posts';
import { fetchUsers } from './redux/reducers/users';
function App() {
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
        <Route path='/' element={<Posts/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
