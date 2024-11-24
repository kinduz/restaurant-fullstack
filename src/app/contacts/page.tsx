import React from 'react';
import { BsTelegram } from 'react-icons/bs';

const ContactsPage = () => {
    return (
        <a href='https://t.me/egorrr_shv' target='_blank' className='flex justify-center h-[calc(100vh-10rem)] md:h-[calc(100vh-12.5rem)] items-center gap-2'>
            <BsTelegram fontSize={40}/>
            <span className='font-bold text-2xl'>tg: @egorrr_shv</span>
        </a>
    );
};

export default ContactsPage;