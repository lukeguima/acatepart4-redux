import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Cart from '../../component/cart'

import styles from './style';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import { products } from '../../constants'

const Shop = () => {
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
                onPress={() => alert('Adicionado')}
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