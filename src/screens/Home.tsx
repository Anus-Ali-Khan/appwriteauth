import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
// reat native elements
import {FAB} from '@rneui/themed';
// Snackbar
import Snackbar from 'react-native-snackbar';

// context API
import AppwriteContext from '../appwrite/AppwriteContext';

type UserObj = {
  name: String;
  email: String;
};

const Home = () => {
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'Logout Successful',
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
