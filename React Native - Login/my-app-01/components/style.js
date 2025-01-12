import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from "react-native";

const Style = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pressed, setPressed] = useState(true);

  const handlePress = () => {
    if (email == "" || password == "") {
      alert("Lütfen tüm alanları doldurunuz.");
    } else {
      setPressed(!pressed);
      alert(`Email : ${email}\nPassword : ${password}`);
    }
  };

  return (
   <View style={styles.outline}>
    <View style={styles.box}>
      <Image
        style={styles.ImageStyle}
        source={require("../assets/key.png")}
      ></Image>

      <Text style={styles.textStyle}>Email</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="example@gmail.com"
        placeholderTextColor={"black"}
        value={email}
        onChangeText={setEmail}
        maxLength={30}
        inputMode="email"
        keyboardType="email-address"
      />

      <Text style={styles.textStyle}>Password</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter your Password!"
        placeholderTextColor={"black"}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        maxLength={10}
        inputMode="text"
        keyboardType="visible-password"
      />

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: pressed ? "blue" : "gray" },
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.signUpStyle}>Sign Up!</Text>
          </TouchableOpacity>
        </View>
    </View>
</View>
  );
};

export default Style;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontStyle: "italic",
    fontSize: 35,
    color: "blue",
  },
  textInputStyle: {
    borderWidth: 2,
    borderColor: "blue",
    margin: 20,
    color: "black",
    fontWeight: "bold",
    borderRadius: 70,
    width: 250,
    height: 50,
    textAlign: "center",
  },
  buttonStyle: {
    width: 200,
    height: 35,
    borderRadius: 50,
    paddingTop:3,
  },
  buttonTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
  },
  ImageStyle: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 300,
  },
  rowContainer: {
    width: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 15,
    marginRight: 15,
  },
  signUpStyle: {
    fontWeight: "bold",
    color: "blue",
  },
  forgotPassword: {
    fontWeight: "bold",
    color: "blue",
  },
  outline: {
    borderWidth: 2,
    width: 400,
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 170,
    borderBottomRightRadius: 170,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
