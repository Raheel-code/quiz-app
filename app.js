one = {
  question: "Who is making the Web standards?",
  answer: ["The World Wide Web Consortium.", "Internet Explorer", "Netscape Navigator", "none of these"],
  correctAns: "The World Wide Web Consortium",
};
two = {
  question: "CSS stands for",
  answer: ["cascading style sheet", "Style sheet", "cacsael style sheet", "none of these"],
  correctAns: "cascading style sheet",
};
three = {
  question: "The external JavaScript file must contain the <script> tag.",
  answer: ["True", "False"],
  correctAns: "true",
};
four = {
  question: "HTML stands for",
  answer: ["hyper text mark up languege", "markup language", "none of these", "language"],
  correctAns: "hyper text mark up languege",
};

var arr = [one, two, three, four];
var question = document.getElementById("question");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionQuantity = document.getElementById("totalQuestionQuantity");
var optionsParent = document.getElementById("optionsParent");
var resultParent = document.getElementById("resultParent");
var resultText = document.getElementById("resultText");
var ind = 0;
var score = 0;

function displayQuestion() {
  optionsParent.innerHTML = "";
  question.innerHTML = arr[ind].question;
  currentQuestionNumber.innerHTML = ind + 1;
  totalQuestionQuantity.innerHTML = arr.length;
  for (var i = 0; i < arr[ind].answer.length; i++) {
    optionsParent.innerHTML += `<div class="col-md-6 py-3">
    <button onclick="checkAnswer('${arr[ind].answer[i]}')" class="btn px-5  rounded-pill btn-light">${arr[ind].answer[i]}</button>
</div>`;
  }
}
displayQuestion();

function checkAnswer(e) {
  var userAnswer = e;
  if (userAnswer == arr[ind].correctAns) {
    score++;
  }
  if (ind + 1 == arr.length) {
    displayResult();
  } else {
    ind++;
    displayQuestion();
  }
}

function displayResult() {
  resultParent.style.display = "block";
  optionsParent.style.display = "none";
  question.style.display = "none";
  var result = "Your Score is " + score + " /" + arr.length + "👍"
  resultText.innerHTML = result
}
