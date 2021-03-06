import { motion } from "framer-motion";


const Landing = () => {

    return (
        <section className="bg-slate-700 text-white" style={{ borderBottomLeftRadius: '200px' }}>
            <div className="flex flex-col md:flex-row h-full " style={{ minHeight: '600px' }}>
                <div className="content flex-1 flex justify-center items-center ">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 5 }} className=" p-16 text-center sm:text-left box-border">
                        <h3 className="text-lg mb-2 border-b-2 inline-block border-orange-500">My Properties</h3>
                        <h1 className=" text-4xl sm:text-5xl my-10">Welcome to your next <br />Amazing house</h1>
                        <p className="mb-7 sm:text-2xl">Search 1000s of houses, apartments and properties for sale or to rent - from all leading estate agents.</p>
                    </motion.div>

                </div>


                <div className="flex-1 h-100" >
                    <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2665&q=80" alt="" />
                </div>
            </div>
        </section>

    );
}

export default Landing;