import React, { useState } from 'react';
import DataFaq from './DataFaq';


const TabsInformation = () => {
  const [activeTab, setActiveTab] = useState('Faq');

  return (
    <div className="w-full px-4 sm:px-10 mx-auto mt-[100px] pb-80">
      <div className="flex flex-wrap justify-center md:justify-start md:px-[300px]">
        <button
          className={`text-[20px] rounded flex-1 bg-black-light custom-padding py-2 text-center transition-colors duration-300 ${activeTab === 'Faq' ? 'border-b bg-light-green text-white font-bold' : 'text-black'}`}
          onClick={() => setActiveTab('Faq')}>Faq 
        </button>
        <button
          className={`text-[20px] rounded flex-1 bg-black-light ml-2 py-2 custom-padding text-center transition-colors duration-300 ${activeTab === 'Flayer' ? 'border-b bg-light-green text-white font-bold' : 'text-black'}`}
          onClick={() => setActiveTab('Flayer')}>Contact Us
        </button>
      </div>
      <div className="p-4 transition-opacity duration-300 ease-in-out">
        {activeTab === 'Faq' && <FaqComponent />}
        {activeTab === 'Flayer' && <BelajarMandiriContent />}
      </div>
    </div>
  );
};

const FaqComponent = () => (
    <>
  <div className="animate-fade-in mt-[40px] text-center">
    <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
    <DataFaq/>
  </div>
  </>
);

const BelajarMandiriContent = () => (
  <div className="animate-fade-in mt-[70px] items-center text-center mx-auto md:px-[200px]">
    <div class="px-2">
      <div class="flex -mx-2 mt-10">
        <div class="w-1/3 px-2">
          <h4 className='text-2xl font-bold text-center'>Reach us through</h4>
          <div className='mt-10 text-center'>
            <div className=''>
              <i class="fi fi-rr-map-marker mr-2"></i>
              <a>GEDUNG F ITERA</a>
            </div>
            <div className='mt-7 text-center'>
              <i class="fi fi-rr-phone-call mr-2"></i>
              <a>(0721) 8030188</a>
            </div>
            <div className='mt-7'>
              <i class="fi fi-rr-envelope mr-2"></i>
              <a>ichse@itera.ac.id</a>
            </div>
          </div>
        </div>

        <div class="w-1/3 px-2"></div>

        <div class="w-1/3 px-2">
          <h4 className='text-2xl font-bold text-center'>Social Networks</h4>
          <div className='mt-10 text-center'>
            <i class="fi fi-brands-facebook mr-2"></i>
            <a href="https://www.facebook.com/itera.official/" target='_blank'>Institut Teknologi Sumatera - ITERA</a>
          </div>
          <div className='mt-7'>
          <i class="fi fi-brands-twitter mr-2"></i>
            <a href="https://x.com/ITERAOfficial" target='_blank'>Iteraofficial</a>
          </div>
          <div className='mt-7 text-center'>
            <i class="fi fi-brands-instagram mr-2"></i>
            <a href="https://www.instagram.com/iteraofficial/" target='_blank'>iteraofficial</a>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default TabsInformation;
