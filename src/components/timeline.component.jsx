import React from 'react';

const Timeline = () => {
  const events = [
    {
      month: "August 4, 2024",
      description: "Abstract Submission Deadline",
    },
    {
      month: "August 9, 2024",
      description: "Abstract Acceptance Notification",
    },
    {
      month: "August 31, 2024",
      description: "Full Paper Submission Deadline",
    },
    {
      month: "September 20, 2024",
      description: "Full Paper Final Submission Deadline",
    },
    {
        month: "September 24, 2024",
        description: "Presentation File/Video/Poster Submisson Deadline",
    },
    {
    month: "September 26, 2024",
    description: "Seminar Events",
    },
  ];

  return (
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-blue font-bold text-center mb-8">
            <i className='fi fi-rr-calendar-clock text-3xl mr-2'></i>Important Dates</h2>
        <div className="relative">
          <div className="border-l-4 border-blue absolute h-full left-1/2 transform -translate-x-1/2"></div>
          {events.map((event, index) => (
            <div key={index} className="mb-8 flex justify-between items-center w-full">
              <div className={`w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-2'} `}>
                <div className="bg-green-orange p-4 rounded-lg shadow-md">
                  <h1 className="text-xl text-light-green font-bold mb-2">{event.month}</h1>
                  <p>{event.description}</p>
                </div>
              </div>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full left-1/2 transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Timeline;
