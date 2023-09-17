import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CardProfileComponent from "./components/CardProfile/CardProfileComponent";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{justifyContent: 'center', flex:1, marginHorizontal: 20}}>
          <CardProfileComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
