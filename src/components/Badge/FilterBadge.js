import React from 'react';
import {View, Text} from 'react-native';
import styles from './FilterBadge.styles';

const FilterBadge = ({title, activeBadge, onBadgePress}) => {

  const onPress= ()=> {
  if(title === activeBadge){
    onBadgePress("")
  } else {
    onBadgePress(title)
  }
   
  }

  return (
    <View
      style={activeBadge === title ? styles.containerActive : styles.container}
      onStartShouldSetResponder={onPress}>
      <Text 
        style={activeBadge === title ? styles.titleActive : styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default FilterBadge;
