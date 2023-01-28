import React from 'react';
import {View, Text} from 'react-native';

const Greeting = props => {
  return (
    <>
      <View>
        <Text>{props.name}</Text>
      </View>
      <Text>Extra Text !</Text>
    </>
  );
};

Greeting.defaultProps = {
  name: '리액트 네이티브',
};

export default Greeting;
