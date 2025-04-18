import React from 'react'

const RefundPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen flex items-center justify-center">
      <div className="border border-gray-300 rounded-xl shadow-md p-6 bg-white">
        <h1 className="text-3xl font-bold text-blue-900 mb-4 mt-2">Refund Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: 14/04/2025</p>

        <p className="text-gray-700 mb-4">
          This Refund Policy governs the use of the Jobipo website and mobile application, operated by Adshrtech Media Private Limited (&quot;Jobipo&quot;). 
        </p>

        <p className="text-gray-700 mb-4">
          Our aim is to ensure customer satisfaction while maintaining transparency and fairness in all our transactions. 
          By using the Jobipo Platform, you agree to this Refund Policy along with our&nbsp;
          <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>
          &nbsp;and&nbsp;
          <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}

export default RefundPolicyPage
