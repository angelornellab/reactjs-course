import {Component} from 'react';
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    products: [
      {
        name: 'Tomatoes',
        price: 1500,
        img: '/products/tomatoes.jpg',
      },
      {
        name: 'Peas',
        price: 1500,
        img: '/products/peas.jpg',
      },
      {
        name: 'Lettuce',
        price: 1500,
        img: '/products/lettuce.jpg',
      },
    ],
    cart: [],
    isCartVisible: false,
  };

  addToCart = (product) => {
    const {cart} = this.state;

    if(cart.find(e => e.name === product.name)) {
      const newCart = cart.map(
        e => e.name === product.name ?
        ({...e, count: e.count + 1}) :
        e
      );

      return this.setState({cart: newCart});
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        count: 1,
      })
    });
  };

  showCart = () => {
    if(!this.state.cart.length) {
      return; 
    }

    this.setState({isCartVisible: !this.state.isCartVisible});
  };

  render() {
    const {isCartVisible} = this.state;

    return (
      <div>
        <Navbar 
          cart={this.state.cart} 
          isCartVisible={isCartVisible} 
          showCart={this.showCart}
        />
        <Layout>
          <Title />
          <Products 
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
