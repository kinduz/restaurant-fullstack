"use client"

import React, {useState} from 'react';
import {MdClose, MdMenu} from "react-icons/md";

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
            {!open ? <MdMenu fontSize={40}/> : <MdClose fontSize={40}/>}
        </div>
    );
};

export default Menu;