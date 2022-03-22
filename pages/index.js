import Link from "next/link"
import Image from "next/image"
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";
import Landing from '../components/Landing'
import Features from "../components/Features";

const Banner = ({ purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => {
  return (
    <div className=" px-4 py-20 bg-slate-700 w-4/5 rounded-r-3xl mb-12 text-white">
      <div className="flex  justify-start items-center m-10">
        <div className="hidden sm:block">
          <Image src={imageUrl} width={450} height={300} alt='banner' className="rounded-2xl" />

        </div>

        <div className="p-5 ">
          <p className="  text-5xl font-bold">{purpose}</p>
          <p className="text-3xl font-normal mt-4">{title1}</p>
          <p className="text-3xl font-normal mb-4">{title2}</p>
          <p className=" text-lg font-normal py-3">{desc1}<br />{desc2}</p>
          <button className="text-xl p-4 bg-orange-500 mt-3 rounded-br-3xl rounded-tl-3xl text-white">
            <Link href={linkName}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}



export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  return (
    <div>
      <Landing />
      <Features />
      <Banner
        purpose='Properties For Rent'
        title1="Rental Homes "
        title2="For Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 p-4 gap-2 mx-auto" style={{ maxWidth: '1200px' }}>
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>


      <Banner
        purpose='Properties For Sale'
        title1="Find, Buy and Own"
        title2="Your Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"

      />
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 p-4 gap-2 mx-auto" style={{ maxWidth: '1200px' }}>
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const propertForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertForSale?.hits,
      propertiesForRent: propertForRent?.hits
    }
  }
}