import React from 'react'

const ErrorMessage = ({ onClose }) => {
    return (
        <div className="w-full text-white pt-3 pb-20 text-center flex items-center justify-center">
    
            <div className='bg-red-500 rounded-lg p-5'>
          <p className='font-semibold mb-3'>An Error Occurred, Try Again!</p>
          
          <button onClick={onClose} className="text-white underline">
            Close
          </button>
    
          </div>
        </div>
      );
}

export default ErrorMessage;
