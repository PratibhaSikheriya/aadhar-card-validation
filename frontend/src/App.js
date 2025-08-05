import React, { useState } from 'react';

const App = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  const validateAadhaar = async () => {
    // The API call remains the same
    const response = await fetch('/api/validate-aadhaar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aadhaarNumber }),
    });
    const data = await response.json();
    setValidationResult(data.valid);
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
      <img 
        src="https://i.imgur.com/VfKCeD8.png" 
        alt="Aadhaar Card Emblem" 
        className="w-24 sm:w-32 mx-auto mb-6" 
      />
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Aadhaar Validator
      </h1>
      <p className="text-gray-500 mb-8">
        Enter a 12-digit Aadhaar number to verify.
      </p>
      
      <div className="space-y-6">
        <input
          type="text"
          placeholder="XXXX XXXX XXXX"
          maxLength="12"
          value={aadhaarNumber}
          onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ''))} // Allow only digits
          className="w-full px-4 py-3 text-lg bg-gray-100 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition-shadow"
        />
        <button
          onClick={validateAadhaar}
          className="w-full px-4 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
        >
          Validate
        </button>
      </div>

      {validationResult !== null && (
        <div className={`mt-8 p-4 rounded-lg text-lg font-semibold ${validationResult ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {validationResult ? '✅ Valid Aadhaar Number' : '❌ Invalid Aadhaar Number'}
        </div>
      )}
    </div>
  );
};

export default App;