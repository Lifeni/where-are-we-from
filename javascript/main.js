"use strict";

const list = ["child", "teenage", "lovers", "adult"],
    long = [1500, 1500, 1500, 1500],
    num = window.location.href.slice(-7, -5) - 1;
let person = document.querySelector(".person"),
    age = document.querySelector(".age"),
    land = document.querySelector(".land"),
    body = document.querySelector("body");
person.src = "../image/SVG/" + list[num] + ".svg";
age.src = "../image/SVG/age-" + num + ".svg";
land.style.width = long[num] + "px";
body.style.width = long[num] + "px";

let event = document.querySelectorAll(".event");
let eventRange = [
    []
];
for (let i = 0; i < event.length; i++) {
    eventRange[i][0] = event[i].offsetLeft - 200;
    eventRange[i][1] = event[i].offsetLeft + event[i].width + 200;
}

window.onkeydown = function (e) {
    let title = document.querySelector(".title");
    title.src = "../image/SVG/title-" + (num + 1) + ".svg";
    if (e.keyCode == 39 || e.keyCode == 68) { // --> D
        let left = person.offsetLeft;
        let right = long[num] - left - person.width;
        if (right > 200) {
            person.style.left = left + 100 + "px";
            person.src = "../image/SVG/" + list[num] + "-right.svg";
        } else {
            person.style.right = "200px";
        }

        let screenWidth = window.innerWidth;
        if (left + 400 > screenWidth)
            document.documentElement.scrollLeft += 200;
    }
    if (e.keyCode == 37 || e.keyCode == 65) { // <-- A
        let left = person.offsetLeft;
        let right = long[num] - left - person.width;
        if (left > 50) {
            person.style.left = left - 100 + "px";
            person.src = "../image/SVG/" + list[num] + "-left.svg";
        } else {
            person.style.left = "50px";
        }
        let screenWidth = window.innerWidth;
        if (right + 400 > screenWidth)
            document.documentElement.scrollLeft -= 200;
    }

    let personPosition = person.offsetLeft + (person.width * 0.5);
    for (let i = 0; i < event.length; i++) {
        if (personPosition > eventRange[i][0] && personPosition < eventRange[i][1]) {
            event[i].style.transform = "scale(1.1)";
            event[i].src = "../image/SVG/0" + (num + 1) + "-" + (i + 1) + "-hover.svg";
            if (e.keyCode == 32) {
                event[i].addEventListener("click", showText(i));
            }
        } else {
            event[i].style.transform = "scale(1)";
            event[i].src = "../image/SVG/0" + (num + 1) + "-" + (i + 1) + ".svg";
        }
    }
}

function showText(num) {
    let card = document.querySelectorAll(".card");
    card[num].style.left = document.body.scrollLeft;
    card[num].style.display = "flex";
    let close = document.querySelectorAll(".close");
    close[num].addEventListener("click", function () {
        card[num].style.display = "none";
    })
}

window.onkeyup = function (e) {
    if (e.keyCode == 39 || e.keyCode == 68) { // --> D
        person.src = "../image/SVG/" + list[num] + ".svg";
    }
    if (e.keyCode == 37 || e.keyCode == 65) { // <-- A
        person.src = "../image/SVG/" + list[num] + ".svg";
    }
}