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
  Icon,
} from "native-base";
import {
  StyleSheet,
  Dimensions,
  //WebView,
  Share,
  Modal,
  Text,
  View,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { WebView } from "react-native-webview";
const webviewheight = Dimensions.get("window").height;
// create a component
export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    return this.props.onClose();
  };
  handleshare = () => {
    const { url, title } = this.props.articaldata;
    message = `${title}\n\nRead More @${url}\n\n shared via News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };
  render() {
    const { showModal, articaldata } = this.props;
    const { url } = articaldata;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "white" }}
          >
            <Header style={{ backgroundColor: "mediumblue" }}>
              <Button onPress={this.handleClose} transparent>
                <Icon name="close" style={{ color: "white", fontSize: 12 }} />
              </Button>
              <Body
                style={{
                  color: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  News App
                </Text>
              </Body>
              <Right>
                <Button onPress={this.handleshare} transparent>
                  <Icon
                    name="share"
                    style={{ color: "white", fontsize: 12 }}
                  ></Icon>
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ height: webviewheight }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={this.handleClose}
                startInLoadingState
                scalesPageToFit
              ></WebView>
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}
