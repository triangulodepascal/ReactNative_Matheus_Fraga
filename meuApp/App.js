import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

let img = 'https://sujeitoprogramador.com/steve.png';

class App extends Component {
  render() {
    let nome = 'Samuel';
    return (
      <View>
        <Text>Olá Mundo!</Text>
        <Text>Meu primeiro App!</Text>
        <Text style={{color: 'red', fontSize: 25, margin: 15}}>
          Sujeito programador
        </Text>
        <Text style={{fontSize: 30}}>{nome}</Text>
        <Jobs largura={500} altura={200} fulano="Steve Jobs"></Jobs>
      </View>
    );
  }
}
export default App;

class Jobs extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: img}}
          style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text>{this.props.fulano}</Text>
      </View>
    );
  }
}
