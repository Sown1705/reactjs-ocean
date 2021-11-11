import {useHistory, useParams} from "react-router-dom";
import "./css/custom.css"
import "./css/main.css"
import "./css/style.css"
import {Markup} from "interweave";
import React from "react";
import headerImg from "./img/bg_post.png"

const DetailPost = ({post}) => {

    let { id } = useParams();
    let history = useHistory()

    return(
            <div className="detail-container">
                <img src={headerImg} alt=""/>
                <div className="content">
                    {post.filter(p=>p.id==id).map((post)=>(
                        <Markup content={post.content} />
                    ))}
                    <button onClick={()=>{history.replace("/post")}}>Back to Post</button>
                </div>
            </div>
    )
}
export default DetailPost