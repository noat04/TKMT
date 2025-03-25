import { createContext, useContext, useState, useEffect } from "react";
//1. Create a context
const CartContext = createContext();
//2. Create a provider
export const CartProvider = ({ children }) => {
    //3. Use state to store data
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });
    //4. Use effect to update local storage
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    //5. Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    }
    //6. Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (id) => {
        setCart((prevCart) => {
            //Sao chép giỏ hàng cũ
            const newCart = prevCart.map((item) => ({ ...item }));
            //Lọc ra sản phẩm cần xóa
            const index = newCart.findIndex((item) => item.id === id);
            if (index >= 0) {
                newCart.splice(index, 1);
            }
            return newCart;
        });
    }
    //7.Tổng số lượng sản phẩm
    const totalItems = cart.length;
    //8. Tổng tiền
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    //9. Tạo context value
    const contextValue = { cart, addToCart, removeFromCart, totalItems, totalAmount };
    //10. Return provider
    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
//11. Custom hook
export const useCart = () => {
    return useContext(CartContext);
}