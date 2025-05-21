import React from 'react';

function TimelineItem({ title, subtitle, description, date, isLast }) {
  return (
    <div className="flex items-center w-full my-6">
      <div className="flex flex-col items-center mr-4">
        <div className="w-4 h-4 rounded-full bg-[#3498DB] z-10"></div>
        {!isLast && <div className="w-px h-full bg-gray-600"></div>}
      </div>
      <div className="flex-grow p-4 rounded-md bg-[#1E1E1E] shadow-md">
        <h3 className="text-lg font-semibold text-[#E0E0E0]}">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{subtitle} - {date}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          date={item.date}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}

export default Timeline; 