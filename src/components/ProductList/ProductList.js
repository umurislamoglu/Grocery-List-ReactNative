import React from 'react';
import {FlatList} from 'react-native';
import ListItem from './ListItem';


const ProductList = ({productData, renderFlag}) => {
  const renderItems = ({item}) => {
    return <ListItem product={item} />;
  };

  return (
    <FlatList
      data={productData}
      renderItem={renderItems}
      keyExtractor={item => item.id}
      extraData={renderFlag}
    />
  );
};

export default ProductList;
