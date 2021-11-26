import React from 'react'
import { View } from 'react-native';
import FilterBadge from '../Badge/FilterBadge';
import styles from './Header.styles';


const Header = ({activeBadge , setActiveBadge}) => {


     //Badge items
  const badgeTitles = ['Artan Fiyat', 'Azalan Fiyat', 'Tarih'];

  const onBadgePress = (title) => {
    setActiveBadge(title);
  };

    return (
        <View style={styles.headerContainer}>
          {badgeTitles.map((titleItem, idx) => {
            return (
              <FilterBadge
                key={idx}
                title={titleItem}
                activeBadge={activeBadge}
                onBadgePress = {onBadgePress}

              />
            );
          })}
        </View>
    )
}

export default Header
