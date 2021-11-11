import React, {useContext} from "react"
import "./home.css"
import headerImg from "./image/bg_home.png"
import {Link, Route, Switch, useHistory} from "react-router-dom";
import Post from "../post/Post";
import {AuthorContext} from "../context/AuthorContext";

const Home = ()=>{
    const authorContext = useContext(AuthorContext)
    let history = useHistory()

    const handleClick = ()=>{
    console.log("click")
    }
    return(
        <div>
            <div className="image-header">
                <img src={headerImg} alt=""/>
            </div>
            <article className="article">
                <div className="box1-article">
                    <h1>Manage data in Docker</h1>
                    <p className="shortDescript">How to user volumes and bind muonts in Docker.</p>
                    <i className="createBy">Posted by Ocean Nguyen on May 20, 2019 - 8 mins read</i>
                </div>
                <div className="box1-article">
                    <h1>How to create a Docker image</h1>
                    <p className="shortDescript">Esay steps build a Docker image with Dockerfile.</p>
                    <p className="createBy">Posted by Ocean Nguyen on May 20, 2019 - 8 mins read</p>
                </div>
                <div className="btn-view-post" onClick={ handleClick }>
                    <Link to="/post">VIEW ALL POST →</Link>
                </div>
            </article>

            <Switch>
                <Route path="/post">
                    <Post/>
                </Route>
            </Switch>
        </div>
    )
}
export default Home