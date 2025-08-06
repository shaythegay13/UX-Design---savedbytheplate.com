import React from 'react';
import { MessageSquare, Users, ExternalLink } from 'lucide-react';
export function Community() {
  // Mock data for Discord communities
  const discordChannels = [{
    id: 1,
    name: 'NYC Urban Gardeners',
    description: 'General discussion for urban gardeners across all five boroughs of NYC.',
    members: 1245,
    topics: ['General Discussion', 'Seasonal Tips', 'Local Events'],
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: 2,
    name: 'Container Gardening',
    description: 'Focused on growing in limited spaces: balconies, windowsills, and small spaces.',
    members: 876,
    topics: ['Space-Saving Ideas', 'Container Selection', 'Balcony Gardens'],
    image: 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    id: 3,
    name: 'Permaculture Principles',
    description: 'Discussion of sustainable, self-sufficient agricultural ecosystems and permaculture design.',
    members: 653,
    topics: ['Permaculture Design', 'Sustainability', 'Ecosystem Building'],
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    id: 4,
    name: 'NYC Soil Health',
    description: 'Discussions about soil testing, improvement, and contamination issues specific to NYC.',
    members: 421,
    topics: ['Soil Testing', 'Composting', 'Lead Remediation'],
    image: 'https://images.unsplash.com/photo-1588701107566-af76b932e2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    id: 5,
    name: 'Rooftop Farming',
    description: 'Dedicated to the unique challenges and opportunities of growing food on NYC rooftops.',
    members: 389,
    topics: ['Wind Management', 'Weight Restrictions', 'Rooftop Irrigation'],
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80'
  }, {
    id: 6,
    name: 'Seasonal Harvests',
    description: 'Sharing harvest results, recipes, and preservation methods for seasonal produce.',
    members: 742,
    topics: ['Harvest Tips', 'Food Preservation', 'Seasonal Recipes'],
    image: 'https://images.unsplash.com/photo-1596388736806-7c5cd145d079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }];
  // Mock data for community events
  const communityEvents = [{
    id: 1,
    name: 'Seed Swap',
    date: 'March 15, 2023',
    location: 'Union Square Greenmarket',
    description: 'Bring your extra seeds to trade with fellow gardeners. Great way to diversify your garden!'
  }, {
    id: 2,
    name: 'Container Gardening Workshop',
    date: 'April 8, 2023',
    location: 'Brooklyn Botanic Garden',
    description: 'Learn techniques for growing vegetables in limited spaces. Perfect for apartment dwellers.'
  }, {
    id: 3,
    name: 'Community Garden Volunteer Day',
    date: 'April 22, 2023',
    location: 'Various locations across NYC',
    description: 'Help local community gardens prepare for the growing season. Tools and refreshments provided.'
  }];
  return <div className="w-full bg-stone-50">
      {/* Hero */}
      <div className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h1>
          <p className="text-xl max-w-3xl">
            Connect with fellow urban gardeners through Discord channels and
            local events to share knowledge and experiences.
          </p>
        </div>
      </div>
      {/* Discord Channels */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <MessageSquare className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-bold">Discord Communities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discordChannels.map(channel => <div key={channel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img src={channel.image} alt={channel.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{channel.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {channel.members}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Popular Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {channel.topics.map((topic, idx) => <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {topic}
                      </span>)}
                  </div>
                </div>
                <a href="#" className="inline-flex items-center text-green-700 hover:text-green-800">
                  Join Discord Channel
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>)}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            New to Discord? It's a free voice, video, and text chat app that's
            used to talk and hang out with communities and friends.
          </p>
          <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-flex items-center">
            Learn how to use Discord
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
      {/* Community Guidelines */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Community Guidelines</h2>
          <div className="bg-green-50 border border-green-100 rounded-lg p-6">
            <p className="mb-4">
              To ensure our community remains helpful, inclusive, and
              respectful, please follow these guidelines:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Be respectful and kind to other community members</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Share knowledge and experiences openly</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Stay on topic within each channel</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>
                  No spam, promotional content, or selling without permission
                </span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Respect different growing methods and philosophies</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Moderators reserve the right to remove content or members who
              don't follow these guidelines.
            </p>
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Upcoming Community Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityEvents.map(event => <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-green-600 font-medium mb-1">{event.date}</p>
              <p className="text-gray-500 mb-4">{event.location}</p>
              <p className="text-gray-600 mb-6">{event.description}</p>
              <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                RSVP
              </a>
            </div>)}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="text-green-700 font-medium hover:text-green-800">
            View all upcoming events →
          </a>
        </div>
      </section>
      {/* Community Showcase */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Community Showcase</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1592419391068-9bd09d4be03c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Community garden showcase" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1605493725784-68d0c0f0f1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80" alt="Community garden showcase" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Community garden showcase" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1647481440733-51e1c1a93ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Community garden showcase" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80" alt="Community garden showcase" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" alt="Community garden showcase" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Share your garden photos and stories with our community by tagging
              #UrbanHarvestNYC
            </p>
          </div>
        </div>
      </section>
      {/* Join CTA */}
      <section className="py-12 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to join our community?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Connect with fellow gardeners, share knowledge, and grow together.
          </p>
          <a href="#" className="bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-lg font-medium text-lg inline-flex items-center">
            Join Our Discord
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>;
}