import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { StyleSheet, Text, View, Alert, ActivityIndicator } from "react-native";
import Timeago from "./time";
export default class DataItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  handlepress = () => {
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };
  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=",
            }}
          />
        </Left>
        <Body>
          <Text note numberOfLines={2} style={{ fontWeight: "bold" }}>
            {this.data.title}
          </Text>
          <Text note numberOfLines={1}>
            {this.data.description}
          </Text>
          <View style={{ flex: 1, flexDirection: "row", marginTop: 8 }}>
            <Text note>{this.data.source.name}</Text>
            <Timeago time={this.data.publishedAt}></Timeago>
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlepress}>
            <Text style={{ color: "blue", textDecorationLine: "underline" }}>
              View
            </Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
