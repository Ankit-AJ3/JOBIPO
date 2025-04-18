import React from 'react';

const AboutPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-xl p-6 flex flex-col justify-center text-center 
                      md:aspect-square md:overflow-y-auto transition-all duration-500 hover:md:scale-[1.02]">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-5">About Us</h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Welcome to <strong>Jobipo</strong>, a modern job discovery and earning platform brought to you by <strong>Adshrtech Media Private Limited</strong>. At Jobipo, we’re on a mission to make employment more accessible, reliable, and rewarding for millions of job seekers and businesses across India.
          <br /><br />
          In a world full of uncertainty, we aim to be the bridge that connects talent with opportunity — across sectors, cities, and skill levels. Whether you're looking for your first job, a better one, or a way to earn through referrals, Jobipo is designed to support your journey.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
