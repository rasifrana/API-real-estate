import Head from "next/head";


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>AR Real Estate</title>
            </Head>
            <div className="max-width m-auto">
                <header>Navbar</header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        </>
    );
}

export default Layout;