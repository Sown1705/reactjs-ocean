import React from "react";
import headerImg from "./image/bg_about.png";
import {Markup} from "interweave";
import "./css/style.css"

const About = ()=>{
    const str = " <p>Hello friends! I am Ocean Nguyen. Currently, I'm working at an untitled large tech company as software engineer. I love solving problems and developing myself that broaden my horizon about thousands of thing around the world.</p>\n" +
        "\n" +
        "<p>This blog tries to intersect not only Day in a life of me as a software engineer but also Entertainment and Media.</p>\n" +
        "\n" +
        "<p class=\"mb-5\">Hopefully, it would be good for you. Feel free to give me feedback.</p>"
    return(
        <div >
            <div className="image-header">
                <img src={headerImg} alt=""/>
            </div>
            <div className="about">
                <Markup content={str} />
            </div>

        </div>
    )
}
export default About