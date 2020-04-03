import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Canvas from './Canvas'

export default function App() {
  return (
    <Canvas/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
