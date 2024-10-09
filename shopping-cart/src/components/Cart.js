import {Component} from 'react';
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    },
};

class Cart extends Component {
    render() {
        const {cart, isCartVisible, showCart} = this.props;
        const countProducts = cart.reduce((acc, e) => acc + e.count, 0);
        
        return (
            <div>
                <span style={styles.bubble}>
                    {
                        countProducts !== 0 ?
                        <BubbleAlert value={countProducts}/> :
                        null
                    }
                </span>
                <button 
                    onClick={showCart} 
                    style={styles.cart}
                >
                    Cart
                </button>
                {
                    isCartVisible ? 
                    <CartDetails cart={cart}/> : 
                    null
                }
            </div>
        );
    }
}

export default Cart;
