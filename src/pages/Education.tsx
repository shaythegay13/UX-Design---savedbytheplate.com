import React from 'react';
import { BookOpen, Play, Download, Clock } from 'lucide-react';
export function Education() {
  // Mock data for educational resources
  const articles = [{
    id: 1,
    title: 'Container Gardening for NYC Apartments',
    excerpt: 'Learn how to grow vegetables and herbs in limited space on balconies, fire escapes, and window sills.',
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Urban Gardening',
    readTime: '5 min read'
  }, {
    id: 2,
    title: 'Seasonal Planting Guide for New York',
    excerpt: 'What to plant each month in the NYC area based on USDA hardiness zone 7b.',
    image: 'https://images.unsplash.com/photo-1647481440733-51e1c1a93ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Seasonal Guide',
    readTime: '8 min read'
  }, {
    id: 3,
    title: 'Composting Basics for Urban Dwellers',
    excerpt: 'How to start composting in your apartment with minimal space and odor.',
    image: 'https://images.unsplash.com/photo-1588701107566-af76b932e2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Sustainability',
    readTime: '6 min read'
  }];
  const videos = [{
    id: 1,
    title: 'Starting Seeds Indoors',
    description: 'A step-by-step guide to starting your vegetables from seeds in your NYC apartment.',
    thumbnail: 'https://images.unsplash.com/photo-1631905754530-3e3583bbd29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    duration: '12:45'
  }, {
    id: 2,
    title: 'Vertical Gardening Techniques',
    description: 'Maximize your growing space by building a vertical garden on your wall or balcony.',
    thumbnail: 'https://images.unsplash.com/photo-1590452224879-867e8012a828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    duration: '18:22'
  }, {
    id: 3,
    title: 'Pest Management Without Chemicals',
    description: 'Natural and organic methods to keep pests away from your urban garden.',
    thumbnail: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    duration: '15:37'
  }];
  const guides = [{
    id: 1,
    title: 'NYC Urban Gardening Handbook',
    description: "A comprehensive guide to growing food in New York City's unique environment.",
    thumbnail: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    fileSize: '4.2 MB'
  }, {
    id: 2,
    title: 'Edible Plants for Beginners',
    description: "The easiest vegetables, herbs, and fruits to grow if you're just starting out.",
    thumbnail: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    fileSize: '2.8 MB'
  }];
  return <div className="w-full bg-stone-50">
      {/* Hero */}
      <div className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Learn to Grow Your Own Food
          </h1>
          <p className="text-xl max-w-3xl">
            Educational resources to help you grow food sustainably in NYC, from
            your first seedling to a thriving garden.
          </p>
        </div>
      </div>
      {/* Featured Articles */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <BookOpen className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold">Featured Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href="#" className="text-green-700 font-medium hover:text-green-800 flex items-center">
                  Read article
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-green-700 font-medium hover:text-green-800">
            View all articles →
          </a>
        </div>
      </section>
      {/* Video Tutorials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Play className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold">Video Tutorials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => <div key={video.id} className="bg-stone-50 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-green-600 bg-opacity-80 rounded-full p-3">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <a href="#" className="text-green-700 font-medium hover:text-green-800 flex items-center">
                    Watch video
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>)}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-green-700 font-medium hover:text-green-800">
              View all videos →
            </a>
          </div>
        </div>
      </section>
      {/* Downloadable Guides */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Download className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold">Downloadable Guides</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map(guide => <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
              <div className="w-1/3 overflow-hidden">
                <img src={guide.thumbnail} alt={guide.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">
                    {guide.fileSize} PDF
                  </span>
                  <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </section>
      {/* Workshop CTA */}
      <section className="py-12 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Workshops</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Learn hands-on gardening skills with our expert-led workshops across
            NYC.
          </p>
          <a href="#" className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-medium">
            View Upcoming Workshops
          </a>
        </div>
      </section>
    </div>;
}