import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import {
  useDispatch
} from 'react-redux';


import { 
  addNewItem 
} from '../../store/modules/cart/reducer';


import Cart from '../../component/cart'

import styles from './style';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import { products } from '../../constants'

import {
  IProduct
} from '../../types/index'


const Shop = () => {

  const dispatch = useDispatch();

  const addCartItemShop = (item: IProduct) => {
    console.log(item);
    dispatch(addNewItem(item));
  }

  return (
    <View
      style={styles.container}
    >
      <StatusBar
        backgroundColor="#CFCFCF"
        animated={true}
      />
      <Cart />
      <ScrollView>
        {products?.map(item => (
          <View
            key={item.id}
            style={styles.card}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
            <View
              style={styles.infoBox}
            >
              <Text
                style={styles.productName}
              >
                {item.name}
              </Text>
              <Text
                style={styles.brandName}
              >
                {item.brand}
              </Text>
              <Text
                style={styles.price}
              >
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(item.price)}
              </Text>
              <Pressable
                style={styles.buttonAddCart}
                onPress={() => addCartItemShop(item)}
              >
                <Text
                  style={styles.addCart}
                >Adicionar Carrinho</Text>
              </Pressable>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  )
};

export default Shop;