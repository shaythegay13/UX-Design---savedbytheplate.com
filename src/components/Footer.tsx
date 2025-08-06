import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
export function Footer() {
  return <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Urban Harvest NYC</h3>
            <p className="text-green-100 text-sm">
              Connecting New Yorkers with locally grown food and sustainable
              growing practices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/local-food-finder" className="text-green-100 hover:text-white text-sm">
                  Local Food Finder
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-green-100 hover:text-white text-sm">
                  Learn to Grow
                </Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-green-100 hover:text-white text-sm">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/garden-planner" className="text-green-100 hover:text-white text-sm">
                  Garden Planner
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-green-100 hover:text-white text-sm">
                  Community
                </Link>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-green-100 text-sm">
              Sign up for our newsletter to stay updated on local food events
              and seasonal growing tips.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-green-700 pt-6 text-center text-sm text-green-300">
          <p>
            &copy; {new Date().getFullYear()} Urban Harvest NYC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}