"use client";
// components/JobExplorer.tsx
import React from 'react';

interface JobButtonProps {
  label: string;
  onClick?: () => void;
}

const JobButton: React.FC<JobButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
  >
    {label}
  </button>
);

const searchJobCity: React.FC = () => {
  const cities = [
    'New York',
    'San Francisco',
    'Chicago',
    'Austin',
    'Seattle',
    'Boston',
  ];

  const qualifications = [
    'High School',
    "Bachelor's Degree",
    "Master's Degree",
    'PhD',
    'Certification',
    'No Degree Required',
  ];

  const handleButtonClick = (value: string) => {
    console.log(`Clicked: ${value}`);
    // Add your logic here (e.g., redirect, fetch jobs, etc.)
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Explore Jobs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* City-Wise Jobs */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            City-Wise Jobs
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((city) => (
              <JobButton
                key={city}
                label={city}
                onClick={() => handleButtonClick(city)}
              />
            ))}
          </div>
        </div>

        {/* Qualification-Wise Jobs */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Qualification-Wise Jobs
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {qualifications.map((qual) => (
              <JobButton
                key={qual}
                label={qual}
                onClick={() => handleButtonClick(qual)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchJobCity;