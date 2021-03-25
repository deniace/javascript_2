var title = document.getElementsByTagName('title')[0];

var textTitle = title.innerText;
var textTitle2 = "(1) Message";
// console.log(textTitle);

setInterval(() => {
    [textTitle, textTitle2] = [textTitle2, textTitle];
    title.innerText = textTitle2;
}, 1500);