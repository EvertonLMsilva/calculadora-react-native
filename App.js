/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App: () => Node = () => {
  const [state, setState] = useState({ displayValue: '0' });

  return (
    <SafeAreaView style={styles.sectionContainer}>
        <Display value={state.displayValue} />
        <View style={styles.button}>
          <Button label="AC" />
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
          <Button label="0" />
          <Button label="." />
          <Button label="=" />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
