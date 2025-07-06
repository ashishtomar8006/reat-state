'use client';

import CountUp from 'react-countup';

const stats = [
  {
    value: 1.98,
    suffix: '',
    title: 'Acres Area of Project',
    description: 'Sprawling development area'
  },
  {
    value: 10,
    suffix: '',
    title: 'Floors Available',
    description: 'Ground: Retail | 1st-9th: Office Spaces',
  },
  {
    value: 2.55,
    suffix: '',
    title: 'Lac Sq. Ft. Commercial Space',
    description: 'Premium commercial area'
  },
  {
    value: 3,
    suffix: '',
    title: 'Level Basement Parking',
    description: '370+ Car Parking Capacity',
  },
  {
    value: 350,
    suffix: '',
    title: 'Ft. Wide Frontage',
    description: 'Superb Visibility & Access',
  },
];

const ProjectCounter = () => {
  return (
    <div className="bg-white dark:bg-black py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Project Highlights
          </h2>
          <p className="text-lg text-dark/60 dark:text-white/60">
            Discover the impressive scale and features of Jubilee Clio
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-light text-primary mb-2">
                  <CountUp 
                    end={item.value} 
                    duration={2.5} 
                    decimals={item.value % 1 !== 0 ? 2 : 0} 
                  />
                  <span>{item.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-dark/60 dark:text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCounter;