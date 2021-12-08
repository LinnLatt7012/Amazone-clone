import Image from 'next/image'
import React from 'react'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

function Header() {
    return (
        <header >
           {/* Top nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow
            py-2 ">
                {/* image */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        src='https://links.papareact.com/f90'
                    />
                </div>
                {/* search */}
                <div className="bg-yellow-400 hover:bg-yellow-500 hidden items-center h-10 md:flex rounded-md flex-grow cursor-pointer mx-2 ">
                     <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                     <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap">
                    <div className="link">
                        <p> Hello Linn Latt</p>
                        <p className="font-extrabold md:text-sm"> Account & Lists</p>
                    </div>    
                    <div className="link">
                        <p> Returns </p>
                        <p className="font-extrabold md:text-sm"> & Orders</p>
                    </div>    
                    <div className="relative link item-center flex items-center ">
                        <span className="absolute top-0 right-0 bg-yellow-400 md:right-10 h-4 w-4 rounded-full 
                        text-center text-black font-bold" >4</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="font-extrabold hidden md:inline md:text-sm mt-2">Basket</p>
                    </div>    
                </div>

            </div>
            {/* Bottom nav */}
            <div>
                
            </div>
        </header>
    )
}

export default Header
