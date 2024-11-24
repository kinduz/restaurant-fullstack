import React from 'react';
import Menu from "@/components/Menu";
import Link from "next/link";

const Navbar = () => {

    return (
        <div className="h-10 p-6 flex items-center justify-between border-b border-gray-500">
            <div className="">
                <Link className="font-medium text-3xl" href={"/"}>BestRestaurant</Link>
            </div>
            <div className="hidden ml-40 text-2xl md:flex items-center justify-start gap-6 flex-1">
                <Link className='hover:text-gray-600 transition-colors' href="/">Главная</Link>
                <Link className='hover:text-gray-600 transition-colors' href="/menu">Меню</Link>
                <Link className='hover:text-gray-600 transition-colors' href="/contacts">Контакты</Link>
            </div>
            <div className="md:hidden">
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;