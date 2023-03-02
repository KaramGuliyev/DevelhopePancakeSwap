let firstLine = document.getElementById("ad1")
let secondLine = document.getElementById("ad2")
let firstTitle = document.getElementById("title51")
let secondTitle = document.getElementById("title52")
let firstButton = document.getElementById("btn51")
let secondButton = document.getElementById("btn52")


function animationFirst() {
    secondLine.style.animationName = "sliderUp";
    secondTitle.style.visibility = "visible";
    firstLine.style.animationName = "sliderDown";
    firstTitle.style.visibility = "hidden";
}
function animationSecond() {
    secondLine.style.animationName = "sliderDown";
    secondTitle.style.visibility = "hidden";
    firstLine.style.animationName = "sliderUp";
    firstTitle.style.visibility = "visible";
}

let bool = true; 
let int1 = setInterval(() => {
    if (bool) {
        animationFirst()
        bool = false
    }
    else {
        animationSecond()
        bool = true
    }
}, 5000)

let int2;
let int3;

function clickedFirstButton() {
    let bool1 = true;
    clearInterval(int2)
    clearInterval(int3)
    int2 = setInterval(() => {
        if (bool1) {
            animationSecond()
            bool1 = false
        }
        else {
            animationFirst()
            bool1 = true
        }
    }, 5000)
}

function clickedSecondButton() {
    let bool2 = true;
    clearInterval(int2)
    clearInterval(int3)
    int3 = setInterval(() => {
        if (bool2) {
            animationFirst()
            bool2 = false
        }
        else {
            animationSecond()
            bool2 = true
        }
    }, 5000)
}

firstButton.addEventListener("click", function() {
    animationFirst()
    clearInterval(int1)
    clickedFirstButton()
})

secondButton.addEventListener("click", function() {
    animationSecond()
    clearInterval(int1)
    clickedSecondButton()
})
