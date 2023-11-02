import React, { useState } from "react";
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
import Watermark from "./Watermark";
const PDFVocabularyDocument = ({
  wordsInTargetLanguage,
  secondLanguage,
  targetedTitle,
  nativeLanguageTitle,
}) => {
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
        fontSize: 14,
        fontWeight: "bold",
        color: "red",
        textAlign: "justify",
        fontFamily: "Sylfaen",
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
        />
      }
      fileName="vocabulary.pdf"
    >
      {({ blob, url, loading, error }) => {
        console.log("PDF Download Link Status:", loading, error);
        return loading ? "Loading document..." : "Download PDF";
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
}) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Watermark />
      {targetedTitle && <Text style={styles.text}>{targetedTitle}</Text>}-
      {nativeLanguageTitle && (
        <Text style={styles.text}>{nativeLanguageTitle}</Text>
      )}
      <View style={{ padding: 10 }}>
        {wordsInTargetLanguage &&
          wordsInTargetLanguage?.map((word, index) => (
            <Text key={index} style={styles.text}>
              {word} - {secondLanguage[index]}
            </Text>
          ))}
      </View>
      {/* Include the native language title */}
    </Page>
  </Document>
);

export default PDFVocabularyDocument;
