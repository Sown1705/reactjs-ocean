// Render Prop
import React from 'react';
import {useFormik} from 'formik';
import axios from "axios";
import imgHeader from "./image/2825810.gif"
import {useHistory} from "react-router-dom";
import {Button, TextField} from "@mui/material";

const CreatePost = () => {
    let data = localStorage.getItem("data")
    let author = JSON.parse(data)
    console.log("data",data)

    const initialValues = { content: '', title: '', date: '', description:'', author_id:author.username};
let history = useHistory()

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            axios.post("http://localhost:8080/post/create",values).then(res=>{
                if (res.status== 200){
                    history.replace("/post")
                }
            })
        },
    });
return(
    <div>
        <img src={imgHeader}/>
        <h1>Create Post!</h1>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                id="content"
                name="content"
                label="Content"
                type="text"
                value={formik.values.content}
                onChange={formik.handleChange}
            />

            <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange}
            />

            <TextField
                fullWidth
                id="date"
                name="date"
                type="date"
                value={formik.values.date}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
            />
            <TextField
                disabled
                fullWidth
                id="author_id"
                name="author_id"
                label="Author"
                type="text"
                value={formik.values.author_id}
                onChange={formik.handleChange}
            />
            <Button color="primary" variant="contained"  type="submit">
                Submit
            </Button>
        </form>
    </div>
)
}




export default CreatePost;