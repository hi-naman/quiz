const topicQuestions = {
  sports: [
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["Germany", "Brazil", "France", "Argentina"],
      answer: 2
    },
    {
      question: "How many players are on a basketball team?",
      options: ["5", "6", "7", "11"],
      answer: 0
    }
  ],
  movies: [
    {
      question: "Who directed 'Inception'?",
      options: ["Spielberg", "Nolan", "Scorsese", "Tarantino"],
      answer: 1
    },
    {
      question: "Which movie won the Oscar for Best Picture in 2020?",
      options: ["Parasite", "1917", "Joker", "Ford v Ferrari"],
      answer: 0
    }
  ],
  technology: [
    {
      question: "What does HTML stand for?",
      options: ["HighText Machine Language", "HyperText Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
      answer: 1
    },
    {
      question: "Who founded Microsoft?",
      options: ["Steve Jobs", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
      answer: 3
    }
  ]
};

const topicState = {
  sports: { current: 0, score: 0 },
  movies: { current: 0, score: 0 },
  technology: { current: 0, score: 0 }
};

function loadTopicQuestion(topic) {
  const state = topicState[topic];
  const questions = topicQuestions[topic];

  if (state.current < questions.length) {
    const q = questions[state.current];

    document.getElementById(`${topic}-question`).innerText = q.question;

    const optionsDiv = document.getElementById(`${topic}-options`);
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => {
        if (i === q.answer) topicState[topic].score++;
        document.querySelectorAll(`#${topic}-options button`).forEach(b => b.disabled = true);
      };
      optionsDiv.appendChild(btn);
    });
  } else {
    document.getElementById(`${topic}-question`).innerText = "";
    document.getElementById(`${topic}-options`).innerHTML = "";
    document.getElementById(`${topic}-result`).innerText =
      `Your score in ${topic}: ${state.score} / ${questions.length}`;
  }
}

function nextTopicQuestion(topic) {
  topicState[topic].current++;
  loadTopicQuestion(topic);
}

function filterTopics() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const topics = document.querySelectorAll(".topic-section");

  topics.forEach(section => {
    const topic = section.getAttribute("data-topic");
    section.style.display = topic.includes(input) ? "block" : "none";
  });
}

window.onload = () => {
  Object.keys(topicQuestions).forEach(topic => loadTopicQuestion(topic));
};
