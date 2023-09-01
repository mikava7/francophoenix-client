import React from "react";

const LanguageToggle = ({ inputLanguage, toggleInputLanguage }) => {
  return (
    <button onClick={toggleInputLanguage}>
      Switch to {inputLanguage === "french" ? "Second Language" : "French"}
    </button>
  );
};

export default LanguageToggle;
