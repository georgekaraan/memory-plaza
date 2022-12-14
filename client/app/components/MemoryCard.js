import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { renderIcon } from "../functions/renderIcon";

import colors from "../config/colors";
import AppText from "./AppText";

export default function MemoryCard({ title, subTitle, type, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <AppText num={1} style={styles.title}>
          {title}
        </AppText>
        <View style={styles.content}>
          <View style={styles.cardImage}>
            {renderIcon(type, "50%", "primary")}
          </View>
          <View style={styles.cardDesc}>
            <AppText num={3} style={styles.subTitle}>
              {subTitle}
            </AppText>
          </View>
        </View>
        <Text style={styles.more}>More</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.secondary,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 10,
    height: 150,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    height: "70%",
  },
  cardImage: {
    flex: 1,
    alignSelf: "center",
  },
  cardDesc: {
    flex: 3,
    marginRight: 5,
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: "600",
    paddingHorizontal: 10,
  },
  subTitle: {
    flexWrap: "wrap",
    fontSize: 18,
    fontStyle: "italic",
    color: colors.primary,
  },
  more: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: colors.dark,
    textDecorationLine: "underline",
  },
});
