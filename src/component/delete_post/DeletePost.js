// Render Prop
import React, {useState} from 'react';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {Button} from "@mui/material";

const DeletePost = () => {
    const [value,setValue] = useState({
        id: '',
        title: '',
        description: '',
        content: '',
        createdDate: '',
        author: ''
    })
        axios({
            method: 'get',
            url: 'http://localhost:8080/post-getall'
        }).then(res=>{
            setValue(res.data)
        });

    const deletePost = (index) => {
        console.log("delete")
        axios.delete(`http://localhost:8080/post/delete/${index}`)
            .then(res=>console.log("delete",res.data))
    }

    const indents = [];
    for (let i = 0; i < value.length; i++) {
        indents.push(
            <div>
                <div className="box1-article" key={value[i].id} >
                    <Link  to={`/post-detail/${value[i].id}`}>
                        <h1>{value[i].title}</h1>
                        <p className="shortDescript">{value[i].description}</p>
                        <i className="createBy">{value[i].createdDate}</i>
                    </Link>
                </div>
                <div>
                    <Button variant="outlined" onClick={()=>{deletePost(value[i].id)}}>Delete</Button>
                </div>
            </div>
        )
    }

    return(
        <div>
            <h1>Delete Post!</h1>
            <article className="article">
                {indents}
            </article>
        </div>
    )
}




export default DeletePost;