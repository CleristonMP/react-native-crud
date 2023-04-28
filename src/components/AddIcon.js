import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default props => {
  return (
    <Image
      source={require('../../assets/add_icon.png')}
      style={styles.addIcon}
    />
  );
};

const styles = StyleSheet.create({
  addIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
});
