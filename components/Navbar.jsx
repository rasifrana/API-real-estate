import Link from "next/link";



const Navbar = () => {
    return (
        <div className="flex justify-between items-center  pl-6 bg-slate-800 text-white">
            <div className="logo">
                LOGO
            </div>
            <div className="menu flex items-center text-lg">
                <div className="item  mx-3">
                    <Link href="/" passHref className="p-4 rounded-md">Home</Link>
                </div>

                <div className="item  mx-3">
                    <Link href="/search?purpose=for-sale" passHref className="p-4 rounded-md">Buy Home</Link>
                </div>
                <div className="item  mx-3">
                    <Link href="/search?purpose=for-rent" passHref className="p-4 rounded-md">For Rent</Link>
                </div>
                <div className="item rounded-l-lg rounded-b-lg ml-3 p-8 bg-orange-600">
                    <Link href="/search" passHref className="p-4 rounded-md">Search Property</Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;