import React, { Component } from "react";
import { Gravatar } from "react-native-gravatar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import api from "../services/api";

class Profile extends Component {
  state = {
    nome: "",
    login: "",
    email: ""
  };

  componentDidMount() {
    this.getProfile();
  }

  getProfile = async () => {
    await api
      .get("/profile")
      .then(resp => {
        const { name, login, email } = resp.data;
        this.setState({ nome: name, login: login, email: email });
      })
      .catch(error => {
        console.log(error);
      });
  };

  logout = async () => {
    await AsyncStorage.removeItem("user");
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <View style={styles.container}>
        <Gravatar
          options={{
            email: this.state.email,
            parameters: { size: "200", d: "mm" },
            secure: true
          }}
          style={styles.roundedProfileImage}
        />
        <Text>{this.state.nome}</Text>
        <Text>{this.state.login}</Text>
        <Text>{this.state.email}</Text>
        <TouchableOpacity style={styles.button} onPress={this.logout}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center"
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
  roundedProfileImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 50
  }
});

export default Profile;
