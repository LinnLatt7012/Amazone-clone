import Image from 'next/image'
import React from 'react'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter} from "next/router"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
function Header() {
    const items = useSelector(selectItems);
    const {data:session} = useSession();
    const router = useRouter()
    
    return (
        <header >
           {/* Top nav */}
            <div className=" bg-amazon_blue">
                {/* image */}
                <div className='container mx-auto flex items-center  p-1 flex-grow py-2 '>
                    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                        <Image 
                            onClick={()=> router.push('/')}
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
                        
                        <div className="ml-2 link" onClick={session? signOut : signIn}>
                            <p> {session? `Hello ${session.user.name}` : "Sign In"} </p>
                            <p className="font-extrabold md:text-sm"> Account & Lists</p>
                        </div> 
                        
                        {session&&(<div className="link" onClick={()=> router.push('/orders')}>
                            <p> Returns </p>
                            <p className="font-extrabold md:text-sm"> & Orders</p>
                        </div>) } 
                       {session&&<div className="relative link item-center flex items-center "
                        onClick={()=>router.push('/checkout')}
                        >
                            { items!=0? <span className="absolute top-0 right-0 bg-yellow-400 md:right-10 h-4 w-4 rounded-full 
                            text-center text-black font-bold" > {items.length}</span>:null}
                            <ShoppingCartIcon className="h-10" /> 
                            <p className="font-extrabold hidden md:inline md:text-sm mt-2">Basket</p>
                        </div> }   
                    </div>

                </div>
                    
                {/* Bottom nav */}
                <div className=" bg-amazon_blue-light text-white text-sm">
                    <div className='container mx-auto flex items-center space-x-3'>
                        <p className="link flex items-center">
                            <MenuIcon className="h-6 mx-2" />
                            All
                        </p>
                        <p className="link"> Prime Video</p>
                        <p className="link"> Amazon Bussiness</p>
                        <p className="link"> Today's Deals</p>
                        <p className="link hidden lg:inline">Electionics</p>
                        <p className="link hidden lg:inline">Food & Grocery</p>
                        <p className="link hidden lg:inline">Prime</p>
                        <p className="link hidden lg:inline">Buy Again</p>
                        <p className="link hidden lg:inline">Shopper Toolkit</p>
                        <p className="link hidden lg:inline">Health & Personal Care</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
