import React from 'react';
import Menu from "@/components/Menu";
import Link from "next/link";

const Navbar = () => {

    return (
        <div className="h-12 p-4 flex items-center justify-between border-b border-gray-500">
            <div className="">
                <Link href={"/"}>BestRestaurant</Link>
            </div>
            <div className="">
                <Menu/>
            </div>
        </div>
    );
};

export default Navbar;