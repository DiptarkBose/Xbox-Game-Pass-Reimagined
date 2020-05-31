
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import ToggleSwitch from "toggle-switch-react-native";

export default class App extends Component<{}> {
  state = {
    isOnDefaultToggleSwitch: true,
  };

  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ToggleSwitch
          offColor="green"
          size="large"
          isOn={this.state.isOnDefaultToggleSwitch}
          onToggle={isOnDefaultToggleSwitch => {
            this.setState({ isOnDefaultToggleSwitch });
            this.onToggle(isOnDefaultToggleSwitch);
          }}
        />
      </View>
    );
  }
}
