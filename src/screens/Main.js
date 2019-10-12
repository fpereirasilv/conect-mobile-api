import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  AsyncStorage
} from "react-native";

// import { Container } from './styles';

export default class screens extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>SignIn</Text>
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
