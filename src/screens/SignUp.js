import React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text
} from "react-native";
import api from "../services/api";

export default class SignUp extends React.Component {
  state = {
    name: "",
    login: "",
    password: "",
    email: "",
    error: ""
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  signUp = async () => {
    const { name, login, password, email } = this.state;
    if (!name || !login || !email || !password) {
      // this.setState({ error: "Preencha todos os dados para se cadastrar" });
      console.log("Preencha todos os dados para se cadastrar");
    } else {
      const params = {
        name: name,
        login: login,
        email: email,
        password: password
      };

      const response = await api
        .post("/register", params)
        .then(response => {
          alert(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          placeholderTextColor="#f66963"
          onChangeText={val => this.onChangeText("name", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#f66963"
          onChangeText={val => this.onChangeText("email", val)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Login"
          autoCapitalize="none"
          placeholderTextColor="#f66963"
          onChangeText={val => this.onChangeText("login", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#f66963"
          onChangeText={val => this.onChangeText("password", val)}
        />
        <TouchableOpacity style={styles.button} onPress={this.signUp}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#FFF",
    borderBottomColor: "#f66963",
    borderWidth: 1,
    margin: 10,
    padding: 8,
    color: "#f66963",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#f66963",
    borderRadius: 8
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});
