import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    this.setState({ modalVisible: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Entrar" onPress={this.entrar}></Button>
        <Modal animationType="fade" visible={this.state.modalVisible}>
          <View style={{ backgroundColor: "#292929", flex: 1 }}>
            <Text style={{ color: "#FFF", fontSize: 28 }}>Seja bem vindo!</Text>
            <Button
              title="Sair"
              onPress={() => this.setState({ modalVisible: false })}
            ></Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDD",
  },
});

export default App;
