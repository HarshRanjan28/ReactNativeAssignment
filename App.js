import React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import Course from "./src/screens/Course";
import Contact from "./src/screens/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => (
            <Home {...props} channelName={"Harsh's online classes"} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Course"
          component={Course}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
