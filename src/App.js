import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect, useHistory
} from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Post from "./component/post/Post";
import Contact from "./component/contact/Contact";
import DetailPost from "./component/detail_post/DetailPost";

import fbImg from './image/facebook.png'
import gitImg from './image/github.png'
import instaImg from './image/instagram.png'

import "./css/styles.css"
import axios from "axios";
import LoginPage from "./component/login/LoginPage";
import CreatePost from "./component/create_post/CreatePost";
import EditPost from "./component/edit_post/EditPost";
import DeletePost from "./component/delete_post/DeletePost";
import Profile from "./component/profile/Profile";

export default function App() {

  const [value,setValue] = useState({
    id: '',
      title: '',
      description: '',
      content: '',
      date: '',
      author_id: ''
  })
  useEffect(()=>{
    axios({
      method: 'get',
      url: 'http://localhost:8080/post-getall'
    }).then(res=>{
      setValue(res.data)
    });
  })

  let domParser = new DOMParser();

  let doc = domParser.parseFromString(value.content, "text/html");



  return (
      <Router>
        <div className="container">
          <nav className="menu">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/post">Posts</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/create-post">Create</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home" render={()=>{
              return localStorage.getItem("accessToken") ? <Home/> : <Redirect to="/" />
            }}>
            </Route>
            <Route path="/about" render={()=>{
              return localStorage.getItem("accessToken") ? <About /> : <Redirect to="/" />
            }}>

            </Route>
            <Route path="/post" render={()=>{
              return localStorage.getItem("accessToken") ? <Post post={value}/> : <Redirect to="/" />
            }}>

            </Route>
            <Route path="/contact" render={()=>{
              return localStorage.getItem("accessToken") ? <Contact /> : <Redirect to="/" />
            }}>
            </Route>
            <Route path="/post-detail/:id" render={()=>{
              return localStorage.getItem("accessToken") ? <DetailPost post={value}/> : <Redirect to="/" />
            }}>
            </Route>
            <Route path="/create-post" render={()=>{
              return localStorage.getItem("accessToken") ? <CreatePost/> : <Redirect to="/" />
            }}>

            </Route>
            <Route path="/logout" render={()=>{
              localStorage.clear()
              return <Redirect to="/"/>
            }}>
            </Route>
            <Route path="/edit-post/:id" render={()=>{
              return localStorage.getItem("accessToken") ? <EditPost post={value}/>: <Redirect to="/" />
            }}>
            </Route>
            <Route path="/delete-post" render={()=>{
              return localStorage.getItem("accessToken") ? <DeletePost /> : <Redirect to="/" />
            }}>
            </Route>
            <Route path="/profile" render={()=>{
              return localStorage.getItem("accessToken") ? <Profile/> : <Redirect to="/" />
            }}/>
            <Route path="/" render={()=>{
              return localStorage.getItem("accessToken") ? <Home/> : <LoginPage/>
            }}>
            </Route>
          </Switch>
          <footer className="footer">
            <div className="image-footer">
              <img src={fbImg} alt=""/>
              <img src={instaImg} alt=""/>
              <img src={gitImg} alt="" className="github"/>
            </div>
            <div>
              <p>Copyright © Ocean Nguyen 2019</p>
            </div>
          </footer>
        </div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      </Router>
  );
}

