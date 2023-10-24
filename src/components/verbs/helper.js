export const calculateTensePercentage = (presentTenseVerbe, answers) => {
  if (presentTenseVerbe.length === 0) {
    return 0;
  }

  const correctCount = answers.reduce((count, answer, index) => {
    return answer === presentTenseVerbe[index].correctAnswer
      ? count + 1
      : count;
  }, 0);
  const maxTenseScore = 5;
  const actualTenseScore = (correctCount / presentTenseVerbe.length) * 5;
  return actualTenseScore;
};
