import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const mfn = () => {
    setCount(count + 1);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHe}> LOGIN</Text>
        </View>
        <View style={styles.form}>
          <View>
            <TextInput
              placeholder="Name"
              style={styles.inputControl}
            ></TextInput>
          </View>
          <View>
            <TextInput
              placeholder="Password"
              style={styles.inputControl}
            ></TextInput>
          </View>
        </View>
        <View style={styles.login}>
          <View style={styles.loginButton}>
            <Button title="Login" ></Button>

          </View>
        </View>
        <View style={styles.forgot}>
            <Text style={styles.forgotText}> Forgot your password?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00",
  },
  header: {
    flex: 1,
  },
  textHe:{
    marginTop:90,
    fontSize:24,
    fontWeight:'bold'
  },
  form: {
    flex: 1,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    margin: 10,
  },
  login:{
    flex:1,
  },
  loginButton:{
    height: 44,
    backgroundColor: "#060000",
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    margin:10,

  },
  forgot:{
    flex:1,
    padding:'auto',
    margin:'auto',
    
  },
  forgotText:{
    fontWeight:'bold',
    fontSize:18
  }
});
