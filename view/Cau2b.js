import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Cau2b() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.imgHeader}
              source={require("../image/usb.png")}
            />
            <Text style={styles.textHeader}>
              USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
              bluetooth
            </Text>
          </View>
        </View>
        <View style={styles.review}>
          <Text style={styles.textReview}> Cực kỳ hài lòng</Text>
          <View style={styles.reviewStart}>
            <Image
              style={styles.imgHeader}
              source={require("../image/Star.png")}
            />
            <Image
              style={styles.imgHeader}
              source={require("../image/Star.png")}
            />
            <Image
              style={styles.imgHeader}
              source={require("../image/Star.png")}
            />
            <Image
              style={styles.imgHeader}
              source={require("../image/Star.png")}
            />
            <Image
              style={styles.imgHeader}
              source={require("../image/Star.png")}
            />
          </View>
        </View>
        <View style={styles.createImg}>
          <View style={styles.createImgContent}>
            <View style={styles.createImgContentImg}>
            <Image
              source={require("../image/Vector.png")}
            />
            </View>
            <View style={styles.createImgContentText}>
                <Text style={styles.createImgContentTextContent}>Thêm hình ảnh</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
        <TextInput
        style={styles.textarea}
        multiline
        numberOfLines={4} // Số dòng hiển thị
        placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
      />
        </View>
        <View style={styles.footer}>
          <View style={styles.footerButton}>
          <Button style={styles.footerButtonContent} title="Gửi" color="#FFFFFF"  onPress={()=>navigation.navigate("Cau2b")}></Button>

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
  header: {
    flex: 1,
    width: "100%",
  },
  headerContent: {
    flexDirection: "row",
    alignContent: "center",
    margin: "auto",
    padding: "auto",
  },
  imgHeader: {
    margin: 5,
  },
  textHeader: {
    width: "80%",
    fontWeight: "bold",
    fontSize: 18,
  },
  review: {
    flex: 1,
    alignItems: "center",
  },
  textReview: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  reviewStart: {
    flexDirection: "row",
  },
  createImg:{
    flex:1,
    width:"80%",
    marginLeft:"10%",
    marginRight:"10%",
    
  },
  createImgContent:{
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center",
    height:90,
    borderRadius:4,
    borderWidth: 1, 
    borderColor: '#1511EB',
  },
  createImgContentText:{
    marginLeft:10,
    
  },
  createImgContentTextContent:{
    fontWeight: "bold",
    fontSize: 18,
  },
  content:{
    flex:2
  },
  textarea: {
    marginLeft:"10%",
    height: "100%", // Chiều cao của textarea
    width: '80%', // Chiều rộng của textarea
    borderColor: '#C4C4C4',
    borderWidth: 2,
    borderRadius: 8, // Bo góc
    padding: 12,
    fontSize: 16, // Kích thước chữ
    fontWeight:"bold"
  },
  footer:{
    flex:1,
    width:"80%",
    marginLeft:"10%",
    justifyContent:"center"
  },
  footerButton:{
    height: 44,
    backgroundColor: "#060000",
    paddingHorizontal: 16,
    color: "white",
    margin:10,
  },
  
});
