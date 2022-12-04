import './style/style.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Posts from './components/Posts';
import Users from './components/Users';
import Navbar from './components/navigation/Navbar';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchUsers } from './redux/reducers/users';
import { fetchPosts } from './redux/reducers/posts';
import PostList from './components/PostList';
import UserList from './components/UserList';
import { fetchComment } from './redux/reducers/comments';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
    dispatch(fetchComment());
 
  },[])

  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
        <Route path='/posts/' element={<Posts/>}></Route>
        <Route path='/posts/:id' element={<PostList/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/users/:id' element={<UserList/>}></Route>
        
        
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
