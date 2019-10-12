import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  Text
} from "react-native";
import api from "../services/api";

export default class Login extends Component {
  state = {
    login: "",
    password: "",
    isLoading: false,
    data: null
  };

  handleLogin = text => {
    this.setState({ login: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  setAsyncStorage = async token => {
    try {
      await AsyncStorage.setItem("user", token);
    } catch (e) {
      alert(e.message);
    }
  };

  handleLogar = async () => {
    const login = this.state.login;
    const pass = this.state.password;

    this.setState({
      isLoading: true
    });

    await api
      .post("/authenticate", {
        login: login,
        password: pass
      })
      .then(response => {
        if (response.data && response.data.token) {
          this.setState({
            isLoading: true,
            data: response.data
          });
          this.props.navigation.navigate("Profile");

          const resultToken = this.state.data.token;

          this.setAsyncStorage(resultToken);
        } else {
          this.setState({
            isLoading: false,
            data: response.data
          });
        }
      })
      .catch(error => {
        alert("Message: " + error);
      });
  };

  async componentDidMount() {
    const user = await AsyncStorage.getItem("user");
    if (user && user.length) {
      this.props.navigation.navigate("Profile");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerBody}>
          <TextInput
            className="Login"
            style={styles.inputBox}
            onChangeText={text => {
              this.handleLogin(text);
            }}
            autoCapitalize="none"
            placeholder="Login"
            placeholderTextColor="#f66963"
            selectionColor="#fff"
            onSubmitEditing={() => this.password.focus()}
          />

          <TextInput
            className="password-input"
            style={styles.inputBox}
            onChangeText={text => {
              this.handlePassword(text);
            }}
            autoCompleteType="password"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#f66963"
          />

          <TouchableOpacity style={styles.button} onPress={this.handleLogar}>
            <Text style={styles.buttonText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#f66963",
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55
  },
  headerImage: {
    height: 45,
    width: 250
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 18,
    color: "#f66963",
    marginVertical: 10,
    opacity: 0.5
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
  },
  imageBack: {
    width: "100%",
    height: "100%",
    opacity: 0.6
  }
});
