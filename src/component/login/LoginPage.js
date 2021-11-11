import React, {useContext, useState} from 'react';
import {useFormik} from 'formik';
import AuthorContext from "../context/AuthorContext";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./LoginPage.css"
import imgHeader from "./images/wallpaper.gif"

const LoginPage = () => {

  const authorContext = useContext(AuthorContext)
  let history1 = useHistory()

  const [error,setError] = useState('')

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      //alert(JSON.stringify(values, null, 2));

      axios({
        method: 'POST',
        url: `http://localhost:8080/authenticate?username=${values.username}&password=${values.password}`,
        data: values
      }).then (response => {
        if (response.data.username!==undefined){
          console.log("this is login : ",response.data)
          localStorage.setItem("accessToken",true)
          localStorage.setItem("data",JSON.stringify(response.data))
          console.log("this is login - context- ",authorContext)
          history1.replace("/home")
          return(
              <AuthorContext.Provider value={'hello'}/>
          )
        }
        else {
          setError("username or password error ")
          console.log("username or password error ")
        }
      })
    },
  });
  return (
      <div>
        <img src={imgHeader} alt="" />
        <h1>Login Page {error}</h1>
          <div className="form-login">
            <form onSubmit={formik.handleSubmit} >
              <label htmlFor="username">Username</label>
              <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.username}
              />
              <label htmlFor="password">Password</label>
              <input
                  id="password"
                  name="password"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.password}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
      </div>
  );
}

export default LoginPage
