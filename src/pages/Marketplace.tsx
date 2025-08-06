import React, { useState } from 'react';
import { ShoppingCart, Filter, Star, ChevronDown } from 'lucide-react';
// Mock product data
const products = [{
  id: 1,
  name: 'NYC Urban Garden Starter Kit',
  price: 29.99,
  category: 'Seed Kits',
  image: 'https://images.unsplash.com/photo-1647481440733-51e1c1a93ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  rating: 4.8,
  reviews: 124,
  description: 'Everything you need to start your urban garden: seeds for tomatoes, lettuce, basil, and more, plus biodegradable pots and organic soil.'
}, {
  id: 2,
  name: 'Vertical Garden Wall Planter',
  price: 49.99,
  category: 'Tools',
  image: 'https://images.unsplash.com/photo-1590452224879-867e8012a828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
  rating: 4.5,
  reviews: 86,
  description: 'Space-saving vertical planter perfect for balconies and small spaces. Grow herbs, flowers, and small vegetables vertically.'
}, {
  id: 3,
  name: 'Organic Heirloom Tomato Seeds',
  price: 4.99,
  category: 'Seeds',
  image: 'https://images.unsplash.com/photo-1592419391068-9bd09d4be03c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  rating: 4.9,
  reviews: 203,
  description: 'Non-GMO heirloom tomato seeds sourced from local NYC urban farms. Varieties selected to thrive in container gardens.'
}, {
  id: 4,
  name: 'Compact Composting Bin',
  price: 34.99,
  category: 'Tools',
  image: 'https://images.unsplash.com/photo-1588701107566-af76b932e2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  rating: 4.6,
  reviews: 58,
  description: 'Odor-free indoor composting solution designed for apartment living. Turn kitchen scraps into rich soil for your plants.'
}, {
  id: 5,
  name: 'Bronx Rooftop Honey',
  price: 12.99,
  category: 'Produce',
  image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
  rating: 5.0,
  reviews: 42,
  description: 'Raw, unfiltered honey produced by bees on Bronx rooftop gardens. Supports local beekeepers and urban biodiversity.'
}, {
  id: 6,
  name: 'Brooklyn CSA Membership',
  price: 299.99,
  category: 'CSA',
  image: 'https://images.unsplash.com/photo-1596388736806-7c5cd145d079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  rating: 4.7,
  reviews: 31,
  description: '16-week Community Supported Agriculture share from Brooklyn farms. Weekly pickup of fresh seasonal vegetables, fruits, and herbs.'
}, {
  id: 7,
  name: 'Herb Garden Tool Set',
  price: 24.99,
  category: 'Tools',
  image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
  rating: 4.4,
  reviews: 67,
  description: 'Compact gardening tools designed for container and indoor gardening. Includes pruners, mini trowel, and cultivator.'
}, {
  id: 8,
  name: 'Queens Farm Seasonal Vegetables',
  price: 19.99,
  category: 'Produce',
  image: 'https://images.unsplash.com/photo-1605493725784-68d0c0f0f1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
  rating: 4.8,
  reviews: 23,
  description: 'Fresh seasonal vegetable box from Queens urban farms. Contents vary by season. Delivered to your door.'
}];
export function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const categories = ['All', 'Seed Kits', 'Seeds', 'Tools', 'Produce', 'CSA'];
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    // Default 'featured' sorting
    return 0;
  });
  return <div className="w-full bg-stone-50">
      {/* Hero */}
      <div className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Urban Harvest Marketplace
          </h1>
          <p className="text-xl max-w-3xl">
            Shop for seeds, tools, and locally grown produce to support urban
            farmers across NYC.
          </p>
        </div>
      </div>
      {/* Filters and Sorting */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-green-600 mr-2" />
            <span className="font-medium mr-4">Filter by:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-3 py-1 rounded-full text-sm ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}>
                  {category}
                </button>)}
            </div>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">Sort by:</span>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-gray-300 rounded-md py-1 px-3 bg-white">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map(product => <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium">
                      {product.rating}
                    </span>
                  </div>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">
                    {product.reviews} reviews
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Featured Collections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1598901865264-4f19dfa8ceaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Balcony Garden Collection" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">
                    Balcony Garden Collection
                  </h3>
                  <button className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1526346698789-22fd84314424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Seasonal Seed Collection" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">
                    Seasonal Seed Collection
                  </h3>
                  <button className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606906709954-16594446d214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Indoor Herb Garden" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">
                    Indoor Herb Garden
                  </h3>
                  <button className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <button className="flex justify-between items-center w-full px-4 py-3 text-left">
              <span className="font-medium">How do I join a CSA program?</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
                You can purchase a CSA membership directly through our
                marketplace. Once purchased, you'll receive information about
                your pickup location and schedule. Most CSAs run seasonally from
                late spring through fall.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button className="flex justify-between items-center w-full px-4 py-3 text-left">
              <span className="font-medium">
                Are all products locally sourced?
              </span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
                All produce and food products are grown or made within 100 miles
                of NYC. Some gardening tools and supplies may be sourced from
                further away, but we prioritize sustainable and ethical
                manufacturing practices.
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <button className="flex justify-between items-center w-full px-4 py-3 text-left">
              <span className="font-medium">How is delivery handled?</span>
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </button>
            <div className="px-4 pb-4">
              <p className="text-gray-600">
                We offer delivery throughout the five boroughs of NYC. Delivery
                fees vary by location and order size. Many products also offer
                pickup options at farmers markets or urban farm locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}