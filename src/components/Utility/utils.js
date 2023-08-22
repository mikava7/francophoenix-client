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
