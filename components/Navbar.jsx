import Link from "next/link";



const Navbar = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="item bg-slate-400 mx-3">
                <Link href="/" passHref className="p-4 rounded-md">Home</Link>
            </div>
            <div className="item bg-slate-400 mx-3">
                <Link href="/search" passHref className="p-4 rounded-md">Search</Link>
            </div>
            <div className="item bg-slate-400 mx-3">
                <Link href="/search?purpose=for-sale" passHref className="p-4 rounded-md">Buy Home</Link>
            </div>
            <div className="item bg-slate-400 mx-3">
                <Link href="/search?purpose=for-rent" passHref className="p-4 rounded-md">For Rent</Link>
            </div>

        </div>
    );
}

export default Navbar;