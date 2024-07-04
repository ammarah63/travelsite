import DestinationCard from "./DestinationCard";
import pic1 from "../public/assets/dest1.jpg";
import pic2 from "../public/assets/dest2.jpg";
import pic3 from "../public/assets/dest3.jpg";
const Destination = [
  {
    image: pic1,
    location: "Rome, Italy",
    cost: "$5200",
    trip: "10 days trip",
  },
  {
    image: pic2,
    location: "London UK",
    cost: "$4200",
    trip: "12 days ago",
  },
  {
    image: pic3,
    location: "Macedonia",
    cost: "$15000",
    trip: "28 days trip",
  },
];
const TopDestinations = () => {
    return (
      <>
        <div className="text-center mt-20 lg:h-screen  2xl:px-20 ">
          <p className="text-xl text-gray-600 py-5 3xl:py-10 3xl:text-3xl 4xl:text-4xl">
            Top Selling
          </p>
          <p className="text-5xl font-black 3xl:text-7xl 4xl:text-9xl heading">
            Top Destinations
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-10 3xl:my-20 gap-16 px-10">
            {Destination.map((destination) => (
              <DestinationCard
                location={destination.location}
                image={destination.image.src}
                cost={destination.cost}
                trip={destination.trip}
              />
            ))}
          </div>
        </div>
      </>
    );
}
 
export default TopDestinations;