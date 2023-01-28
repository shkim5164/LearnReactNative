import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';
import Counter from './components/Counter';

const App = () => {
  const [visible, setVisible] = useState(true);
  const name = 'JSX';
  const onPress = () => {
    setVisible(!visible);
  };

  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <SafeAreaView style={styles.full}>
      {/* <Button title="토글" onPress={onPress} /> */}
      {/* {visible && <Box rounded={true} size="large" color="blue" />} */}
      <Counter count={count} onDecrease={onDecrease} onIncrease={onIncrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
