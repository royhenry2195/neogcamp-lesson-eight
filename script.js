const inputs = document.querySelectorAll(".angle-input");
const btn = document.querySelector("#angle-btn");
const output = document.querySelector("#output");


function CalsumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = CalsumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    debugger
    if (sumOfAngles === 180) {
        output.innerText = "yes , the angle form a triangle";
    } else {
        output.innerText = "sorry , the angles do not form a triangle";
    }
}


btn.addEventListener("click ", isTriangle);