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

const Login = () => {
  
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
      <Text style={styles.textStyle}>Email</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Youremail@gmail.com"
        placeholderTextColor={"gray"}
        value={email}
        onChangeText={setEmail}
        maxLength={30}
        inputMode="email"
        keyboardType="email-address"
      />

      <Text style={styles.textStyle}>Password</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="**********"
        placeholderTextColor={"gray"}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        maxLength={10}
        keyboardType="default"
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

      <TouchableOpacity style={styles.buton}>
        <Text style={styles.butonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buton}>
        <Text style={styles.butonText}>Sign Up!</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.or}>YA DA</Text>
        <Text style={styles.line}></Text>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../assets/images/google-icon.png")}
          />
          <Text style={styles.text}>Google hesabı ile giriş yap!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../assets/images/facebook-icon.png")}
          />
          <Text style={styles.text}>Facebook hesabı ile giriş yap!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../assets/images/microsoft-icon.png")}
          />
          <Text style={styles.text}>Microsoft hesabı ile giriş yap!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.image}
            source={require("../assets/images/telefon-icon.png")}
          />
          <Text style={styles.text}>Telefon ile giriş yap!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  textStyle: {
    fontSize: 30,
    fontFamily: "Verdana",
  },
  textInputStyle: {
    width: 600,
    height: 60,
    borderWidth: 2,
    borderColor: "blue",
    margin: 30,
    color: "black",
    fontWeight: "bold",
    borderRadius: 70,
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: 25,
  },
  buttonStyle: {
    width: 470,
    height: 55,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    fontFamily: "Verdana",
  },
  buton: {
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#023e8a",
    marginTop: 13,
    marginBottom: 15,
    borderRadius: 10,
  },
  butonText: {
    color: "blue",
    color: "white",
    fontSize: 20,
    fontFamily: "Verdana",
  },
  button: {
    width: 390,
    height: 80,
    backgroundColor: "#00b4d8",
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 19,
    paddingLeft: 30,
    fontFamily: "Verdana",
  },
  image: {
    width: 40,
    height: 40,
    margin: 10,
  },
  or: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical:20,
    textAlign: "center",
  },
  line: {
    width: "100%",
    height: 3,
    backgroundColor: "black",
    marginBottom: 10,
  },
});
