
import { useContext } from 'react';
import Image from 'next/image';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';



const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    console.log(scrollPrev)


    return (
        <div className='flex justify-center items-center mr-1'>
            {/* <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
                d={['none', 'none', 'none', 'block']}
            /> */}
            <FaArrowAltCircleLeft onClick={() => scrollPrev}
                fontSize='20px' d={['none', 'none', 'none', 'block']} />
        </div>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <div className='flex justify-center items-center mr-1'>
            {/* <Icon
            as={FaArrowAltCircleLeft}
            onClick={() => scrollPrev()}
            fontSize='2xl'
            cursor='pointer'
            d={['none', 'none', 'none', 'block']}
        /> */}
            <FaArrowAltCircleRight onClick={() => scrollNext}
                fontSize='2xl' d={['none', 'none', 'none', 'block']} />
        </div>
    );
}

export default function ImageSrollbar({ data }) {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
            {data.map((item) => (
                <div key={item.id} className=' overflow-hidden p-1' style={{ width: '910px' }}>
                    <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" className=' object-cover' />
                </div>
            ))}
        </ScrollMenu>
    );
}