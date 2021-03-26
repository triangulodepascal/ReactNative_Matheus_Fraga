import React, { Component } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

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

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  areaPessoa: {
    backgroundColor: "#222",
    height: 200,
    marginTop: 25,
  },
  textoPessoa: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default App;
