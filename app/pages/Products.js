// import React, { Component } from 'react';
// import { View, StyleSheet, FlatList } from 'react-native';
// import { connect } from 'react-redux';
// //Components used
// import { Product } from '../components/Product.component';
// //Actions used
// import { fetchProducts } from '../redux/actions/productAction';

// class Products extends Component {
//     static navigationOptions = ({ navigation }) => {
//       return {
//         headerTitle: "Products",
//         // headerLeft: <Logo navigation={navigation} />,
//         // headerRight: <Cart navigation={navigation} />
//       };
//     };

//     constructor(props){
//         super(props);
//     }

//     componentWillMount = () =>{
//         this.props.fetchProducts();
//     };

//     render() {
//         const { products, navigation } = this.props;
//         return(
//             <View style={styles.container}>
//                 <View style={styles.body}>
//                     <FlatList
//                         data={products}
//                         renderItem={({ item }) => (
//                             <Product
//                             item={item}
//                             product={item}
//                             />
//                         )}
//                         keyExtractor={item => item.id}
//                         ItemSeparatorComponent={() => (
//                             <View style={{ height: 0.5, backgroundColor: "#34495e90" }}/>
//                         )}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1
//     },
//     body: {
//       flex: 1,
//       justifyContent: "center"
//     }
//   });

//   const mapStateToProps = state => ({
//     products: state.items
//   });
//   const mapDispatchToProps = (dispatch) => ({
//     //addToCart: () => { dispatch(addToCart())},
//     fetchProducts: () => { dispatch(fetchProducts())}
//   })

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     { fetchProducts }
//   )(Products);
import React, { Component } from 'react';
import {View, Text} from 'react-native';
 import Cart from '../components/Cart.component';
 import Logo from '../components/Logo.component';

export default class Products extends Component{
  static navigationOptions = ({ navigation }) => {
          return {
            headerTitle: "Products",
            headerLeft: <Logo navigation={navigation} />,
            headerRight: <Cart navigation={navigation} />

          };
        };
    render() {
      
        return(
            <Text>Welcome to Product Page</Text>
        )
    }
}