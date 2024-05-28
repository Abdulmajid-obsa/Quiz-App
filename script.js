const questions = [
    {
        question: "The function _____________ compares two strings only with a specified number of characters.",
        answers: [
            { text: "strncmp", correct: true},
            { text: "strcmp", correct: false},
            { text: "strcat", correct: false},
            { text: "setw", correct: false},
        ]
    },
    {
        question: "Which of the following virtual machine is used by the Android operating system?",
        answers: [
            { text: "JVM", correct: false},
            { text: "Dalvik virtual machine", correct: true},
            { text: "Simple virtual machine", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of logical error?",
        answers: [
            { text: "Incorrect header files", correct: false},
            { text: "Missing Parenthesis", correct: false},
            { text: "Using a variable before it has been declared", correct: false},
            { text: "Incorrectly using logical operators", correct: true},
        ]
    },
    {
        question: "Which of the following is an incorrect way of initializing two-dimensional arrays?",
        answers: [
            { text: "int numbers[2][3] = {3, 34, 60, 82, 25, 6};", correct: true},
            { text: "Missing Parenthesisint numbers [2][3] = {{3, 34, 60}, {82, 25,6}}:", correct: false},
            { text: "int numbers[][] = {3, 34, 60, 82, 25, 6};", correct: false},
            { text: "int numbers[3][] = {3, 34, 60, 82, 25, 6}:;", correct: false},
        ]
    },
    {
        question: "Can the size of an array be changed once it is declared in C++?",
        answers: [
            { text: "Yes, by using the resize() function", correct: false},
            { text: "Yes, by using the push_back() and pop_back() functions", correct: false},
            { text: "No, the size is fixed and cannot be changed", correct: true},
            { text: "Yes, by using the realloc() function", correct: false},
        ]
    },
    {
        question: "______ is testing performed at a high level to ensure that the main functionality of a system is as required prior to moving onto more granular tests.",
        answers: [
            { text: "Smoke Testing", correct: true},
            { text: "Rational Testing", correct: false},
            { text: "Sanity Testing", correct: false},
            { text: "All", correct: false},
        ]
    },
    {
        question: "The ______ statement, when executed in a repetition statement, skips the remaining statements in the loop body and proceeds with the next iteration of the loop.",
        answers: [
            { text: "else if", correct: false},
            { text: "break", correct: false},
            { text: "continue", correct: true},
            { text: "do while", correct: false},
        ]
    },
    {
        question: "Which of the following data structures is not a linear data structure?",
        answers: [
            { text: "Stack", correct: false},
            { text: "Queue", correct: false},
            { text: "Tree", correct: true},
            { text: "Linked List", correct: false},
        ]
    },
    {
        question: "Which of the following devices would be described as an intermediary device?",
        answers: [
            { text: "Wireless router", correct: true},
            { text: "Server", correct: false},
            { text: "Camera", correct: false},
            { text: "Laptop", correct: false},
        ]
    },
    {
        question: "Find the output of the following prefix expression. * + 2 - 2 1 / - 4 2 + - 5 3 1",
        answers: [
            { text: "2", correct: true},
            { text: "12", correct: false},
            { text: "10", correct: false},
            { text: "4", correct: false},
        ]
    },
    {
        question: "What should be the execution order, if a class has a method, static block, instance block, and constructor?",
        answers: [
            { text: "Instance block, method, static block, and constructor", correct: false},
            { text: "Method, constructor, instance block, and static block", correct: false},
            { text: "Static block, method, instance block, and constructor", correct: false},
            { text: "Static block, instance block, constructor, and method", correct: true},
        ]
    },
    {
        question: "Which keyword in java is used for exception handling?",
        answers: [
            { text: "exep", correct: false},
            { text: "excepHand", correct: false},
            { text: "throw", correct: true},
            { text: ". All of these", correct: false},
        ]
    },
    {
        question: "Which scheduling algorithm has the highest average waiting time?",
        answers: [
            { text: "Shortest Job First", correct: false},
            { text: "Round Robin", correct: true},
            { text: "Priority Scheduling", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "Divide the Process into blocks of the same size called___________",
        answers: [
            { text: "Frame", correct: false},
            { text: "Page number", correct: false},
            { text: "Page", correct: true},
            { text: "Page offset", correct: false},
        ]
    },
    {
        question: "Which of the following option leads to the portability and security of Java?",
        answers: [
            { text: ". Bytecode is executed by JVM", correct: true},
            { text: "The applet makes the Java code secure and portable", correct: false},
            { text: " Use of exception handling", correct: false},
            { text: "Dynamic binding betweern objects", correct: false},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
