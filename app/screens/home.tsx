import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với Closm!</Text>
      <Text style={styles.subtitle}>Closm nơi tạo ra phong cách cho bạn!</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default HomeScreen;
