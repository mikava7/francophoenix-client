export const generateQuizQuestions = (
  wordsInTargetLanguage,
  secondLanguage
) => {
  const quizQuestions = [];
  const usedIndices = new Set();
  const getRandomIndex = (array) =>
    Math.floor(Math.random() * secondLanguage.length);

  while (quizQuestions.length < wordsInTargetLanguage.length) {
    const questionIndex = getRandomIndex(wordsInTargetLanguage);

    // Check if the index has already been used as a question
    if (usedIndices.has(questionIndex)) {
      continue; // Skip this iteration if the index is already used
    }

    const questionWord = wordsInTargetLanguage[questionIndex];
    const targetLanguageIndex = questionIndex;
    const answerWord = secondLanguage[targetLanguageIndex];

    const incorrectOptions = [];

    while (incorrectOptions.length < 3) {
      const randomIndex = getRandomIndex(secondLanguage);
      const randomWord = secondLanguage[randomIndex];

      // Ensure the incorrect option is not a duplicate of the correct answer
      if (!incorrectOptions.includes(randomWord) && randomWord !== answerWord) {
        incorrectOptions.push(randomWord);
      }
    }

    const options = [answerWord, ...incorrectOptions].sort(
      () => Math.random() - 0.5
    );

    const quizQuestion = {
      question: questionWord,
      options,
      answer: answerWord,
    };

    quizQuestions.push(quizQuestion);
    usedIndices.add(questionIndex); // Mark the index as used
  }

  return quizQuestions;
};
