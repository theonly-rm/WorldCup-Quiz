questionOne = {
    question: "Q1. Which country has won the Cricket World Cup 2023?",
    answer: "australia"
  }
  questionTwo = {
    question: "Q2. In which year was the first Cricket World Cup held?",
    answer: "1975"
  }
  questionThree = {
    question: "Q3. Which player has the most centuries in Cricket World Cup history? ",
    answer: "rohit sharma"
  }
  questionFour = {
    question: "Q4. What is the highest score of an individual in world cup history? [Maxwell]",
    answer: "201"
  }
  questionFive = {
    question: "Q5. Who was the Player of the Tournament in CWC 2023? ",
    answer: "virat kohli"
  }
  questionSix = {
    question: "Q6. How many matches did India win in CWC 2023? ",
    answer: "10"
  }
  questionSeven = {
    question: "Q7. Who made the record of most centuries in ODI Cricket?",
    answer: "virat kohli"
  }
  questionEight = {
    question: "Q8. How many wickets did mohammed shami take in CWC 2023?",
    answer: "24"
  }
  questionNine = {
    question: "Q9. Who was the captain of 2011 CWC winning Indian Team?",
    answer: "ms dhoni"
  }
  questionTen = {
    question: "Q10. Who lifted the CWC 2023 trophy for Australia?",
    answer: "pat cummins"
  }
  
  let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
  
  let score = 0;
  let readlineSync = require("readline-sync");
  
  // data of high score
  let highScores = [
    {
      name: "Rachit",
      score: 9,
    }
  
    // {
    //   name: "Akash",
    //   score: 2,
    // },
  ]
  
  let userName = readlineSync.question("Enter your Name: ");
  console.log("Hi " + userName + "! Welcome to the World Cup 2023 Quiz.");
  
  
  
  function worldCupQuiz(quest, ans) {
    let userAnswer = readlineSync.question(quest);
    if (userAnswer.toUpperCase() === ans.toUpperCase()) {
      console.log("You are right!");
      score++;
    }
    else {
      console.log("You are wrong! ")
    }
  
    console.log("Current score: " + score);
    console.log("----------------");
  }
  
  for (let i = 0; i < questions.length; i++) {
    worldCupQuiz(questions[i].question, questions[i].answer);
  }
  
  
  console.log("Your final score is: " + score);
  
  if (score == 10) {
    console.log("Congratulations " + userName + "! You have won the World Cup 2023 Quiz.");
  }
  
  else if (score >= 7) {
    console.log("You played really well " + userName + "!");
  }
  
  else if (score > 3) {
    console.log("Well tried " + userName + "!")
  }
  
  else {
    console.log("You need to try again " + userName + "!");
  }
  
  console.log("--------------")
  console.log("Check out the high scores:");
  highScores.map(score => console.log(score.name, " : ", score.score))
  