"use client";

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Profile() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && menuRef.current.contains(event.target as Node) && profileRef.current && profileRef.current.contains(event.target as Node)) {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if (open) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [open]);

    const handleProfileClick = () => {
        setOpen(!open);
    };

    return (
        <div ref={profileRef} className="Profile flex flex-col relative gap-[10px] justify-center items-center" onClick={handleProfileClick}>
            <div className="flex items-center md:gap-[10px] cursor-pointer">
                <div className="w-[35px] flex justify-center text-primary items-center overflow-hidden rounded-full h-[35px]">
                    <FaUserCircle className="object-cover w-full h-full" />
                </div>
                <div className="User hidden md:flex font-semibold text-sm flex-col">
                    <span>Dummy User</span>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="text-primary">
                    <MdKeyboardArrowDown size={"1.5rem"} />
                </div>
            </div>
            {open && (
                <div
                    ref={menuRef}
                    className="bg-white absolute top-[60px] p-[10px] w-[150px] sm:w-[200px] shadow-lg"
                >
                    <ul>
                        <li className='hover:bg-primary font-semibold text-sm hover:text-white p-2'><Link href="/withdraw">Withdraw</Link></li>
                        <li className='hover:bg-primary font-semibold text-sm hover:text-white p-2'><Link href="/deposit">Deposit</Link></li>
                        <li className='hover:bg-primary font-semibold text-sm hover:text-white p-2'><Link href="/deposit">Edit profile</Link></li>
                        <li className='hover:bg-primary font-semibold text-sm hover:text-white p-2'><Link href="/logout">Logout</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}