import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import moji from 'moji';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '変換したい文字を入力してください',
      kana: ''
    };
  }

  onPress = () => {
    this.setState({kana: moji(this.state.text).convert('ZK', 'HK').toString()})
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 80, borderColor: 'gray', borderWidth: 1}}
          multiline={true}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
        <Button
          title='カナ変換'
          onPress={this.onPress} />
        <Text>{this.state.kana}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
});
