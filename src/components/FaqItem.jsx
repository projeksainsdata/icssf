import React, { useState, useRef, useEffect } from 'react';

const FaqItem = ({ category, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 py-4 max-w-full mx-auto">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
            <div className='mt-4'>
                <span className="text-md font-bold text-grey mt-6">{category}</span>
            </div>
          <span className="block text-xl font-bold mt-4">{question}</span>
        </div>
        <span className="font-bold text-2xl transition-transform duration-300">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out`}>
        <p className="mt-7 text-lg text-grey text-justify">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
