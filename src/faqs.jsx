import React, { useState } from 'react';
import Questions from './faqQuestion';

export default function Faqs() {
    let [currentId, setCurrentId] = useState(Questions[0].id);
    let items = Questions.map((v, i) => {
        let itemDetails = {
            v, 
            currentId, 
            setCurrentId
        };
        return (
            <FaqItems itemDetails={itemDetails} key={i} />
        );
    });

    return (
        <div>
            <h1>Frequently Asked Questions(FAQS)</h1>
            <div className='faqouter'>
                {items}
            </div>
        </div>
    );
}

function FaqItems({ itemDetails }) {
    const { v, currentId, setCurrentId } = itemDetails; // Destructure itemDetails
    return (
        <div className='faqItems'>
            <h2 onClick={()=>setCurrentId(v.id)}>{v.question}</h2>
            <p className={currentId === v.id ? 'activeAns' : ''}>
                {v.answer}
            </p>
        </div>
    );
}
