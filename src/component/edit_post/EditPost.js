// Render Prop
import React from 'react';
import {useFormik} from 'formik';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import {Button, TextField} from "@mui/material";
import imgHeader from "./image/edit.gif"

const EditPost = ({post}) => {

    let history = useHistory()
    let { id } = useParams();
    let p = post.filter(p=>p.id==id);
    const initialValues= {
                id:p[0].id,
                content:p[0].content,
                title:p[0].title,
                date:p[0].date,
                description:p[0].description,
                author_id:p[0].author_id
            }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            axios.post("http://localhost:8080/post/update",values).then(res=>{
                console.log("edit -- ",res.status)
                if (res.status== 200){
                    history.replace("/post")
                }
            })
        },
    });
    return(
        <div>
            <img src={imgHeader} alt=""/>
            <h1>Edit Post!</h1>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    disabled
                    fullWidth
                    id="id"
                    name="id"
                    label="Id"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                />
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




export default EditPost;