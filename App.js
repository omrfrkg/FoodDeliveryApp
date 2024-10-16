import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Nav
import AppNavigation from "./src/navigation/AppNavigation";

//Redux
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
