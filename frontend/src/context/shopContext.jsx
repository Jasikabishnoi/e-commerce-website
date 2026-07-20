import { createContext, useState, useEffect } from "react";
import { products } from '../assets/assets';

export const shopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    
    // Cart state: { itemId: { size: quantity } }
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : {};
    });
    
    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (itemId, size) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (!newCart[itemId]) {
                newCart[itemId] = {};
            }
            if (!newCart[itemId][size]) {
                newCart[itemId][size] = 0;
            }
            newCart[itemId][size] += 1;
            return newCart;
        });
    };

    // Remove item from cart
    const removeFromCart = (itemId, size) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] && newCart[itemId][size]) {
                newCart[itemId][size] -= 1;
                if (newCart[itemId][size] <= 0) {
                    delete newCart[itemId][size];
                    if (Object.keys(newCart[itemId]).length === 0) {
                        delete newCart[itemId];
                    }
                }
            }
            return newCart;
        });
    };

    // Get total number of items in cart
    const getCartCount = () => {
        let count = 0;
        Object.values(cartItems).forEach(sizes => {
            Object.values(sizes).forEach(qty => {
                count += qty;
            });
        });
        return count;
    };

    // Get total amount for cart
    const getTotalAmount = () => {
        let total = 0;
        Object.entries(cartItems).forEach(([itemId, sizes]) => {
            const product = products.find(p => p._id === itemId);
            if (product) {
                Object.values(sizes).forEach(qty => {
                    total += product.price * qty;
                });
            }
        });
        return total;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,
        addToCart,
        removeFromCart,
        getCartCount,
        getTotalAmount
    };

    return (
        <shopContext.Provider value={value}>
            {props.children}
        </shopContext.Provider>
    );
};

export default ShopContextProvider;
