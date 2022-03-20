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
                <div className="flex flex-wrap w-96 p-5 pt-0 justify-start cursor-pointer">
                    <div>
                        <Image src={coverPhoto ? coverPhoto.url : DefaultHome} width={400} height={260} alt="house" />
                    </div>
                    <div className="w-full">
                        <div className="flex pt-2 items-center justify-between">
                            <div className="flex flex-2 items-center">
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
                        <div className="flex items-center p-1 justify-between w-3/4 text-blue-400">
                            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                        </div>
                        <p className="text-lg">
                            {title.length > 35 ? `${title.substring(0, 35)}...` : title}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Property;