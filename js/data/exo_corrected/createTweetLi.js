import moment from "moment";
export default function createTweetLi(tweet){
    var li = document.createElement('li');
    li.classList.add('tweet');

    var userSpan = document.createElement('span');
    userSpan.classList.add('user');
    userSpan.textContent = tweet.user.name;

    var textSpan = document.createElement('span');
    textSpan.classList.add('text');
    textSpan.textContent = tweet.text;
    

    var dateSpan = document.createElement('span');
    dateSpan.textContent = moment(tweet.created_at).fromNow();

    li.append(
        userSpan, ' a écrit le ', dateSpan, ' : ',
        textSpan
    )

    return li;
}