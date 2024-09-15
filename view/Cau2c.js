import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Sử dụng FontAwesome

export default function Cau2c({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.allView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>PASSWORD</Text>
            <Text style={styles.headerText}>GENERATOR</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.contentHeader}></View>
            <View style={styles.contentNull}></View>
            <View style={styles.password}>
              <Text style={styles.textContent}>Password length</Text>
              <TextInput style={styles.inputControl} />
            </View>
            <View style={styles.lower}>
              <Text style={styles.textContent}>Include lower case letters</Text>
              <TouchableOpacity style={styles.checkbox} onPress={handlePress}>
                {isChecked ? (
                  <Icon name="check-square" size={30} color="#4CAF50" /> // Icon có dấu tích
                ) : (
                  <Icon name="square-o" size={30} color="#000" /> // Icon ô vuông trống
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.upcase}>
              <Text style={styles.textContent}>Include upcase letters</Text>
              <TouchableOpacity style={styles.checkbox} onPress={handlePress}>
                {isChecked ? (
                  <Icon name="check-square" size={30} color="#4CAF50" /> // Icon có dấu tích
                ) : (
                  <Icon name="square-o" size={30} color="#000" /> // Icon ô vuông trống
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.number}>
              <Text style={styles.textContent}>Include number</Text>
              <TouchableOpacity style={styles.checkbox} onPress={handlePress}>
                {isChecked ? (
                  <Icon name="check-square" size={30} color="#4CAF50" /> // Icon có dấu tích
                ) : (
                  <Icon name="square-o" size={30} color="#000" /> // Icon ô vuông trống
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.special}>
              <Text style={styles.textContent}>Include special symbol</Text>
              <TouchableOpacity style={styles.checkbox} onPress={handlePress}>
                {isChecked ? (
                  <Icon name="check-square" size={30} color="#4CAF50" /> // Icon có dấu tích
                ) : (
                  <Icon name="square-o" size={30} color="#000" /> // Icon ô vuông trống
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <Button
                title="GENERATE PASSWORD"
                color="#FFFFFF"
                onPress={() => navigation.navigate("Cau2c")}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
  },
  allView: {
    flex: 1,
    margin: "5%",
    backgroundColor: "#23235B",
    borderRadius: 15,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    alignContent: "center",
  },
  content: {
    flex: 4,
    margin: "5%",
  },
  contentHeader: {
    flex: 1,
    backgroundColor: "#151537",
  },
  contentNull: {
    flex: 1,
  },
  inputControl: {
    height: 44,
    width: 150,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    margin: 10,
  },
  password: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  lower: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  upcase: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  number: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  special: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    height: 44,
    backgroundColor: "#3B3B98",
    paddingHorizontal: 16,
    margin: 10,
  },
  textContent: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
