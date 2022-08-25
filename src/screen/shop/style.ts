import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#ededeb',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 4
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  infoBox: {
    marginLeft: 15,
    width: 200
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  brandName: {
    fontSize: 12
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonAddCart: {
    marginTop: 8,
    borderColor: '#228B22',
    borderRadius: 5,
    borderWidth: 1,
    height: 35,
    justifyContent:'center',
    flex: 1
  },
  addCart: {
    color: '#228B22',
    textAlign:'center'
  },
  removeCart: {
    color: '#000'
  },
})