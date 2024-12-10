const hamburger = document.querySelector(".nav-hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}
)

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>
{
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}
)
)

// Define an array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
  "Believe you can and you're halfway there. - Theodore Roosevelt"
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}

// Quiz data - array of objects with questions and answers
const quizData = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "London",
      c: "Berlin"
    },
    correctAnswer: "a"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: {
      a: "William Shakespeare",
      b: "Jane Austen",
      c: "Charles Dickens"
    },
    correctAnswer: "a"
  },
  // Add more questions as needed
];

// Function to create and display the quiz
function displayQuiz() {
  const quizSection = document.getElementById("quiz-section");

  // Clear any existing content
  quizSection.innerHTML = "";

  // Loop through quiz data and create HTML elements for each question
  quizData.forEach((questionObj, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question");
    questionDiv.innerHTML = `
      <h2>Question ${index + 1}:</h2>
      <p>${questionObj.question}</p>
      <form id="form-${index}">
        <input type="radio" name="question-${index}" value="a">
        <label>${questionObj.answers.a}</label><br>
        <input type="radio" name="question-${index}" value="b">
        <label>${questionObj.answers.b}</label><br>
        <input type="radio" name="question-${index}" value="c">
        <label>${questionObj.answers.c}</label><br>
        <button type="button" onclick="checkAnswer(${index}, '${questionObj.correctAnswer}')">Submit Answer</button>
      </form>
      <p id="result-${index}"></p>
    `;
    quizSection.appendChild(questionDiv);
  });
}

// Function to check the answer submitted by the user
function checkAnswer(questionIndex, correctAnswer) {
  const form = document.getElementById(`form-${questionIndex}`);
  const selectedAnswer = form.querySelector(`input[name="question-${questionIndex}"]:checked`);

  if (selectedAnswer) {
    const resultParagraph = document.getElementById(`result-${questionIndex}`);
    if (selectedAnswer.value === correctAnswer) {
      resultParagraph.textContent = "Correct!";
      resultParagraph.style.color = "green";
    } else {
      resultParagraph.textContent = "Incorrect. The correct answer is " + correctAnswer.toUpperCase() + ".";
      resultParagraph.style.color = "red";
    }
  } else {
    alert("Please select an answer before submitting.");
  }
}

// Call the function to display the quiz when the page loads
displayQuiz();
