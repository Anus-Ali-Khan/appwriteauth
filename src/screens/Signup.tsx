import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// reat native elements
import {FAB} from '@rneui/themed';
// Snackbar
import Snackbar from 'react-native-snackbar';

// context API
import AppwriteContext from '../appwrite/AppwriteContext';
// Navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../routes/AuthStack';

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
