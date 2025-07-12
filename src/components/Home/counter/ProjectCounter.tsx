'use client';

import CountUp from 'react-countup';

const stats = [
  {
    value: 1.98,
    suffix: '',
    title: 'Acres Area of Project',
  },
  {
    value: 10,
    suffix: '',
    title: 'Floors- Ground: Retail Spaces |1st-9th Floor: Office Spaces',
  },
  {
    value: 2.55,
    suffix: '',
    title: 'Lac Sq. Ft. Commercial Space',
  },
  {
    value: 3,
    suffix: '',
    title: 'Level Basement: Parking of 370+ Cars',
  },
  {
    value: 350,
    suffix: '',
    title: 'Ft. Wide Frontage with Superb Visibility',
  },
];

const ProjectCounter = () => {
  return (
    <div className="dark:bg-black -bottom-0 py-12 z-10 bg-white px-8 md:px-16   text-black dark:text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 px-4">
            <div className="text-6xl font-light text-primary">
              <CountUp end={item.value} duration={2} decimals={item.value % 1 !== 0 ? 2 : 0} />
              <span>{item.suffix}</span>
            </div>
            {/* Text with border */}
            <div className={`py-2 ${index !== stats.length - 1 ? 'border-r-1 px-4 h-20' : ''}`}>
              <p className="text-lg font-thin opacity-70">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCounter;
