import Image from 'next/image'
import React from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Resume Tips for Job Seekers in 2025',
    description: 'Craft a resume that gets noticed. Our expert tips help you stand out from the competition.',
    date: 'April 15, 2025',
    author: 'Team Jobipo',
    image: '/comming-soon.png'
  },
  {
    id: 2,
    title: 'How to Ace Your Next Job Interview',
    description: 'From virtual interviews to follow-ups, we break down everything you need to impress recruiters.',
    date: 'April 10, 2025',
    author: 'Team Jobipo',
    image: '/comming-soon.png'
  },
  {
    id: 3,
    title: 'Best Career Paths for Fresh Graduates',
    description: 'Just graduated? Explore the hottest industries and roles hiring in 2025.',
    date: 'April 5, 2025',
    author: 'Team Jobipo',
    image: '/comming-soon.png'
  },
]

const BlogPage = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">JOBIPO Blog</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Your guide to job searching, career growth, resume building, and interview success.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
          >
            <div className="w-full h-48 relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-700 transition duration-200">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="text-sm text-gray-400">{post.date} • {post.author}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default BlogPage
