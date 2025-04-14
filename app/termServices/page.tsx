import React from 'react'

const page = () => {
  return (
    <div className="p-8 bg-white shadow-2xl rounded-lg max-w-3xl mx-auto mt-30 mb-20">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2 text-center">Terms and Services</h1>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Welcome to our application. By using our services, you agree to the following terms and conditions.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        By accessing and using this application, you accept and agree to be bound by the terms and provisions of this agreement.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Changes to Terms</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        We reserve the right to modify these terms at any time. It is your responsibility to review these terms periodically.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        You agree to use the application only for lawful purposes and in a way that does not infringe the rights of others.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitation of Liability</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        We are not liable for any damages that may occur from the use of this application.
      </p>
      <p className="text-sm text-gray-500 mt-8 text-center">
        Last updated: October 2023
      </p>
    </div>
  )
}

export default page
