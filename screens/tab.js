import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Title,
} from "native-base";
import { Left, Body, Right } from "native-base";
import { StyleSheet, Text, View, fontFamily } from "react-native";

import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
import Tab4 from "./tabs/tab4";
import Tab5 from "./tabs/tab5";
import Tab6 from "./tabs/tab6";
import Tab7 from "./tabs/tab7";

export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={{ backgroundColor: "mediumblue" }}>
          <Left />
          <Body>
            <View>
              <Text
                style={{
                  textAlign: "center", // <-- the magic
                  fontWeight: "bold",
                  fontSize: 25,
                  //paddingleft: 180,
                  width: 230,
                  color: "white",
                  //     backgroundColor: "green",
                }}
              >
                News App
              </Text>
            </View>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab
            tabStyle={{ backgroundColor: "mediumblue" }}
            activeTabStyle={{ backgroundColor: "mediumblue" }}
            heading="General "
            textStyle={{ color: "white" }}
          >
            <Tab1 />
          </Tab>
          <Tab
            heading="Bussiness"
            tabStyle={{ backgroundColor: "mediumblue" }}
            activeTabStyle={{ backgroundColor: "mediumblue" }}
            textStyle={{ color: "white" }}
          >
            <Tab2 />
          </Tab>
          <Tab
            heading="Technology"
            tabStyle={{ backgroundColor: "mediumblue" }}
            activeTabStyle={{ backgroundColor: "mediumblue" }}
            textStyle={{ color: "white" }}
          >
            <Tab3 />
          </Tab>
          <Tab
            heading="Entertainment"
            tabStyle={{ backgroundColor: "mediumblue" }}
            activeTabStyle={{ backgroundColor: "mediumblue" }}
            textStyle={{ color: "white" }}
          >
            <Tab4 />
          </Tab>
          <Tab
            heading="Health"
            tabStyle={{ backgroundColor: "mediumblue" }}
            activeTabStyle={{ backgroundColor: "mediumblue" }}
            textStyle={{ color: "white" }}
          >
            <Tab5 />
          </Tab>
          <Tab
            heading="Science"
            tabStyle={{ backgroundColor: "mediumblue" }}
            activeTabStyle={{ backgroundColor: "mediumblue" }}
            textStyle={{ color: "white" }}
          >
            <Tab6 />
          </Tab>
          <Tab
            heading="Sports"
            tabStyle={{ backgroundColor: "mediumblue" }}
            activeTabStyle={{ backgroundColor: "mediumblue" }}
            textStyle={{ color: "white" }}
          >
            <Tab7 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
