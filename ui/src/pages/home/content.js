import youtube from "./png/youtube.png";
import tiktok from "./png/tiktok.png";
import twitter from "./png/twitter.png";
import github from "./png/github.svg";

import {API_BASE} from "../../util/env";

const REDIRECT_BASE = API_BASE + "/redirect";

export const content = {
    youtube : {
        img: youtube,
        redirectTo: REDIRECT_BASE + "/youtube",
        alt: "youtube_logo"
    },
    tiktok : {
        img: tiktok,
        redirectTo: REDIRECT_BASE + "/tiktok",
        alt: "tiktok_logo"
    },
    twitter : {
        img: twitter,
        redirectTo: REDIRECT_BASE + "/twitter",
        alt: "twitter_logo"
    },
    github : {
        img: github,
        redirectTo: REDIRECT_BASE + "/github",
        alt: "github_logo"
    }
}