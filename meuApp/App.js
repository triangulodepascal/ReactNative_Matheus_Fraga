import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      input: "",
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input == "") {
      alert("Digite seu nome!");
      this.setState({ nome: "" });
    } else {
      this.setState({ nome: "Bem vindo: " + this.state.input });
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          // Para cada mudança no texto do input, chama-se a função onChangeText que cria a responsividade
          onChangeText={(texto) => this.setState({ input: texto })}
        ></TextInput>

        <Button title="Entrar" onPress={this.entrar}></Button>
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    marginTop: 30,
    marginHorizontal: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
  },
});
