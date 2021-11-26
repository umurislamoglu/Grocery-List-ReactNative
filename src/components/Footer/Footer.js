import React from 'react'
import { View } from 'react-native'
import styles from "./Footer.styles"
import ProductInput from '../ProductInput/ProductInput'


const Footer = ({productData,activeBadge,setProductData,sortByBadge,}) => {
    return (
        <View style={styles.footerContainer}>
        <ProductInput
          productData={productData}
          activeBadge={activeBadge}
          setProductData={setProductData}
          sortByBadge={sortByBadge}
       
        />
      </View>
    )
}

export default Footer
