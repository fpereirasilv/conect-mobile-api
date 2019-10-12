import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Gravatar from 'react-gravatar'
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import api from "../services/api";
import { TOKEN_KEY } from "../services/auth";
import axios from "axios";

class Profile extends Component {
  state = {
    nome: "",
    login: "",
    email: ""
  };

  componentDidMount() {
    this.getProfile();
  }

  // getProfile = async () => {
  //   alert("Recuperando token");
  //   const token = await AsyncStorage.getItem("user");
  //   alert("Token recuperado");
  //   var config = {
  //     headers: { Authorization: "bearer " + token }
  //   };
  //   api
  //     .get("/profile", {}, config)
  //     .then(resp => {
  //       console.log(resp.data);
  //       const { name, login, email } = resp.data;
  //       this.setState({ nome: name, login: login, email: email });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  getProfile = async () => {
    const token = await AsyncStorage.getItem("user");
    const config = {
      headers: {
        Authorization: "Bearer " + token
        // "Content-Type": "application/json",
        // Accept: "application/json"
      }
    };

    //Rota - parametros - configuracoesem
    api
      .get("/profile", config)
      .then(resp => {
        const { name, login, email } = resp.data;
        this.setState({ nome: name, login: login, email: email });
      })
      .catch(error => {
        console.log(error);
      });
  };

  logout = () => {
    // await AsyncStorage.removeItem("user");
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Gravatar email={this.state.email} size={100} /> */}
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
  }
});

export default Profile;