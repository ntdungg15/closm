import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, 
  Alert, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, 
  TextInput, Keyboard } from "react-native";

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  // , []) one time
  useEffect(() => {
    console.log("Component render!");
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với Closm!</Text>
      <Text style={styles.subtitle}>Closm nơi tạo ra phong cách cho bạn!</Text>

      {/* TouchableOpacity bluf khi click */}
      <TouchableOpacity onPress={() => Alert.alert("Chào mừng bạn đã đến với Closm!")}>
        <Text style={{ padding: 10, backgroundColor: "blue", color: "white" }}>
          Welcome!
        </Text>
      </TouchableOpacity>



      {/* <Text>Count: {count}</Text> */}
      {/* <Button title="Tăng" onPress={() => setCount(count + 1)} /> */}
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
