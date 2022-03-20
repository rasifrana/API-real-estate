import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from 'react-icons/bs'
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import notFound from '../assets/images/notfound.jpg'
import { fetchApi, baseUrl } from '../utils/fetchApi'



const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();


    return (
        <div>
            <div onClick={() => setSearchFilters((prevFilter) => !prevFilter)} className="flex cursor-pointer bg-gray-100 p-4 border-b-2 my-3 text-lg font-bold items-center justify-center">
                Search Property By Filters <BsFilter className="ml-4" />
            </div>
            {searchFilters && <SearchFilters />}
            <p>
                Properties {router.query.purpose}
            </p>
            <div className="flex flex-wrap">
                {properties.map((property) => <Property property={property} key={property.id} />)}
            </div>
            {properties.length === 0 && (
                <div className="flex flex-col justify-center items-center w-1/2 mx-auto">
                    <Image src={notFound} className="w-full" />
                    <p className="text-lg">No Result Found</p>
                </div>
            )}
        </div>
    );
}


// Search Properties Filter

export default Search;


export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
    console.log(`Data is ${data}`)
    return {
        props: {
            properties: data?.hits
        },
    };
}