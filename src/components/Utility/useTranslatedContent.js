import { useTranslation } from "react-i18next";

export const useTranslatedContent = (key) => {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language === "ka";

  // Assuming you have translations for each key in your translation files
  return isGeorgian ? t(`${key}Geo`) : t(`${key}Eng`);
};
