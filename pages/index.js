import Image from "next/image";
import { Inter } from "next/font/google";
import {
  BookTrip,
  Category,
  Subscribe,
  Testimonials,
  TopDestinations,
  HomeSection,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomeSection />
      <Category />
      <TopDestinations />
      <BookTrip />
      <Testimonials />
      <Subscribe />
    </>
  );
}
