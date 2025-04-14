"use client";
import React, { useState } from 'react';

const DeleteAccountRequest = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleDeleteRequest = () => {
    if (!mobileNumber) {
      alert('Please enter your mobile number.');
      return;
    }
    // Handle delete account request logic here
    alert(`Account deletion request submitted for mobile number: ${mobileNumber}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Delete Account Request</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter your registered mobile number to request account deletion. This action is irreversible.
        </p>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleDeleteRequest}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountRequest;