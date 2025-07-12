'use client';

import { ArrowRight, Phone, Check } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white p-8 py-18">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Positive Feedback label */}
            <div className="absolute -left-4 top-20 bg-gray-800 text-white px-4 py-2 rounded-lg transform -rotate-90 origin-left z-10">
              <span className="text-sm font-medium">Positive Feedback</span>
            </div>
            
            {/* Main image container */}
            <div className="relative mb-8">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/banner3.jpg"
                  alt="Modern living room interior"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* 95% badge */}
              <div className="absolute -top-4 -right-4 bg-sage-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">95%</span>
              </div>
            </div>

            {/* Second image container */}
            <div className="relative ml-16">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/banner2.jpg"
                  alt="Modern living room with wooden accents"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* 15+ Years badge */}
              <div className="absolute -bottom-6 -left-6 bg-sage-700 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">15+</span>
                <span className="text-xs text-center leading-tight">Years Of<br />Experience</span>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-8 -left-8 grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-sage-400 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* About Us link */}
            <div className="flex items-center text-sage-600 hover:text-sage-700 transition-colors cursor-pointer">
              <ArrowRight className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">About Us</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our passion for design,{' '}
                <span className="text-sage-600">your vision realized</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
              The location on your business card can make a strong first impression. Situated in Sector 75, Mohali, Jubilee Clio will be an address to behold. Designed to complement seasoned tycoons in their journey, Jubilee Clio will offer unmatched infrastructural support, amenities and features in an atmosphere that is as stimulating as it is stunning.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-sage-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-sage-600" />
                </div>
                <span className="text-gray-700 font-medium">creative expertise</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-sage-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-sage-600" />
                </div>
                <span className="text-gray-700 font-medium">client-centered approach</span>
              </div>
            </div>

            {/* Read More button */}
            <button className="bg-sage-600 text-white px-8 py-4 rounded-lg hover:bg-sage-700 transition-colors flex items-center space-x-2 group">
              <span className="font-medium">Read More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Contact section */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800 rounded-full p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Need Any Help?</p>
                    <p className="text-xl font-bold text-gray-900">+(1) 235 800 999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100"
                      alt="Leslie Alexander"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Leslie Alexander</p>
                    <p className="text-sm text-gray-500">Co Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}