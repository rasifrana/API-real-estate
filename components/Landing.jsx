


const Landing = () => {

    return (
        <section className="bg-slate-700 text-white" style={{ borderBottomLeftRadius: '200px' }}>
            <div className="flex flex-col md:flex-row h-full " style={{ minHeight: '600px' }}>
                <div className="content flex-1 flex justify-center items-center ">
                    <div className=" p-16 text-center sm:text-left box-border">
                        <h3 className="text-lg mb-2 border-b-2 inline-block border-orange-500">My Properties</h3>
                        <h1 className=" text-4xl sm:text-5xl my-10">Welcome to your next <br />amazing house</h1>
                        <p className="mb-7 sm:text-2xl">MyRental is a Webflow Template to showcase your short or long term rental properties!</p>
                    </div>

                </div>


                <div className="flex-1 h-100" >
                    <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2665&q=80" alt="" />
                </div>
            </div>
        </section>

    );
}

export default Landing;