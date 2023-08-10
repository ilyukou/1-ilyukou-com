import React from "react";

import "./Home.css";

import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {Content} from "./content/Content";

const SECOND_PARAGRAPH = process.env.REACT_APP_SECOND_PARAGRAPH;
const FIRST_PARAGRAPH = process.env.REACT_APP_FIRST_PARAGRAPH;
const TITLE = process.env.REACT_APP_TITLE;
const EMAIL = process.env.REACT_APP_EMAIL;
const API_BASE = process.env.REACT_APP_BACKEND_API;
const SOURCE_CODE = process.env.REACT_APP_SOURCE_CODE;

const INFO_BASE = API_BASE + "/info";
const REDIRECT_BASE = API_BASE + "/redirect";
const IMG = process.env.PUBLIC_URL + "/img";

export default function Home() {
    return <div className="home">
        <div className="container-fluid">

            <Header title={TITLE} firstParagraph={FIRST_PARAGRAPH} secondParagraph={SECOND_PARAGRAPH}/>
            <Content redirectApi={REDIRECT_BASE} img={IMG}/>
            <Footer email={EMAIL} sourceCode={SOURCE_CODE} infoApi={INFO_BASE}/>

        </div>
    </div>
}