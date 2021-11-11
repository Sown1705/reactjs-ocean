import React from "react";
import headerImg from "./image/bg_post.png";

import {Link, useHistory} from "react-router-dom";
import {Button} from "@mui/material";
import axios from "axios";


const Post = ({post})=>{
    let history = useHistory()
    const indents = [];
    for (let i = 0; i < post.length; i++) {
        indents.push(
                <div>
                    <div className="box1-article" key={post[i].id} >
                        <Link  to={`/post-detail/${post[i].id}`}>
                            <h1>{post[i].title}</h1>
                            <p className="shortDescript">{post[i].description}</p>
                            <i className="createBy">{post[i].createdDate}</i>
                        </Link>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={()=>{ axios.delete(`http://localhost:8080/post/delete/${post[i].id}`)
                            .then(res=>{
                                console.log("delete -- ",res.status)
                                if (res.status== 200){
                                    history.replace("/post")
                                }
                                }
                            )}}>Delete</Button>
                        <Link to={`/edit-post/${post[i].id}`}><Button variant="outlined" >Edit</Button></Link>
                    </div>
                </div>
        )
    }

    return(
        <div>
            <div className="image-header" >
                <img src={headerImg} alt=""/>
            </div>
            <article className="article">
                {indents}
            </article>
        </div>
    )
}
export default Post