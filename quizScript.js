const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAns = ["90", "right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let entry of formResults.values()) {
        if (entry === correctAns[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    output.innerText =  "your score is : " + score;
}


submit.addEventListener("click", calculateScore);