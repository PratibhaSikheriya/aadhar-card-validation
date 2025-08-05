import React, { useState } from 'react';

const App = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [validationResult, setValidationResult] = useState(null);

  const validateAadhaar = async () => {
    // Call to Python backend for Aadhaar validation
    const response = await fetch('http://localhost:5000/validate-aadhaar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aadhaarNumber }),
    });
    const data = await response.json();
    setValidationResult(data.valid);
  };

  return (
    <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Aadhaar Card Validator</h1>
      <input
        type="text"
        placeholder="Enter Aadhaar number"
        value={aadhaarNumber}
        onChange={(e) => setAadhaarNumber(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={validateAadhaar}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Validate
      </button>

      {validationResult !== null && (
        <p className={`mt-4 text-xl ${validationResult ? 'text-green-500' : 'text-red-500'}`}>
          {validationResult ? 'Valid Aadhaar Number' : 'Invalid Aadhaar Number'}
        </p>
      )}
    </div>
  );
};

export default App;
