import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden">
        <div className="container max-w-7xl font-thin mx-auto px-5 2xl:px-0 relative z-10">
         <div className="flex justify-center items-center">
         <img src="/images/header/icon_logo.png" className="h-30 pb-6" alt="" />
         </div>
        <h1 className="text-3xl/12 text-center">The location on your business card can make a strong first impression. Situated in Sector 75, Mohali, Jubilee Clio will be an address to behold. Designed to complement seasoned tycoons in their journey, Jubilee Clio will offer unmatched infrastructural support, amenities and features in an atmosphere that is as stimulating as it is stunning.</h1>
        </div>
    </section>
  );
};

export default Categories;
