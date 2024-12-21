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
      <Text style={styles.line}>________________________</Text>
      <Text style={styles.accountStyle}>
        Don't you have an account? Register.
      </Text>
      <Text style={styles.forgotPasswordStyle}>Forgot your password?</Text>
      <Text style={styles.line}>________________________</Text>
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
    width: 100,
    height: 30,
    borderRadius: 50,
  },
  buttonTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 17,
  },
  accountStyle: {
    color: "blue",
    fontWeight: "bold",
    fontStyle: "italic",
    margin: 10,
    cursor: "pointer",
  },
  forgotPasswordStyle: {
    color: "blue",
    fontWeight: "bold",
    fontStyle: "italic",
    cursor: "pointer",
  },
  ImageStyle: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 300,
  },
  line: {
    color: "blue",
  },
});
