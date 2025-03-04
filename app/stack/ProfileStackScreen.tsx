import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/profile";
import LoginScreen from "../screens/login";
// map
export type ProfileStackParamList = {
  ProfileMain: undefined;
  Login: undefined;
};
const ProfileStack = createStackNavigator();

export default function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen name="Login" component={LoginScreen} />
    </ProfileStack.Navigator>
  );
}
