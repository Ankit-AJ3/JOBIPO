import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <div
      className="relative min-h-screen pt-16"
      style={{
        backgroundImage: 'url("/girlimage.jpg")',
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        backgroundAttachment: 'fixed', // Optional: Adds a parallax effect
      }}
    >
      {/* Blurred Orange Overlay with Blend Effect */}
      <div
        className="absolute inset-0 bg-[#EC8854] bg-opacity-50 mix-blend-multiply"
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 mt-12">
              Connecting talent with opportunity
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Find 40,000+ Jobs, Employment & Career Opportunities
            </p>

            {/* Search Form */}
            <div className="max-w-4xl mx-auto text-gray-800">
              <div className="bg-white p-2 rounded-full shadow-lg flex items-center space-x-4 border-2 border-gray-200">
                <input
                  type="text"
                  placeholder="Enter Skills or Job Title"
                  className="flex-1 px-4 py-3 border-none rounded-full focus:ring-0 focus:outline-none"
                />
                <div className="hidden sm:block h-6 border-l border-gray-300"></div>
                <select className="flex-1 px-4 py-3 border-none rounded-full focus:ring-0 focus:outline-none text-gray-800">
                  <option value="">Select Categories</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                </select>
                <div className="hidden sm:block h-6 border-l border-gray-300"></div>
                <select className="flex-1 px-4 py-3 border-none rounded-full focus:ring-0 focus:outline-none">
                  <option value="">Select City</option>
                  <option value="new-york">New York</option>
                  <option value="london">London</option>
                  <option value="paris">Paris</option>
                  <option value="tokyo">Tokyo</option>
                </select>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Search Job
                </button>
              </div>
            </div>

            <p className="text-sm md:text-base text-white mt-4">
              Popular Searches: Designer, Web, IOS, Developer, PHP, Senior, Engineer
            </p>
          </div>
        </div>

        {/* Job Categories Section */}
        <div className="bg-[#E86B29] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {[
              { title: 'Graphic Designer', positions: 43, bgImage: '/graphicdesigner.jpg' },
              { title: 'Marketing', positions: 43, bgImage: '/marketing.jpg' },
              { title: 'Development', positions: 43, bgImage: '/developer.jpg' },
              { title: 'Human Resources', positions: 43, bgImage: '/HumanR.jpg' },
              { title: 'Finance', positions: 43, bgImage: '/finance.jpg' },
            ].map((category, index) => (
              <div
          key={index}
          className="relative bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md text-center"
          style={{
            backgroundImage: `url(${category.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
              >
          {/* Light Blue Overlay for better text visibility */}
          <div className="absolute inset-0 bg-[#4B677E] bg-opacity-30 rounded-lg mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              {category.title}
            </h3>
            <p className="text-xs sm:text-sm text-white mb-4">
              ({category.positions} Open Positions)
            </p>
            <button className="px-3 sm:px-4 py-2 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-600 transition duration-300">
              Explore Job
            </button>
          </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Employers Section */}
        <div className="py-12 bg-white">
          <h2 className="text-center text-3xl text-gray-800 mb-8">
            Here You Can See 
            <div className="text-gray-900 text-5xl flex justify-center gap-2">
              <span className='font-bold text-center'>Top</span>
              <span className='text-center'>Employers</span>
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-1/8 h-1 bg-orange-500"></div>
              <div className="w-1/8 h-1 bg-blue-900"></div>
            </div>
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              { name: 'JMD Fintech', logo: '/logos/jmd.png', jobs: 15 },
              { name: 'Facebook', logo: '/logos/fb.png', jobs: 15 },
              { name: 'Microsoft', logo: '/logos/microsoft.png', jobs: 15 },
              { name: 'Telegram', logo: '/logos/telegram.png', jobs: 15 },
              { name: "McDonald's", logo: '/logos/mcdonalds.png', jobs: 15 },
              { name: 'Threads', logo: '/logos/thread.png', jobs: 15 },
              { name: 'Pinterest', logo: '/logos/pinterest.png', jobs: 15 },
              { name: 'PicknPay', logo: '/logos/picknpay.png', jobs: 15 },
            ].map((employer, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-xl text-center border-2 border-gray-300"
              >
                <Image
                  width={60}
                  height={50}
                  src={employer.logo}
                  alt={employer.name}
                  className="mx-auto h-16 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {employer.name}
                </h3>
                <p className="text-sm text-blue-500">{employer.jobs} Jobs</p>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Jobs Section */}
        <div className="py-12 bg-white">
        <h2 className="text-center text-3xl text-gray-800 mb-8">
            Here You Can See 
            <div className="text-gray-900 text-5xl flex justify-center gap-2">
              <span className='font-bold text-center'>Popular</span>
              <span className='text-center'>Jobs</span>
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-1/8 h-1 bg-orange-500"></div>
              <div className="w-1/8 h-1 bg-blue-900"></div>
            </div>
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                company: 'Facebook Pvt. Ltd',
                logo: '/logos/fb.png',
                title: 'Web Designer / Developer',
                location: 'Mumbai',
                type: 'Full Time',
                applied: 21,
                vacancy: 40,
              },
              {
                company: 'Pinterest',
                logo: '/logos/pinterest.png',
                title: 'Web Designer / Developer',
                location: 'Mumbai',
                type: 'Part Time',
                applied: 21,
                vacancy: 40,
              },
              {
                company: 'Sony India',
                logo: '/logos/sony.png',
                title: 'Graphic Designer',
                location: 'Jaipur',
                type: 'Intern',
                applied: 21,
                vacancy: 40,
              },
              {
                company: "McDonald's",
                logo: '/logos/mcdonalds.png',
                title: 'Video Editor',
                location: 'Mumbai',
                type: 'Freelance',
                applied: 21,
                vacancy: 40,
              },
              {
                company: 'Facebook Pvt. Ltd',
                logo: '/logos/fb.png',
                title: 'Web Designer / Developer',
                location: 'Mumbai',
                type: 'Full Time',
                applied: 21,
                vacancy: 40,
              },
              {
                company: 'Pinterest',
                logo: '/logos/pinterest.png',
                title: 'Web Designer / Developer',
                location: 'Mumbai',
                type: 'Part Time',
                applied: 21,
                vacancy: 40,
              },
              {
                company: 'Sony India',
                logo: '/logos/sony.png',
                title: 'Graphic Designer',
                location: 'Jaipur',
                type: 'Intern',
                applied: 21,
                vacancy: 40,
              },
              {
                company: "McDonald's",
                logo: '/logos/mcdonalds.png',
                title: 'Video Editor',
                location: 'Mumbai',
                type: 'Freelance',
                applied: 21,
                vacancy: 40,
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-xl text-center border-2 border-gray-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    width={20}
                    height={25}
                    src={job.logo}
                    alt={job.company}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {job.company}
                    </h3>
                    <p className="text-sm text-gray-500">{job.type}</p>
                  </div>
                </div>
                <h4 className="text-base font-medium text-gray-800 mb-2">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-500 mb-4">{job.location}</p>
                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${(job.applied / job.vacancy) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{job.applied} applied</span>
                  <span>{job.vacancy} vacancy</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#3E6B90] py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        <div className='flex flex-col'>
          <span className='text-4xl font-bold text-white'>3,560</span>
          <span className='text-white mt-2'>AVAILABLE JOBS</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-4xl font-bold text-white'>8,563</span>
          <span className='text-white mt-2'>EMPLOYEES</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-4xl font-bold text-white'>6,852</span>
          <span className='text-white mt-2'>CV/RESUME</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-4xl font-bold text-white'>6,852</span>
          <span className='text-white mt-2'>CAMPAIGNS</span>
        </div>
        </div>
      </div>
    </div>
    <div className='bg-white pt-18'>
            <h2 className="text-center text-3xl text-gray-800 mb-8">
                What <span className='font-bold'>Our Candidates</span>Say 
                <div className="text-gray-900 text-xl flex justify-center gap-2">
                Discover the voices of success! Our candidates speak for 
                </div>
                <div className='text-xl'>themselves about their transformative experiences</div>
                <div className="flex justify-center mt-4">
                <div className="w-1/7 h-1 bg-orange-500"></div>
                <div className="w-1/7 h-1 bg-blue-900"></div>
                </div>
          </h2>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center items-center">
                    <Image
                        src="/happyclient.png"
                        alt="Testimonial"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-xl"
                    />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                    <p className="text-lg text-gray-700 italic">
                    &quot;The platform&apos;s commitment to user success is
                        evident. The email alerts for application status
                        updates keep you in the loop, and the intuitive design
                        makes the entire job search process a pleasure. Well
                        done&quot;
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                        <Image
                            src="/logos/man.png"
                            alt="Ashok Kumar"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <div>
                            <h4 className="text-xl font-semibold text-gray-900">Ashok Kumar</h4>
                            <p className="text-gray-600">Graphic Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#306188] py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex justify-center items-center">
                <Image
                src="/mobileapp.png"
                alt="Jobipo Mobile App"
                width={400}
                height={400}
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold text-white">
                Download The <br /> <span className=''> Jobipo Mobile App</span> 
                </h2>
                <p className="text-lg text-white">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </p>
                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-green-400 transition duration-300">
                  <Image
                    src="/logos/playstore.png"
                    alt="Google Play"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  <div className="text-left">
                    <span className="block text-xs">GET IT ON</span>
                    <span className="block text-sm font-bold">Google Play</span>
                  </div>
                  </button>
                  <button className="flex items-center px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-blue-400 transition duration-300">
                  <Image
                    src="/logos/apple.png"
                    alt="App Store"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  <div className="text-left">
                    <span className="block text-xs">Download on the</span>
                    <span className="block text-sm font-bold">App Store</span>
                  </div>
                  </button>
                </div>
              </div>
              </div>
            </div>
            <div className="bg-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
              <h2 className="text-3xl mb-4"> <span className='font-bold'>Subscribe </span>Newsletter</h2>
              <div className="max-w-lg mx-auto flex items-center border border-[#306088ee] rounded-md">
              <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 focus:outline-[#306088ee] outline-[#306088ee]"
              />
              <button className="px-6 py-3 space-x-0 bg-[#306188] text-white font-medium hover:bg-blue-600 transition duration-300">
              Subscribe
              </button>
              </div>
              </div>
            </div>
    </div>
</>
  )
}

export default HomePage
