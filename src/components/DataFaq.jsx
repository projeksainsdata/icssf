import React from 'react';
import FaqItem from './FaqItem';

const DataFaq = () => {
  const faqData = [
    {
      category: '[ CONFERENCE ]',
      question: 'Does the registration fee include consumption during the activity?',
      answer: 'Yes, the registration fee includes lunch and two coffee breaks.',
    },
    {
      category: '',
      question: 'Is there any special rate for staying at the conference venue (Emersia Hotel)?',
      answer: 'Yes, we offer a special corporate rate for accommodation at Emersia Hotel. Kindly contact Ms Heny (WhatsApp) to avail the special rate.',
    },
    {
      category: '[ PRESENTATION & PUBLICATION ]',
      question: 'What publisher will be handling the proceedings?',
      answer: 'We are currently negotiating with Atlantis, a part of Springer-Nature. We will promptly inform you of the final decision.',
    },
    {
      category: '',
      question: 'Will only some manuscripts be included in the proceedings?',
      answer: 'No, we encourage the inclusion of as many manuscripts as possible in the proceedings. However, please note that all manuscripts will undergo a rigorous peer-review process.',
    },
    {
      category: '',
      question: 'For presenter participants, can the presentation be done online?',
      answer: 'Yes, both in-person and online presentations are allowed. Further details on online presentation techniques will be provided later. Make sure to join the WhatsApp Group of Participants for updates.',
    },
    {
      category: '[ PAYMENT ]',
      question: 'Is there a limit to the number of participants from students?',
      answer: 'Yes, the student package has a limit of 20 participants.',
    },
    {
      category: '',
      question: 'If students participate as oral/poster presenters, will they still be charged the student package price?',
      answer: 'Yes, regardless of the type of participant (regular, oral or poster presenter), the price remains the same at IDR 300K for undergraduate student participants.',
    },
    {
      category: '',
      question: 'If three authors are in one paper, do we still pay IDR 750K for one participant/paper with three authors?',
      answer: 'Yes, the registration fee is per participant, not per author. However, please note that only one certificate will be issued, and a notation will indicate who will present at the event. Moreover, an additional fee will be charged if the paper will be included in the proceedings.',
    },
    
  ];

  return (
    <div className="py-4 max-w-5xl mx-auto mt-10">
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          category={item.category}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default DataFaq;
