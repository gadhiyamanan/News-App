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
import { getArticles } from "../../service/news";
import DataItem from "../../components/dataitem";
import Modal from "../../components/model";
export default class ListThumbnailExample extends Component {
  state = {
    isLoading: true,
    data: null,
    setmodalvisible: false,
    modalarticaldata: {},
  };
  handleItemDataOnPress = (articaldata) => {
    this.setState({
      setmodalvisible: true,
      modalarticaldata: articaldata,
    });
  };
  handleItemModalClose = () => {
    this.setState({
      setmodalvisible: false,
      modalarticaldata: {},
    });
  };
  componentDidMount() {
    getArticles("science").then(
      (data) => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      (error) => {
        Alert.alert("Error", "Something went wrong!");
      }
    );
  }

  render() {
    //console.log(this.state.data);
    let view = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{ marginTop: 10 }}>Please Wait...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem onPress={this.handleItemDataOnPress} data={item} />;
        }}
      />
    );

    return (
      <Container>
        <Content>{view}</Content>
        <Modal
          showModal={this.state.setmodalvisible}
          articaldata={this.state.modalarticaldata}
          onClose={this.handleItemModalClose}
        ></Modal>
      </Container>
    );
  }
}
