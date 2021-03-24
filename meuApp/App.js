import React, { Component } from "react";
import { View } from "react-native";

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "green",
          }}
        ></View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "red",
          }}
        ></View>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "yellow",
          }}
        ></View>
      </View>
    );
  }
}
export default App;
