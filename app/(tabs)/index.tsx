import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    // ẩn navigation home
    // <Tab.NavigatorscreenOptions={{ headerShown: false }}>
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Explore"
        component={() => (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>explore</Text>
          </View>
        )}
      />
    </Tab.Navigator>
  );
}
