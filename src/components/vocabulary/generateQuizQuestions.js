export const generateQuizQuestions = (
  wordsInTargetLanguage,
  secondLanguage
) => {
  // console.log(
  //   "wordsInTargetLanguage in generateQuizQuestions",
  //   wordsInTargetLanguage
  // );
  // console.log("secondLanguage in generateQuizQuestions", secondLanguage);

  const quizQuestions = [];
  const usedWords = new Set();

  // Generate a random number within the range of the target language vocabulary array
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

  while (quizQuestions.length < wordsInTargetLanguage.length) {
    const questionIndex = getRandomIndex(wordsInTargetLanguage);
    const questionWord = wordsInTargetLanguage[questionIndex];

    // Skip if the word has already been used as a question
    if (usedWords.has(questionWord)) continue;

    const targetLanguageIndex = questionIndex;
    const answerWord = secondLanguage[targetLanguageIndex];

    // Generate three random incorrect options by choosing random words from the second language array
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
