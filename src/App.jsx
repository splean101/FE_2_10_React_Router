import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';
import SinglePost  from './components/SinglePost';

function App() {
  return (
<BrowserRouter>
<div className="wrapper">
      <nav className="menu">
        <a href="/">Main</a>
        <a href="/posts">Posts</a>
        <a href="login">Login</a>
      </nav>
<Routes>
  <Route path='/' element={<Main />}/>
  <Route path='/posts' element={<Posts />}/>
  <Route path='/login' element={<Login />}/>
  <Route path='/post/:id' element={<SinglePost />}/>
   <Route path='*' element={<h2>Not Found</h2>}/> 
</Routes>
      

    </div>
</BrowserRouter>
   
  );
}

export default App;
