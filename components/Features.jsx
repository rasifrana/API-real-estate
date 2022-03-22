import { AiOutlineHome } from 'react-icons/ai';


const Features = () => {
    return (
        <section className="px-6 py-32 border-b-2">
            <div className="flex flex-col md:w-1/2 mx-auto justify-center items-center">
                <div className="text-3xl text-orange-500">
                    <AiOutlineHome fontSize={50} />
                </div>
                <h2 className=" text-3xl text-center md:w-3/4 my-6">
                    Located in the middle of a beautiful landscape our property is waiting for you and your family to stay and enjoy a relaxing experience.
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-24" style={{ minHeight: '450px' }}>
                <div className="flex flex-col justify-center items-start text-3xl">
                    <p>
                        Discover our property
                        where you’ll find amazing amenities
                    </p>
                    <div className="w-1/4 bg-orange-500 h-2 mt-6"></div>
                </div>
                <div className=" rounded-3xl overflow-hidden relative">
                    <img className="w-full object-cover h-full" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                    <div className=" absolute right-0 bottom-0 md:p-6 p-4 rounded-tl-3xl text-white bg-orange-500 md:text-xl">
                        Stunning Bedrooms
                    </div>
                </div>
                <div className=" rounded-3xl overflow-hidden relative">
                    <img className="w-full object-cover h-full" src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
                    <div className=" absolute right-0 bottom-0 p-6 rounded-tl-3xl text-white bg-orange-500 text-xl">
                        Luxurious Kitchen
                    </div>
                </div>
                <div className=" rounded-3xl overflow-hidden relative">
                    <img className="w-full object-cover h-full" src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2367&q=80" alt="" />
                    <div className=" absolute right-0 bottom-0 p-6 rounded-tl-3xl text-white bg-orange-500 text-xl">
                        Swimming Pools
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Features;