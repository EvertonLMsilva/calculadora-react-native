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

  const addDigit = numero => {
    setState({ displayValue: numero });
  };
  const clearMemory = () => {
    setState({ displayValue: '0' });
  };
  const setOperation = caracter => {};

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Display value={state.displayValue} />
      <View style={styles.button}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
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
