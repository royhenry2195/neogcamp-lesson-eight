const sides = document.querySelectorAll(".side-output");
const btn = document.querySelector("#hypo-btn");
const output = document.querySelector("#output");


function calSumOfSquare(a,b){
    const sumOfSquare = a*a + b*b ;
    return sumOfSquare;
}


function CalHypotenuse(){
    const sumOfsqr = calSumOfSquare(Number(sides[0].value) , Number(sides[1].value));

    const lengthOfHypo =   Math.sqrt(sumOfsqr);
    output.innerText = "The length of Hypo is : "  + lengthOfHypo;
}

btn.addEventListener("click" , CalHypotenuse);