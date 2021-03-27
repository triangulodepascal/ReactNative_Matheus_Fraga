import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { key: 1, nome: "Strogonoff", valor: 35.9 },
        { key: 2, nome: "Calabresa", valor: 59 },
        { key: 3, nome: "Quatro queijos", valor: 37 },
        { key: 4, nome: "Brigadeiro", valor: 25.7 },
      ],
    };
  }
  render() {
    let pizzasItem = this.state.pizzas.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.nome} />;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ pizza: itemValue })
          }
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>
          Voce escolheu: {this.state.pizzas[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}>
          R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  logo: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: "center",
  },
});

export default App;
