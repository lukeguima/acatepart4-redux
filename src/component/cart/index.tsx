import {
  View,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';

import {
  useState
} from 'react';

import {
  useSelector
} from  'react-redux';

import {
  cartStateData
} from '../../store/modules/cart/reducer'

import { 
  AntDesign 
} from '@expo/vector-icons';

import styles from './style'

const Cart = () => {
  const [ showCartModal, setShowCartModal ] = useState(false)
  const cart = useSelector(cartStateData);
  
  return(
    <View
      style={styles.container}
    >
      <Modal 
        animationType='slide'
        visible={showCartModal}
        onRequestClose={ 
          () => setShowCartModal(!showCartModal)
        }
      >
        <View
          style={styles.modalBody}
        >
          <TouchableOpacity
            onPress={ () => setShowCartModal(!showCartModal)}
          >
            <AntDesign
              name="close"
              size={24}
              color="black"
            />
            <Text>Fechar</Text>
          </TouchableOpacity>

          {cart.length > 0 ? (
            <View>
            { cart.map( (item, index) => (
              <View key={index}>
                <Text>{item.name}</Text>
              </View>
            ))}
            </View>
          ) : (
            <View>
              <Text>Adicione itens ao seu carrinho</Text>
            </View>
          )}
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setShowCartModal(!showCartModal)}
      >

      <AntDesign
        name="shoppingcart"
        size={24}
        color="black"
        />
      </TouchableOpacity>
      <View
        style={styles.contentCart}
      >
        <Text
        style={styles.textContentCart}
        >
          {cart?.length}
        </Text>
      </View>
    </View>
  )
};

export default Cart;