import Link from "next/link";
import logo from '../assets/images/logo.png'
import Image from "next/image";
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai';



const Navbar = () => {
    const [toggle, setToggle] = useState(false);




    return (
        <div className="flex justify-between items-center px-6 sm:pr-0 bg-slate-800 text-white">
            <div className="logo ml-4 flex-1 flex justify-start items-center">
                {/* <Link href="/" className="p-4 rounded-md"> */}
                <Image src={logo} width={50} height={50} />
                {/* </Link> */}

            </div>
            <div className="menu hidden md:flex items-center text-lg">
                <div className="item  mx-3">
                    <Link href="/" passHref className="p-4 rounded-md">Home</Link>
                </div>
                <div className="item  mx-3">
                    <Link href="/search?purpose=for-sale" passHref className="p-4 rounded-md">Buy Home</Link>
                </div>
                <div className="item  mx-3">
                    <Link href="/search?purpose=for-rent" passHref className="p-4 rounded-md">For Rent</Link>
                </div>
                <div className="item rounded-l-lg rounded-b-lg ml-3 p-4 bg-orange-600">
                    <Link href="/search" passHref className="p-4 rounded-md">Search Property</Link>
                </div>
            </div>
            <div>
                {toggle ? <AiOutlineClose className='cursor-pointer md:hidden' onClick={() => setToggle(false)} /> :

                    <HiMenuAlt4 className='cursor-pointer md:hidden ' onClick={() => setToggle(true)} />

                }
                {toggle && (
                    <ul className=' fixed top-0 -right-2 p-4 text-white w-[70vw]  shadow-2xl md:hidden list-none
                    flex flex-col justify-start items-center rounded-md animate-slide-in bg-slate-700 z-50'>
                        <li className='text-xl  my-3 self-end pr-4'>
                            <AiOutlineClose onClick={() => setToggle(false)} />
                        </li>
                        <li className="mb-3 border-b-2">
                            <Link href="/" passHref className="p-4 rounded-md">Home</Link>
                        </li>
                        <li className="mb-3 border-b-2">
                            <Link href="/search?purpose=for-sale" passHref className="p-4 rounded-md">Buy Home</Link>
                        </li>
                        <li className="mb-3 border-b-2">
                            <Link href="/search?purpose=for-rent" passHref className="p-4 rounded-md">For Rent</Link>
                        </li>
                        <li className="item rounded-l-lg rounded-b-lg  p-2 bg-orange-600">
                            <Link href="/search" passHref className="p-4 rounded-md">Search Property</Link>
                        </li>
                    </ul>
                )}
            </div>

        </div>
    );
}

export default Navbar;