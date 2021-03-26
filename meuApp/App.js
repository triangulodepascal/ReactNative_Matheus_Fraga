import React, { Component } from "react";
import Pessoa from "./src/Pessoas";
import { View, StyleSheet, FlatList } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: "1",
          nome: "Samuel",
          idade: 19,
          email: "samuelchagasalves@gmail.com",
        },
        {
          id: "2",
          nome: "Sarah",
          idade: 18,
          email: "sarahchagasalves@gmail.com",
        },
        {
          id: "3",
          nome: "Maira",
          idade: 21,
          email: "mairachagasalves@gmail.com",
        },
        {
          id: "4",
          nome: "Matheus",
          idade: 26,
          email: "matheuschagasalves@gmail.com",
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Pessoa data={item} />}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
