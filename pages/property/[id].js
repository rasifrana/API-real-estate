import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
// import ImageScrollBar from '../../components/ImageScrollBar';



const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 5 }} className='max-width mx-auto sm:p-4 p-0'>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {photos.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className=' overflow-hidden p-1 rounded-2xl'>
                        <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" className=' object-cover' />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className='p-6'>
            <div className="w-full flex justify-between items-center">
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
            <div className="flex items-center p-1 justify-between  mt-2 sm:w-1/2">
                <div className="flex items-center justify-center">{rooms} <FaBed className="ml-3" /></div> | <div className="flex items-center justify-center">{baths} <FaBath className="ml-3" /></div> |<div className="flex items-center justify-center"> {millify(area)} sqft <BsGridFill className="ml-3" /></div>
            </div>
            <div className='mt-2'>
                <p className="text-lg uppercase font-bold">
                    {title}
                </p>
                <p className=' my-6 text-gray-600'>
                    {description}
                </p>
            </div>
            <div className='flex flex-wrap justify-between items-start uppercase '>
                <div className='flex justify-between border-b-2 p-3'>
                    <p>Type:</p>
                    <p className=' ml-3 font-bold'>{type}</p>
                </div>
                <div className='flex justify-between border-b-2 p-3'>
                    <p>Purpose</p>
                    <p className=' font-bold ml-3 '>{purpose}</p>
                </div>
                {furnishingStatus && (
                    <div className='flex justify-between border-b-2 p-3' >
                        <p className=''>Furnishing Status</p>
                        <p className=' font-bold ml-3 '>{furnishingStatus}</p>
                    </div>
                )}
            </div>

            <div className='my-5'>
                {amenities.length && <p className=' text-2xl mb-2'>Facilities:</p>}
                <div className="flex flex-wrap">
                    {amenities?.map((item) => (
                        item?.amenities?.map((amenity) => (
                            <p key={amenity.text} className='font-bold text-orange-600 font-lg p-2 m-2 bg-gray-200 rounded-lg'>
                                {amenity.text}
                            </p>
                        ))
                    ))}

                </div>
            </div>
        </div>
    </motion.div>
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

