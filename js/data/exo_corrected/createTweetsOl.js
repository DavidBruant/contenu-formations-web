import createTweetLi from "./createTweetLi";
export default function createTweetsOl(tweets /* tableau de tweets */){
    var ol = document.createElement('ol');
    ol.append.apply(ol, tweets.map(createTweetLi));
    return ol;
}