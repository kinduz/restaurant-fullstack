import React from 'react';
import { IoMdCart } from "react-icons/io";
const CartIcon = () => {
    return (
        <div className="flex items-center justify-center gap-4">
            <div className="relative flex items-center justify-center w-8 h-8 md:w-5 md:h-5">
                <IoMdCart/>
            </div>
            <span>Корзина (3)</span> 
        </div>
    );
};

export default CartIcon;