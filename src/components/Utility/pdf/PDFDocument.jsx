import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { trackDownload } from "../../../redux/slices/userProgress/userProgressSlice";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Watermark from "./Watermark";
const PDFVocabularyDocument = ({
  wordsInTargetLanguage,
  secondLanguage,
  targetedTitle,
  nativeLanguageTitle,
  currentURL,
  userId,
  contentId,
  selectedFontSize,
}) => {
  const [downloadStatus, setDownloadStatus] = useState("notStarted"); // Initialize as "notStarted"
  console.log("selectedFontSize in selectedFontSize", selectedFontSize);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const section = "vocabulary";
  const handleDownload = () => {
    // console.log("dispatched", { userId, contentId, section });
    if (userId) {
      dispatch(trackDownload({ userId, contentId, section }));
    }
  };

  // Register the "Noto Sans Georgian" font
  Font.register({
    family: "Sylfaen",
    src: "https://fonts.cdnfonts.com/s/67752/sylfaen.woff",
    format: "truetype",
  });

  const [styles] = useState(
    StyleSheet.create({
      body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      text: {
        margin: 12,
        // fontSize: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        padding: "5px 0",
        fontFamily: "Sylfaen",
      },
      title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        fontSize: "20px",
        fontWeight: "bold",
        borderBottom: "0.1px solid transparent",
      },
      link: {
        textDecoration: "none",
        background: "#434d68",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginLeft: "8px",
        transition: "background 0.3s",
        outline: "1px solid red",
      },
    })
  );

  return (
    <PDFDownloadLink
      document={
        <MyDocument
          wordsInTargetLanguage={wordsInTargetLanguage}
          secondLanguage={secondLanguage}
          styles={styles}
          targetedTitle={targetedTitle}
          nativeLanguageTitle={nativeLanguageTitle}
          currentURL={currentURL}
          t={t}
          selectedFontSize={selectedFontSize}
        />
      }
      fileName={`${targetedTitle}-${nativeLanguageTitle}.pdf`}
      style={styles.link}
      onClick={() => {
        setDownloadStatus("loading"); // Set to "loading" when download starts
        handleDownload();
      }}
    >
      {({ blob, url, loading, error }) => {
        // console.log("PDF Download Link Status:", loading, error);
        let result =
          downloadStatus === "loading"
            ? "Loading document..."
            : `${nativeLanguageTitle}-${targetedTitle}.pdf`;

        if (result.length > 20) {
          result = result.slice(0, 17) + "..."; // Truncate and add ellipsis
        }

        return result;
      }}
    </PDFDownloadLink>
  );
};

const MyDocument = ({
  wordsInTargetLanguage,
  secondLanguage,
  styles,
  targetedTitle,
  nativeLanguageTitle,
  currentURL,
  t,
  selectedFontSize,
}) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Watermark />
      <Title>
        <View style={styles.title}>
          {targetedTitle && <Text style={styles.text}>{targetedTitle}</Text>}
          {targetedTitle && nativeLanguageTitle && " - "}
          {nativeLanguageTitle && (
            <Text style={styles.text}>{nativeLanguageTitle}</Text>
          )}
        </View>
      </Title>

      <View style={{ padding: 10 }}>
        {wordsInTargetLanguage &&
          wordsInTargetLanguage?.map((word, index) => (
            <Text
              key={index}
              style={{ ...styles.text, fontSize: selectedFontSize }}
            >
              {word} - {secondLanguage[index]}
            </Text>
          ))}
      </View>
      <Text
        onClick={() => window.open(currentURL, "_blank")}
        style={{
          color: "red",
          fontSize: "12px",
          textDecoration: "underline",
        }}
      >
        lesson link {currentURL}
      </Text>
    </Page>
  </Document>
);

export default PDFVocabularyDocument;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
