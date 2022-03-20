import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ScrollBar from '../../components/ImageScrollBar';



const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <div className='max-width mx-auto'>
        {photos && <ScrollBar data={photos} />}
        <div className="w-full p-6 flex justify-between items-center3`  ">
            <div className="flex pt-2 items-center">
                <div className="pr-3 text-lg bg-slate-100 text-green-800">
                    {isVerified && <GoVerified />}
                </div>
                <p className="font-bold text-lg">
                    AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                </p>
            </div>
            <div className="flex-1">
                <img src={agency?.logo?.url} alt="agency" style={{ width: "50px" }} className="ml-auto" />
            </div>
        </div>
        <div className="flex items-center p-1 justify-start w-3/4 text-blue-400">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
        <div className='mt-2'>
            <p className="text-lg uppercase font-bold">
                {title}
            </p>
            <p className=' my-3 text-gray-600'>
                {description}
            </p>
        </div>
        <div className='flex flex-wrap justify-between uppercase '>
            <div className='flex justify-between border-b-2 p-3'>
                <p>Type</p>
                <p className=' font-bold'>{type}</p>
            </div>
            <div className='flex justify-between border-b-2 p-3'>
                <p>Purpose</p>
                <p fontWeight='bold'>{purpose}</p>
            </div>
            {furnishingStatus && (
                <div className='flex justify-between border-b-2 p-3' >
                    <p>Furnishing Status</p>
                    <p fontWeight='bold'>{furnishingStatus}</p>
                </div>
            )}
        </div>

        <div>
            {amenities.length && <p>Facilities:</p>}
            <div className="flex flex-wrap">
                {amenities?.map((item) => (
                    item?.amenities?.map((amenity) => (
                        <p key={amenity.text} className='font-bold text-blue-400 font-lg p-2 m-2 bg-gray-200 rounded-lg'>
                            {amenity.text}
                        </p>
                    ))
                ))}

            </div>
        </div>

    </div>
);




export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        },
    };
}

