"use client"

import React, {useState} from 'react';
import {MdClose, MdMenu} from "react-icons/md";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";

type TMenuLink = {
    id: number;
    title: string;
    url: string;
}

const links: TMenuLink[] = [
    {
        id: 1,
        title: "Главная",
        url: "/"
    },
    {
        id: 2,
        title: "Меню",
        url: "/menu"
    },
    {
        id: 3,
        title: "О нас",
        url: "/contacts"
    }
]

const Menu = () => {
    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false)
    }

    const user = false;

    console.log(open);
    

    return (
        <>
            <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                {!open ? <MdMenu fontSize={40}/> : <MdClose fontSize={40}/>}
            </div>
            {open &&
                <div className={`z-10 bg-black text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)]
                    flex flex-col items-center justify-center gap-8 transform transition-transform duration-500 ease-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <>
                        {links.map((link, index) => (
                             <Link 
                                style={{
                                    animation: `${open ? `fadeIn` : `fadeOut`} 0.6s ease-out ${(index + 1) * 0.2}s forwards`,
                                    opacity: 0,
                                }} 
                                onClick={handleCloseMenu} 
                                className="hover:text-gray-400 text-2xl transition-colors" 
                                href={link.url} 
                                key={link.id}
                              >
                                {link.title}
                              </Link>
                        ))}
                        <Link className='text-2xl' style={{ animation: `${open ? `fadeIn` : `fadeOut`} 0.6s ease-out ${links.length * 0.2}s forwards`, opacity: 0 }} href={user ? "/orders" : "/login"}>{user ? "Заказы" : "Авторизация"}</Link>
                        <Link className='text-2xl' style={{ animation: `${open ? `fadeIn` : `fadeOut`} 0.6s ease-out ${(links.length + 1) * 0.2}s forwards`, opacity: 0 }} onClick={handleCloseMenu} href="/cart">
                            <CartIcon />
                        </Link>
                    </>
                </div>
            }
        </>
)
    ;
};

export default Menu;