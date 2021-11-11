import headerImg from "./image/bg_contact.png";
import React from "react";
import {Button, FormControl, FormHelperText, TextField} from '@mui/material';
import "./css/style.css"

const Contact = ()=>{

    return(
        <div>
            <div className="image-header">
                <img src={headerImg} alt=""/>
            </div>
            <div className="contact">
                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                <FormControl className="form">
                    <TextField  id="demo-helper-text-misaligned" label="Name" className="text-filed"/>
                    <TextField  id="demo-helper-text-misaligned-no-helper" label="Email Address" className="text-filed"/>
                    <TextField  id="demo-helper-text-misaligned" label="Phone number" className="text-filed"/>
                    <TextField id="demo-helper-text-misaligned-no-helper" label="Message" className="text-filed"/>
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    <Button variant="contained" className="button">Send</Button>
                </FormControl>
            </div>
        </div>
    )
}
export default Contact