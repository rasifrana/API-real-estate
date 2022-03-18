import Link from "next/link"
import Image from "next/image"
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Property from "../components/Property";

const Banner = ({ purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText }) => {
  return (
    <div className="flex flex-wrap justify-center items-center m-10">
      <Image src={imageUrl} width={500} height={300} alt='banner' />
      <div className="p-5 ">
        <p className=" text-gray-500 text-sm font-normal">{purpose}</p>
        <p className="text-3xl font-bold">{title1}<br />{title2}</p>
        <p className="text-gray-700 text-lg font-normal py-3">{desc1}<br />{desc2}</p>
        <button className="text-xl bg-blue-300 text-white">
          <Link href={linkName}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
}



export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  return (
    <div>
      <Banner
        purpose='Rent A Home'
        title1="Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <div className="flex flex-wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      <Banner
        purpose='Buy A Home'
        title1="Find, Buy and Own"
        title2="Your Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"

      />
      <div className="flex flex-wrap">
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