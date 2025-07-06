import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="container max-w-7xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="flex justify-center items-center mb-8">
          <div className="w-24 h-24 relative">
            <Image
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Jubilee Clio Logo"
              fill
              className="object-contain rounded-full"
              unoptimized={true}
            />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-dark dark:text-white mb-8">
            The location on your business card can make a strong first impression. Situated in Sector 75, Mohali, 
            <span className="text-primary font-medium"> Jubilee Clio</span> will be an address to behold.
          </h2>
          
          <p className="text-lg md:text-xl font-light text-dark/70 dark:text-white/70 leading-relaxed">
            Designed to complement seasoned tycoons in their journey, Jubilee Clio will offer unmatched infrastructural 
            support, amenities and features in an atmosphere that is as stimulating as it is stunning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white dark:bg-dark shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon icon="ph:buildings" className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark dark:text-white">Premium Location</h3>
            <p className="text-dark/60 dark:text-white/60">Strategically located in Sector 75, Mohali for maximum visibility and accessibility</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white dark:bg-dark shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon icon="ph:briefcase" className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark dark:text-white">Business Excellence</h3>
            <p className="text-dark/60 dark:text-white/60">Designed for seasoned professionals and growing businesses</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white dark:bg-dark shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon icon="ph:star" className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark dark:text-white">Unmatched Amenities</h3>
            <p className="text-dark/60 dark:text-white/60">World-class infrastructure and premium facilities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;