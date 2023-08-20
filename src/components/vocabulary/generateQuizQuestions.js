export const generateQuizQuestions = (french, secondLanguage) => {
  console.log("french in generateQuizQuestions", french);
  const quizQuestions = [];
  const usedWords = new Set();

  // Generate a random number within the range of the French vocabulary array
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

  while (quizQuestions.length < french.length) {
    const questionIndex = getRandomIndex(french);
    const questionWord = french[questionIndex];

    // Skip if the word has already been used as a question
    if (usedWords.has(questionWord)) continue;

    const frenchIndex = questionIndex;
    const answerWord = secondLanguage[frenchIndex];

    // Generate three random incorrect options by choosing random words from the language array
    const incorrectOptions = [];
    while (incorrectOptions.length < 3) {
      const randomWord = secondLanguage[getRandomIndex(secondLanguage)];
      if (
        !incorrectOptions.includes(randomWord) &&
        randomWord !== answerWord &&
        !usedWords.has(randomWord) // Skip if the word has already been used as an option
      ) {
        incorrectOptions.push(randomWord);
      }
    }

    // Shuffle the options array to randomize the order of options
    const options = [answerWord, ...incorrectOptions].sort(
      () => Math.random() - 0.5
    );

    const quizQuestion = {
      question: questionWord,
      options,
      answer: answerWord,
    };

    quizQuestions.push(quizQuestion);
    usedWords.add(questionWord);
  }

  return quizQuestions;
};
