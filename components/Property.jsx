import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from "millify";

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => {
    return (
        <>
            <Link href={`/property/${externalId}`} passHref>
                <div className="flex flex-wrap w-96 p-5 pt-0 justify-start cursor-pointer">
                    <div>
                        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house" />
                    </div>

                </div>
            </Link>

        </>
    );
}

export default Property;