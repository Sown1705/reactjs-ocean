import React from "react";
import "./style.css";
import imgHeader from "./image/profile.gif"

const Profile = () => {
    let data = localStorage.getItem("data")
    let author = JSON.parse(data)
    console.log("data",data)
return(
   <div>
       <img src={imgHeader}  />
       <div className="wrapper">
           <div className="left">
                   <div>
                       <h3>Name</h3>
                       <p>{author.first_name} - {author.last_name} </p>
                   </div>
                    <h3>Username</h3>
                    <p>{author.username}</p>
                    <p>Java Developer</p>
           </div>
           <div className="right">
               <div className="info">
                   <h3>Information</h3>

                   <div className="info_data">
                       <div className="data">
                           <h4>Email</h4>
                           <p>{author.email}</p>
                       </div>
                       <div className="data">
                           <h4>Password</h4>
                           <p>{author.password}</p>
                       </div>
                   </div>
               </div>

               <div className="projects">
                   <div className="projects_data">
                       <div className="data">
                           <h4>Birth date</h4>
                           <p>{author.birthdate}</p>
                       </div>
                       <div className="data">
                           <h4>Added</h4>
                           <p>{author.added}</p>
                       </div>
                   </div>
               </div>

               <div className="social_media">
                   <ul>
                       <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                       <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                       <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                   </ul>
               </div>
           </div>
       </div>
   </div>
)
}
export  default Profile