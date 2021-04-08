/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  ZohoDeskPortalSDK,
  ZDPortalHome,
  ZDPortalKB,
  ZDPortalCommunity,
  ZDPortalTickets,
  ZDPortalSubmitTicket,
  ZDPortalChat,
} from 'react-native-zohodesk-portal-sdk';

ZohoDeskPortalSDK.enableLogs();
ZohoDeskPortalSDK.initialise("YOUR_ORG_ID", "YOUR_APP_ID", "YOUR_DC");

var curEmailId = "";
function setText(emailTyped) {
  curEmailId = emailTyped;
};
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>

          <TextInput
                  id="emailId"
                  placeholder="Email Address"
                  onChangeText={text => setText(text)}
                />

        <View style={styles.button}>
          <Button
            onPress={() => {
              ZohoDeskPortalSDK.isUserSignedIn((isSignedIn) => {
                if(!isSignedIn) {
                  ZohoDeskPortalSDK.setUserToken(curEmailId,
                  (msg) => {
                    alert('Success Alert '+msg);
                    } , msg => {
                      alert('Failure Alert '+msg);
                      });
                    }
                    else {
                      alert("User is alerady signed in");
                    }
              })
            }}
            title="Sign in"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZDPortalHome.show();
            }}
            title="Launch SDK"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZDPortalKB.show();
            }}
            title="Launch KB"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZDPortalCommunity.show();
            }}
            title="Launch Community"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZDPortalTickets.show();
            }}
            title="Launch My Tickets"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZDPortalSubmitTicket.show();
            }}
            title="Launch Submit Ticket"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZDPortalChat.show();
            }}
            title="Launch Live Chat"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZohoDeskPortalSDK.enablePush();
            }}
            title="Enable Push"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZohoDeskPortalSDK.logout((msg)=>{
                alert("Success "+msg);
                },
                (msg) =>{
                  alert("Failure "+msg);
                  });
            }}
            title="Logout"
          />
        </View>

        <View style={styles.button}>
          <Button
          style={styles.button}
            onPress={() => {
              // ZohoDesk.startDeskHomeScreen();
              ZohoDeskPortalSDK.disablePush();
            }}
            title="Disbale Push"
          />
        </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    marginTop: 15,
    marginLeft: 15,
    marginRight:15,
  }
});

export default App;
