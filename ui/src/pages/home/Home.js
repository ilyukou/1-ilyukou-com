import "./Home.css";
import {content, INFO_BASE} from "./content";
import {EMAIL, FIRST_PARAGRAPH, SECOND_PARAGRAPH, TITLE} from "../../util/env";
import {useState} from "react";

async function fetchInfo(callback) {
    await (await fetch(INFO_BASE)).json().then(resp => {
        let time = new Date(resp.timestamp);
        callback("Synced at " + wrapTime(time.getHours()) + ":" + wrapTime(time.getMinutes()));
    });
}

function wrapTime(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

export default function Home() {
    const [time, setTime] = useState('...');
    fetchInfo(setTime);

    return <div className="home">
        <div className="container-fluid">
            {getDescriptionRow(TITLE, "fs-1", "marginTop50px")}
            {getDescriptionRow(FIRST_PARAGRAPH, "fs-3", "marginTop50px")}
            {getDescriptionRow(SECOND_PARAGRAPH, "fs-3", "marginTop10px")}

            <div className="row">
                <div className="col-2"/>
                <div className="col-12">
                    {getRow(content.youtube, content.tiktok)}
                    {getRow(content.twitter, content.github)}
                </div>
                <div className="col-2"/>
            </div>

            <div className="row marginTop50px">
                <div className="col-5"/>
                <div className="col-2">
                    <p className="text-center">{time}</p>
                </div>
                <div className="col-5"/>
            </div>

            <div className="row marginTop10px">
                <div className="col-5"/>
                <div className="col-2">
                    <p className="text-center">{EMAIL}</p>
                </div>
                <div className="col-5"/>
            </div>
        </div>
    </div>
}

function getDescriptionRow(content, fs, classes) {
    return <div className={"row " + classes}>
        <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
        <div className="col-10 col-sm-8 col-md-6 col-xl-4">
            <p className={fs + " text-center"}>
                {content}
            </p>
        </div>
        <div className="col-1 col-sm-2 col-md-3 col-xl-4"/>
    </div>
}

function getRow(first, second) {
    return <div className="row marginTop50px">
        <div className="col-2 col-md-3 col-xl-4"/>
        <div className="col-3 col-md-2 col-xl-1 text-center">{getElement(first)}</div>
        <div className="col-2 col-md-2 col-xl-2"/>
        <div className="col-3 col-md-2 col-xl-1 text-center">{getElement(second)}</div>
        <div className="col-2 col-md-3 col-xl-4"/>
    </div>
}

function getElement(e) {
    return <a href={e.redirectTo}>
        <img src={e.img} className="mediaImgLink" alt={e.alt}/>
    </a>
}