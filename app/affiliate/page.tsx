import React from 'react'

const Partnership = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Partner With Jobipo</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join our Partnership Program and earn commissions by promoting our job services. Whether you&apos;re an individual or a company, we make it easy to grow together.
        </p>
      </section>

      {/* Who Can Join */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">Who Can Join?</h2>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">👩‍💻 Individuals</h3>
            <p className="text-gray-600">Bloggers, influencers, freelancers, or professionals—anyone passionate about job and career services.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">🏢 Companies</h3>
            <p className="text-gray-600">Recruitment agencies, career platforms, training institutes, or any business with relevant audiences.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-lg hover:shadow-md transition">
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
            <p className="text-gray-600">Register for our free partnership program in just a few clicks.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-md transition">
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-semibold text-lg mb-2">Promote</h3>
            <p className="text-gray-600">Share your unique referral link with your audience via web, email, or social media.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-md transition">
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-semibold text-lg mb-2">Earn</h3>
            <p className="text-gray-600">Get paid commissions for every successful referral or customer action.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">Why Partner with Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2">💼 Trusted Platform</h3>
            <p className="text-gray-700">Be part of a reliable and growing job marketplace trusted by thousands.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2">📊 Transparent Reporting</h3>
            <p className="text-gray-700">Track clicks, sign-ups, and earnings in real-time via your partner dashboard.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2">🎉 Marketing Tools</h3>
            <p className="text-gray-700">Get access to banners, email templates, and marketing resources.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold mb-2">💸 Regular Payouts</h3>
            <p className="text-gray-700">Earn recurring revenue with timely payouts directly to your account.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-900 text-white rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Become a Partner Today</h2>
        <p className="mb-6 text-lg">Join now and start earning by helping others discover Jobipo.</p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
          Apply as a Partner
        </button>
      </section>
    </div>
  )
}

export default Partnership
