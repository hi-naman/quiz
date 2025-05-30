const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: 0
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "Shakespeare", "Tolkien", "Hemingway"],
    answer: 1
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  document.querySelectorAll("#options button").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result").innerText = `Your score: ${score}/${questions.length}`;
  }
}

window.onload = loadQuestion;
