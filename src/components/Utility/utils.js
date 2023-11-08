export const displayWord = (word) => {
  if (word?.startsWith("l'")) {
    return word
      .slice(2)
      .replace(/\([^()]*\)/, "")
      .trim("(");
  } else if (word?.startsWith("les ")) {
    // For plural words starting with "les ", slice the first four characters ("les ")
    return word?.slice(4);
  } else if (word?.startsWith("le/la ")) {
    return null; // Return null to exclude this word from rendering
  } else {
    // For regular words starting with "le " or "la ", slice the first three characters
    return word?.slice(3);
  }
};

//shuffle array
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const handleMouseEnter = () => {
  if (isTextVerbsWord) {
    setHoveredVerb(cleanWord);
  }
};

export const handleMouseLeave = () => {
  if (isTextVerbsWord) {
    setHoveredVerb(null);
  }
};

export const redirectToBescherelle = (verb) => {
  const formattedVerb = verb.replace(/\s+/g, "-");
  const url = `https://conjugaison.bescherelle.com/verbes/${formattedVerb}`;
  window.open(url, "_blank");
};

export const mapSearchResults = (searchResults, field) =>
  searchResults.map((result) => result[field]);

// const frenchConjugations = [];

// for (const tenseKey in forms) {
//   const tense = forms[tenseKey];
//   if (Array.isArray(tense)) {
//     tense.forEach((item) => {
//       if (item.french) {
//         frenchConjugations.push(item.french);
//       }
//     });
//   }
// }

export function normalizeString(input) {
  return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

///////////
export function convertTensesToSentences(presentTenseData) {
  // console.log("presentTenseData", presentTenseData);
  if (!presentTenseData || !presentTenseData.length) {
    return []; // Handle empty data
  }

  // Iterate through the tenses and convert each object to a sentence
  const sentences = presentTenseData.map((tense) => {
    const sentence = tense.sentence;
    const correctAnswer = tense.correctAnswer;

    // Replace the placeholder ____ with the correct answer
    const modifiedSentence = sentence.replace("____", correctAnswer);

    return modifiedSentence;
  });

  return sentences;
}

// Call the function with your data
// const newSentences = convertTensesToSentences(presentTenseVerbe);

// // Now `newSentences` contains the transformed data
// console.log("New Sentences", newSentences);
