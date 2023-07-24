import { useTranslation } from "react-i18next";

const Vocabulary = ({ vocabullaryTopics }) => {
  const { t, i18n } = useTranslation(); // Get the current language and translation function (t)
  const isEnglish = i18n.language === "en";

  return (
    <div>
      {vocabullaryTopics.map((topic) => {
        const { french, english, georgian, name } = topic;

        // Determine the second language based on the 'isEnglish' flag
        const secondLanguage = isEnglish ? english : georgian;

        // Determine the maximum length of both language arrays to ensure pairs are correctly displayed
        const maxLength = Math.max(french.length, secondLanguage.length);

        return (
          <div key={name}>
            <h2>{name}</h2>
            <ul>
              {Array.from({ length: maxLength }).map((_, index) => (
                <li key={index}>
                  {/* Display the word in French and the corresponding word in the second language */}
                  {french[index] || ""} - {secondLanguage[index] || ""}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Vocabulary;
