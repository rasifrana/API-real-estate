import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import eana from '../assets/images/eana.jpg'

import { filterData, getFilterValues } from '../utils/filterData';



const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);

    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({ pathname: path, query: query });
    };




    return (
        <div className="bg-gray-100 my-3 flex justify-center flex-wrap">
            {filters.map((filter) => (
                <div key={filter.queryName}>
                    <select
                        name=""
                        placeholder={filter.placeholder}
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
                        className="w-40 bg-transparent border-2 border-slate-500 rounded-lg m-2 p-2"
                    >
                        <option value="">{filter.placeholder}</option>
                        {filter?.items?.map((item) => (
                            <option key={item.value} value={item.value}>{item.name}</option>
                        ))
                        }

                    </select>

                </div>
            ))}

        </div>
    )
}

export default SearchFilters;

