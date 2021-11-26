import React from 'react';
import {View, Text} from 'react-native';
import styles from './ListItem.styles';

const ListItem = ({product}) => {
  const {name , price} = product
  return (
    <View style={styles.listItemContainer}>
      <Text>{name}</Text>
      <Text style={styles.priceText}>{price} TL</Text>
    </View>
  );
};

export default ListItem;
