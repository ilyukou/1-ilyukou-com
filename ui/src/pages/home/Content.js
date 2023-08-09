import React from "react";

export const Content = (props) => {
    return <>
        {getRow(
            getElement(
                props.redirectApi + "/youtube",
                props.img + "/youtube.png",
                "youtube_logo"
            ),
            getElement(
                props.redirectApi + "/tiktok",
                props.img + "/tiktok.png",
                "tiktok_logo"
            )
        )}
        {getRow(
            getElement(
                props.redirectApi + "/twitter",
                props.img + "/twitter.png",
                "twitter_logo"
            ),
            getElement(
                props.redirectApi + "/github",
                props.img + "/github.svg",
                "github_logo"
            )
        )}
    </>
}

function getRow(first, second) {
    return <div className="row marginTop50px">
        <div className="col-2 col-sm-3 col-md-3 col-xl-4"/>
        <div className="col-3 col-sm-2 col-md-2 col-xl-1 text-center">{first}</div>
        <div className="col-2 col-sm-2 col-md-2 col-xl-2"/>
        <div className="col-3 col-sm-2 col-md-2 col-xl-1 text-center">{second}</div>
        <div className="col-2 col-sm-3 col-md-3 col-xl-4"/>
    </div>
}

function getElement(redirectTo, img, alt) {
    return <a href={redirectTo}>
        <img src={img} className="mediaImgLink" alt={alt}/>
    </a>
}