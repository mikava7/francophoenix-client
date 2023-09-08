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
