import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from '../Button/Button';
import styles from './ProductInput.styles';

const ProductInput = ({productData , setProductData ,sortByBadge , activeBadge}) => {


  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState();

  const  onAddPress = () => {

    if(productName != "" || productPrice != null) {
      let product = {
        id: Math.random().toString(36).substr(2, 9),
        name: productName,
        price : productPrice,
        date:Date.now(),
   
     }
     let tempData = [...productData,product];
     let sortedData = sortByBadge(tempData,activeBadge)
     setProductData(sortedData);
     setProductName("")
     setProductPrice()
    }
  }




  return (
    <View style={{flex: 1}}>
      <View style={styles.inputPair}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          autofocus
          style={styles.inputTextArea}
          onChangeText={setProductName}
          value={productName}
        />
      </View>
      <View style={styles.inputPair}>
        <Text style={styles.inputLabel}>Price</Text>
        <TextInput
          autofocus
          style={styles.inputTextArea}
          onChangeText={setProductPrice}
          keyboardType="numeric"
          value={productPrice}
        />
      </View>
      <Button title={'Add'} style={styles.addButton} onPress={onAddPress} />
    </View>
  );
};

export default ProductInput;
