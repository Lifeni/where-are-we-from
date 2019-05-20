let github = document.getElementById("githubButton");
let about = document.getElementById("aboutButton");
let link = document.getElementById("linkButton");
let info = document.getElementById("infoButton");
let start = document.getElementById("startButton");
let next = document.getElementById("nextButton");
let back = document.getElementById("backButton");

let chapter = document.getElementById("chapter");
let title = document.getElementById("title");
let point = document.getElementById("point");

let backHome = document.getElementById("backHome");
let getHelp = document.getElementById("getHelp");
let music = document.getElementById("music");

let leftCard = document.getElementById("leftCard");

let mask = document.getElementById("blackMask");

let linkPage = document.getElementById("linkPage");
let homePage = document.getElementById("homePage");
let contentPage = document.getElementById("contentPage");

let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");

let leftIconImage = document.getElementById("leftIconImage");
let rightIconImage = document.getElementById("rightIconImage");
let leftIcon = document.getElementById("leftIcon");
let rightIcon = document.getElementById("rightIcon");

let aboutFlag = 0;

function homeTwoButtonTrue() {
    start.style.opacity = "1";
    link.style.opacity = "1";
    start.style.display = "flex";
    link.style.display = "flex";
    mask.style.background = "rgba(0, 0, 0, 0)";
}

function homeTwoButtonFalse() {
    start.style.opacity = "0";
    link.style.opacity = "0";
    start.style.display = "none";
    link.style.display = "none";
}

function contentTwoButtonTrue() {
    info.style.opacity = "1";
    next.style.opacity = "1";
    info.style.display = "flex";
    next.style.display = "flex";

    leftCard.style.opacity = "1";
    leftCard.style.display = "flex";

    backHome.style.opacity = "1";
    getHelp.style.opacity = "1";
    music.style.opacity = "1";
    backHome.style.display = "flex";
    getHelp.style.display = "flex";
    music.style.display = "flex";
    mask.style.background = "rgba(0, 0, 0, 0.9)";
}

function contentTwoButtonFalse() {
    info.style.opacity = "0";
    next.style.opacity = "0";
    info.style.display = "none";
    next.style.display = "none";

    leftCard.style.opacity = "0";
    leftCard.style.display = "none";

    backHome.style.opacity = "0";
    getHelp.style.opacity = "0";
    music.style.opacity = "0";
    backHome.style.display = "none";
    getHelp.style.display = "none";
    music.style.display = "none";
}

function backButtonTrue() {
    back.style.opacity = "1";
    back.style.display = "flex";
}

function backButtonFalse() {
    back.style.opacity = "0";
    back.style.display = "none";
}

function showHomePage() {
    setTimeout(() => {
        homePage.style.opacity = "1";
    }, 100);
    homePage.style.display = "flex";

    contentPage.style.opacity = "0";
    contentPage.style.display = "none";

    linkPage.style.opacity = "0";
    linkPage.style.display = "none";
}

function showContentPage() {
    homePage.style.opacity = "0";
    homePage.style.display = "none";

    setTimeout(() => {
        contentPage.style.opacity = "1";
    }, 100);
    contentPage.style.display = "flex";

    linkPage.style.opacity = "0";
    linkPage.style.display = "none";
}

function showLinkPage() {
    homePage.style.opacity = "0";
    homePage.style.display = "none";

    contentPage.style.opacity = "0";
    contentPage.style.display = "none";

    setTimeout(() => {
        linkPage.style.opacity = "1";
    }, 100);
    linkPage.style.display = "flex";

}

window.onload = function () {

    //button

    homeTwoButtonTrue();
    contentTwoButtonFalse();
    backButtonFalse();

    //content
    showHomePage();

}

start.onclick = function () {

    // button    
    leftIconImage.setAttribute("src", "image/Icon/baseline_more_horiz_black_24dp.png");

    homeTwoButtonFalse();
    contentTwoButtonTrue();
    backButtonFalse();

    // text
    chapter.innerHTML = "序章";
    title.innerHTML = "我们从哪来";
    point.innerHTML = "# 引出故事 <br> # 操作引导";

    // content
    showContentPage();
}

about.onclick = function () {

    // button  
    leftIconImage.setAttribute("src", "image/Icon/baseline_arrow_back_black_24dp.png");

    homeTwoButtonFalse();
    contentTwoButtonFalse();
    backButtonTrue();

    aboutFlag = 1;
    rightButton.style.opacity = "0";

    // content
    linkPage.setAttribute("src", "content/aboutPage.html");

    showLinkPage();

    return false;
}

back.onclick = function () {

    if (aboutFlag === 1) {
        //button
        leftIconImage.setAttribute("src", "image/Icon/baseline_menu_black_24dp.png");

        homeTwoButtonTrue();
        contentTwoButtonFalse();
        backButtonFalse();

        aboutFlag = 0;
        rightButton.style.opacity = "1";

        // content
        showHomePage();
    }
}

backHome.onclick = function () {

    //button
    leftIconImage.setAttribute("src", "image/Icon/baseline_menu_black_24dp.png");

    homeTwoButtonTrue();
    contentTwoButtonFalse();
    backButtonFalse();

    //content
    showHomePage();
}