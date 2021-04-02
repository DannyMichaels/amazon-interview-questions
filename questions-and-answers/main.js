const questions = [
  {
    question: 'question1',
    answer: 'answer1',
  },
  {
    question: 'question2',
    answer: 'answer2',
  },
  {
    question: 'question3',
    answer: 'answer3',
  },
  {
    question: 'question4',
    answer: 'answer4',
  },
];

let currentQuestionNum = 0;
const finalQuestionNum = questions.length - 1;

const prevQuestionBtn = document.getElementById('prev-btn');
const nextQuestionBtn = document.getElementById('next-btn');

let currentQuestionHTML = document.getElementById('current-question');

const fetchCurrentQuestion = () => {
  // it'll only get the pair from the index that matches currentQuestionNum
  Array(questions[currentQuestionNum]).forEach(({ question, answer }) => {
    currentQuestionHTML.textContent = `${question}: ${answer}`;
  });
};

const onComponentDidMount = () => {
  prevQuestionBtn.classList.add('disabled');
  fetchCurrentQuestion();
};

// my love for react shows here with that naming, lol.
const onComponentDidUpdate = () => {
  fetchCurrentQuestion();

  // my own bonus, make color different if button is disabled.
  if (currentQuestionNum === finalQuestionNum) {
    return nextQuestionBtn.classList.add('disabled');
  }

  if (currentQuestionNum === 0) {
    return prevQuestionBtn.classList.add('disabled');
  }

  nextQuestionBtn.classList.remove('disabled');
  prevQuestionBtn.classList.remove('disabled');
};

prevQuestionBtn.addEventListener('click', () => {
  if (currentQuestionNum === 0) return;

  currentQuestionNum--;
  onComponentDidUpdate();
});

nextQuestionBtn.addEventListener('click', () => {
  if (currentQuestionNum === finalQuestionNum) return;
  currentQuestionNum++;
  onComponentDidUpdate();
});

onComponentDidMount();
