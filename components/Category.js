import CategoryCard from "./CategoryCard";
import pic1 from "../public/assets/Group 48.svg";
import pic2 from "../public/assets/Group 49.svg";
import pic3 from "../public/assets/Group 50.svg";
import pic4 from "../public/assets/Group 51.svg";

const Categories = [
  {
    image: pic1,
    heading: "Calculated Weather",
    caption: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image: pic2,
    heading: "Best Flights",
    caption: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image: pic3,
    heading: "Local Events",
    caption:
      "Barton vanity itself do in it. Prefferd to men it engrossed listening.",
  },
  {
    image: pic4,
    heading: "Customization",
    caption: "We deliver outsourced aviation services for military customers",
  },
];

const Category = () => {
  return (
    <>
      <div className="lg:h-screen -mt-[70rem] md:-mt-96 3xl:-mt-[40rem] 4xl:-mt-[50rem] ">
        <div className="text-center lg:h-screen ">
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-xl 3xl:text-3xl 4xl:text-4xl text-gray-600 py-5 3xl:py-10"
          >
            CATEGORY
          </p>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-5xl 3xl:text-7xl 4xl:text-9xl font-black heading"
          >
            We Offer Best Services
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            className="flex justify-center py-14 3xl:py-28"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
              {Categories.map((categories) => (
                <CategoryCard
                  key={categories.heading}
                  image={categories.image}
                  heading={categories.heading}
                  caption={categories.caption}
                />
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
