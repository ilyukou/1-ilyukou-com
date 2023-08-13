import {useState} from "react";

export const Footer = (props) => {
    const [time, setTime] = useState('...');
    fetchInfo(setTime, props.infoApi);

    return <>
        <div className="row marginTop50px">
            <div className="col-1"/>
            <div className="col-10">
                <p className="text-center">{props.email}</p>
            </div>
            <div className="col-1"/>
        </div>

        <div className="row marginTop10px">
            <div className="col-1"/>
            <div className="col-10">
                <a href={props.sourceCode}>
                    <p className="text-center">Source code</p>
                </a>
            </div>
            <div className="col-1"/>
        </div>

        <div className="row marginTop10px">
            <div className="col-1"/>
            <div className="col-10">
                <p className="text-center">{time}</p>
            </div>
            <div className="col-1"/>
        </div>
    </>
}

async function fetchInfo(callback, infoApi) {
    try {
        const req = await fetch(infoApi);
        const resp = await req.json();
        let time = new Date(resp.timestamp);
        callback("Synced at " + time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}));
    } catch (e) {
        callback("API isn't alive");
    }
}