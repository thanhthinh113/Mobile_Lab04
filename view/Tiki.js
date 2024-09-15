import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Tiki() {
  const [number, setNumber] = useState(1);
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.firstIF}>
            <View style={styles.firstImg}>
              <Image style={styles.img} source={require("../image/book.png")} />
            </View>
            <View style={styles.firstContent}>
              <Text style={styles.firstText}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={styles.firstText}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.firstTextNumber}>141.800 đ</Text>
              <Text style={styles.firstTextNumberG}>141.800 đ</Text>
              <View style={styles.FirstTextLast}>
                <View style={styles.incrementNumber}>
                  <TouchableOpacity onPress={decrement} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.incrementNumberText}>{number}</Text>
                  <TouchableOpacity onPress={increment} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.TextSales}>Mua sau</Text>
              </View>
            </View>
          </View>
          <View style={styles.firstSales}>
            <Text style={styles.firstSalesText}>Mã giảm giá đã lưu</Text>
            <Text style={styles.TextSales}>Xem tại đây</Text>
          </View>
          <View style={styles.firstSale}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnCL}></Text>
              <Text style={[styles.textBtn, styles.textBtnCl]}>
                Mã Giảm giá
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.textBtn}>Áp Dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.last}>
          <View style={styles.lastContent}>
            <Text style={styles.lastText1}>
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <Text style={[styles.TextSales, styles.lastText]}>
              Nhập tại đây?
            </Text>
          </View>
          <View style={styles.lastAuto}>
            <Text style={[styles.textBtn, styles.textBtnCl]}>Tạm tính</Text>
            <Text style={styles.lastAutoNumber}>141.800 đ</Text>
          </View>
          <View style={styles.lastNull}>
            <Text></Text>
          </View>
          <View style={styles.lastlast}>
            <View style={styles.lastAuto1}>
              <Text style={[styles.textBtn, styles.textBtnClOD]}>
                Thành tiền
              </Text>
              <Text style={styles.firstTextNumberTT}>141.800 đ</Text>
            </View>
            <View style={styles.lastBtn}>
              <TouchableOpacity style={styles.btnOd}>
                <Text style={[styles.lastTextBtn]}>Tiến hành đặt hàng</Text>
              </TouchableOpacity>
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
  },
  first: {
    flex: 2,
    margin: "4%",
  },
  firstIF: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  firstText: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 12,
    marginRight: 20,
  },
  firstTextNumber: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12,
    color: "#EE0D0D",
  },
  firstTextNumberG: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 12,
    color: "#808080",
    textDecorationLine: "line-through",
  },
  incrementNumber:{
    flexDirection:"row",
  },
  incrementNumberText:{
    marginLeft:5,
    marginRight:5
  },
  button:{
    backgroundColor:"#C4C4C4",
    width:14,
    height:16,
    justifyContent:"center",
    alignItems:"center"
  },
  FirstTextLast: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginRight: 20,
  },
  TextSales: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#134FEC",
  },
  firstSales: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    width: "55%",
  },
  firstSalesText: {
    fontWeight: "bold",
    fontSize: 12,
  },
  firstSale: {
    marginTop: "12%",
    flexDirection: "row",
  },
  btn: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 3,
    alignItems: "center",
    width: "60%",
    borderWidth: 1,
    borderColor: "black",
  },
  btn1: {
    backgroundColor: "#0A5EB7",
    padding: 10,
    borderRadius: 3,
    alignItems: "center",
    width: "33%",
    marginLeft: "7%",
  },
  textBtn: {
    color: "white", // Màu của chữ
    fontWeight: "bold", // Làm dày chữ
    fontSize: 18, // Kích thước chữ
  },
  textBtnCl: {
    color: "#011627",
  },
  btnCL: {
    width: 30,
    height: 15,
    backgroundColor: "#F2DD1B",
    marginRight: 10,
  },
  last: {
    flex: 3,
    backgroundColor: "#C4C4C4",
  },
  lastContent: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "15%",
    width: "100%",
    marginTop: 15,
    alignItems: "center",
    paddingLeft: "4%",
  },
  lastText1: {
    fontWeight: "bold",
    fontSize: 12,
  },
  lastText: {
    marginLeft: 10,
    marginTop: 1,
  },
  lastAuto: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "15%",
    width: "100%",
    marginTop: 15,
    paddingRight: 40,
    alignItems: "center",
    paddingLeft: "4%",
    display: "flex",
    justifyContent: "space-between",
  },
  lastAuto1: {
    flexDirection: "row",
    backgroundColor: "white",
    height: "15%",
    width: "100%",
    paddingRight: 40,
    alignItems: "center",
    paddingLeft: "4%",
    display: "flex",
    justifyContent: "space-between",
  },
  lastAutoNumber: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#EE0D0D",
  },
  lastNull: {
    height: "30%",
    backgroundColor: "red",
  },
  firstTextNumberTT: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#EE0D0D",
  },
  lastlast: {
    height: "100%",
    backgroundColor: "white",
  },
  lastBtn: {
    marginLeft: "4%",
    marginRight: "4%",
  },
  btnOd: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#E53935",
    height: "37%",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtnClOD: {
    color: "#808080",
  },
  lastTextBtn: {
    color: "white", // Màu của chữ
    fontWeight: "bold", // Làm dày chữ
    fontSize: 20, // Kích thước chữ
  },
});
