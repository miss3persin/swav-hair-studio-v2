'use client'

// success message component

import React from 'react'

const SuccessMessage = ({ onClose }) => {
  return (
    <div className="w-full text-white pt-3 pb-20 px-6 text-center flex items-center justify-center">

        <div className='bg-green-500 rounded-lg p-5'>
      <p className='font-semibold mb-3'>Message has been Sent Successfully!</p>
      
      <button onClick={onClose} className="text-white underline">
        Close
      </button>

      </div>
    </div>
  );
};

export default SuccessMessage;
