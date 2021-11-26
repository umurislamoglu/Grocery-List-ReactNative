import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, ScrollView , LogBox} from 'react-native';
import styles from './App.styles';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const [activeBadge, setActiveBadge] = useState('');
  const [productData, setProductData] = useState([]);
  const [renderFlag, setRenderFlag] = useState(false);

  const sortByBadge = (data, keyword) => {
    let sorted;
    switch (keyword) {
      case 'Artan Fiyat':
        sorted = data.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      case 'Azalan Fiyat':
        sorted = data.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case 'Tarih':
        sorted = data.sort((a, b) => {
          return b.date - a.date;
        });
        break;
      default:
        sorted = data.sort((a, b) => {
          return a.date - b.date;
        });
    }
    setRenderFlag(prevState => !prevState);
    return sorted;
  };

  
  //VirtualizeList error'u için yapıldı. ScrollView içinde FlatList kullanıldığı için bu hata alındı.
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);



  useEffect(() => {
    let sortedProducts = sortByBadge(productData, activeBadge);
    setProductData(sortedProducts);
  }, [activeBadge]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView style={styles.appContainer} nestedScrollEnabled={true}>
        <Header
          activeBadge={activeBadge}
          setActiveBadge={setActiveBadge}
        />

        <View style={styles.productContainer}>
          <ProductList
            productData={productData}
            activeBadge={activeBadge}
            renderFlag={renderFlag}
          />
        </View>
        <Footer
          productData={productData}
          activeBadge={activeBadge}
          setProductData={setProductData}
          sortByBadge={sortByBadge}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
