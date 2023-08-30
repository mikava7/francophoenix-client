import React from "react";
import { useTranslation } from "react-i18next";

const ChooseLevel = ({ onChange, selectedLevel }) => {
  const { t } = useTranslation();
  const levels = ["Tous", "A1", "A2", "B1", "B2", "C1"];

  return (
    <div>
      <label htmlFor="levelDropdown">{t("Choisir le niveau")}:</label>
      <select id="levelDropdown" value={selectedLevel} onChange={onChange}>
        {levels.map((level) => (
          <option key={level} value={level}>
            {t(level)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChooseLevel;
