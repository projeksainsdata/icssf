import React, { useState } from 'react';
import DataFaq from './DataFaq';


const TabsInformation = () => {
  const [activeTab, setActiveTab] = useState('Faq');

  return (
    <div className="w-full px-4 sm:px-10 mx-auto mt-[100px] pb-80">
      <div className="flex flex-wrap justify-center md:justify-start md:px-[300px]">
        <button
          className={`text-[20px] flex-1 py-2 text-center transition-colors duration-300 ${activeTab === 'Faq' ? 'border-b font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Faq')}>Faq 
        </button>
        <button
          className={`text-[20px] flex-1 py-2 text-center transition-colors duration-300 ${activeTab === 'Flayer' ? 'border-b font-bold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Flayer')}>Flayer
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
  <div className="animate-fade-in mt-20 text-center">
    <h2 className="text-xl font-bold mb-4">Flayer</h2>
    <p>Isi konten untuk Flayer di sini. Isi konten untuk Flayer di sini. Isi konten untuk Flayer di sini.Isi konten untuk Flayer di sini. Isi konten untuk Flayer di sini. minati dengan kecepatan mereka sendiri.</p>
  </div>
);

export default TabsInformation;
