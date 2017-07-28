// @flow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
    };
  }

  componentWillMount() {
    this.setState({ isReady: true });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
