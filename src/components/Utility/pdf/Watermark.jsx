import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const Watermark = () => {
  const styles = StyleSheet.create({
    watermarkContainer: {
      position: "absolute",
      top: "40%",
      left: "22%",
      transform: "rotate(-45deg)",
      opacity: 0.3,
      fontSize: 80,
      letterSpacing: "14px",
      color: "lightgray",
    },
  });

  return (
    <View style={styles.watermarkContainer}>
      <Text>frang.ge</Text>
    </View>
  );
};

export default Watermark;
