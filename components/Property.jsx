import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from "millify";
import DefaultHome from '../assets/images/homeImage.jpg'


const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => {
    return (
        <>
            <Link href={`/property/${externalID}`} passHref>
                <div className="flex flex-wrap rounded-3xl  my-4 p-4 pt-0 justify-center cursor-pointer" style={{ minHeight: '450px' }}>

                    <Image src={coverPhoto ? coverPhoto.url : DefaultHome} width={400} height={350} className=" shadow-lg rounded-t-3xl object-cover" alt="house" />

                    <div className="w-full shadow-2xl rounded-3xl -mt-12 bg-white z-10 p-3 " style={{ maxWidth: '400px' }}>
                        <div className="flex pt-2 items-center justify-between">
                            <div className="flex flex-2 items-center mb-6">
                                <div className="pr-3 text-green-400">
                                    {isVerified && <GoVerified />}
                                </div>
                                <p className="font-bold text-lg">
                                    AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                                </p>
                            </div>
                            <div className="flex-1">
                                <img src={agency?.logo?.url} alt="agency" className="w-1/3 ml-auto" />
                            </div>
                        </div>
                        <div className="flex items-center p-1 justify-between  text-blue-400">
                            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                        </div>
                        <p className="">
                            {title.length > 35 ? `${title.substring(0, 35)}...` : title}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Property;