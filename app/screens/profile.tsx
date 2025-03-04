import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "@/app/stack/ProfileStackScreen";

// ✅ 1. Định nghĩa kiểu `ProfileScreenNavigationProp`
type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  "ProfileMain"
>;

const ProfileScreen = () => {
  // ✅ 2. Sử dụng useNavigation với kiểu dữ liệu đúng
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      {/* 🔥 Button điều hướng sang Login */}
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
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
});

export default ProfileScreen;
