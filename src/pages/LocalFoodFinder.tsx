import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink, Search, Filter, X } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});
// Custom marker icons for different location types
const createCustomIcon = color => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};
const markerIcons = {
  'Community Garden': createCustomIcon('green'),
  'Urban Farm': createCustomIcon('orange'),
  'Farmers Market': createCustomIcon('red'),
  'Community Fridge': createCustomIcon('blue'),
  'Food Bank': createCustomIcon('violet'),
  'Local Business': createCustomIcon('gold')
};
// Mock data for local food sources with coordinates
const localFoodSources = [{
  id: 1,
  name: 'Union Square Greenmarket',
  type: 'Farmers Market',
  borough: 'Manhattan',
  address: 'Union Square Park, E 17th St & Union Square W',
  description: "One of NYC's largest and most popular farmers markets, featuring over 140 regional farmers, fishers, and bakers.",
  hours: 'Monday, Wednesday, Friday, Saturday: 8am-6pm',
  image: 'https://images.unsplash.com/photo-1595228702422-7cf8a3d94d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  website: '#',
  coordinates: [40.7359, -73.9911]
}, {
  id: 2,
  name: 'Brooklyn Grange',
  type: 'Urban Farm',
  borough: 'Brooklyn',
  address: '63 Flushing Ave, Building 3, Brooklyn',
  description: 'A rooftop farming and green roofing business that grows over 80,000 pounds of organically-cultivated produce per year.',
  hours: 'Tours available by appointment',
  image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
  website: '#',
  coordinates: [40.6985, -73.9716]
}, {
  id: 3,
  name: 'Bronx CSA',
  type: 'Community Garden',
  borough: 'Bronx',
  address: '1000 Grand Concourse, Bronx',
  description: 'Community garden providing weekly shares of fresh vegetables, fruits, and herbs from local farms.',
  hours: 'Weekly pickup: Thursdays 4-7pm',
  image: 'https://images.unsplash.com/photo-1596388736806-7c5cd145d079?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  website: '#',
  coordinates: [40.8276, -73.9219]
}, {
  id: 4,
  name: 'Queens Farm Museum',
  type: 'Urban Farm',
  borough: 'Queens',
  address: '73-50 Little Neck Pkwy, Queens',
  description: 'A 47-acre working farm dating back to 1697, offering farm-fresh produce and educational programs.',
  hours: 'Daily: 10am-5pm',
  image: 'https://images.unsplash.com/photo-1592419391068-9bd09d4be03c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  website: '#',
  coordinates: [40.7432, -73.7223]
}, {
  id: 5,
  name: 'Staten Island Greenmarket',
  type: 'Farmers Market',
  borough: 'Staten Island',
  address: "St. George Greenmarket, St. Mark's Place & Hyatt Street",
  description: 'Year-round market featuring locally grown produce, fresh baked goods, and seasonal plants.',
  hours: 'Saturday: 8am-2pm',
  image: 'https://images.unsplash.com/photo-1595228702422-7cf8a3d94d0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  website: '#',
  coordinates: [40.6425, -74.0738]
}, {
  id: 6,
  name: 'GrowNYC Teaching Garden',
  type: 'Community Garden',
  borough: 'Brooklyn',
  address: 'Governors Island, Brooklyn',
  description: 'A 21,000-square-foot urban farm that demonstrates sustainable urban farming techniques and offers workshops.',
  hours: 'Seasonal: May-October, Friday-Sunday: 10am-4pm',
  image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
  website: '#',
  coordinates: [40.6892, -74.0164]
}, {
  id: 7,
  name: 'West Harlem Community Fridge',
  type: 'Community Fridge',
  borough: 'Manhattan',
  address: '225 W 134th St, New York, NY',
  description: 'A community fridge providing free food to anyone in need, stocked by volunteers and local businesses.',
  hours: 'Open 24/7',
  image: 'https://images.unsplash.com/photo-1614267861476-0d129972f0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  website: '#',
  coordinates: [40.814, -73.9454]
}, {
  id: 8,
  name: 'Food Bank For New York City',
  type: 'Food Bank',
  borough: 'Bronx',
  address: '355 Food Center Drive, Bronx, NY',
  description: "NYC's largest hunger-relief organization, providing food to approximately 1.5 million New Yorkers.",
  hours: 'Monday-Friday: 9am-5pm',
  image: 'https://images.unsplash.com/photo-1593113598332-cd59a0c3a8b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  website: '#',
  coordinates: [40.8075, -73.8726]
}, {
  id: 9,
  name: 'Bread & Butter Farm-to-Table',
  type: 'Local Business',
  borough: 'Brooklyn',
  address: '254 Driggs Ave, Brooklyn, NY',
  description: 'Restaurant committed to sourcing ingredients from local farms and producers within 100 miles of NYC.',
  hours: 'Tuesday-Sunday: 11am-10pm',
  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  website: '#',
  coordinates: [40.7214, -73.9498]
}, {
  id: 10,
  name: 'Lower East Side Community Fridge',
  type: 'Community Fridge',
  borough: 'Manhattan',
  address: '140 Essex St, New York, NY',
  description: 'A mutual aid project providing free food access to anyone who needs it.',
  hours: 'Open 24/7',
  image: 'https://images.unsplash.com/photo-1614267861476-0d129972f0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  website: '#',
  coordinates: [40.7185, -73.9881]
}];
export function LocalFoodFinder() {
  const [selectedBorough, setSelectedBorough] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [mapCenter, setMapCenter] = useState([40.7128, -74.006]); // NYC coordinates
  const [mapZoom, setMapZoom] = useState(12);
  const locationTypes = ['All', 'Community Garden', 'Urban Farm', 'Farmers Market', 'Community Fridge', 'Food Bank', 'Local Business'];
  const boroughs = ['All', 'Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'];
  const filteredLocations = localFoodSources.filter(location => (selectedBorough === 'All' || location.borough === selectedBorough) && (selectedType === 'All' || location.type === selectedType) && (searchTerm === '' || location.name.toLowerCase().includes(searchTerm.toLowerCase()) || location.description.toLowerCase().includes(searchTerm.toLowerCase())));
  const handleLocationSelect = location => {
    setSelectedLocation(location);
    setMapCenter(location.coordinates);
    setMapZoom(15);
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };
  const handleResetView = () => {
    setMapCenter([40.7128, -74.006]);
    setMapZoom(12);
    setSelectedLocation(null);
  };
  return <div className="w-full bg-stone-50">
      {/* Hero */}
      <div className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Find Local Food in NYC
          </h1>
          <p className="text-xl max-w-3xl">
            Discover community gardens, farms, farmers markets, food banks,
            community fridges, and local businesses across New York City with
            our interactive map.
          </p>
        </div>
      </div>

      {/* Map and Filters */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row h-[calc(100vh-300px)] min-h-[500px]">
          {/* Sidebar with filters and location list */}
          <div className={`${showSidebar ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-md overflow-hidden mr-0 md:mr-4 mb-4 md:mb-0`}>
            {/* Search and Filters */}
            <div className="p-4 border-b">
              <div className="mb-4">
                <div className="relative">
                  <input type="text" placeholder="Search locations..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location Type
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                  {locationTypes.map(type => <option key={type} value={type}>
                      {type}
                    </option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Borough
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2" value={selectedBorough} onChange={e => setSelectedBorough(e.target.value)}>
                  {boroughs.map(borough => <option key={borough} value={borough}>
                      {borough}
                    </option>)}
                </select>
              </div>
            </div>
            {/* Results List */}
            <div className="flex-1 overflow-y-auto p-4">
              <h2 className="text-lg font-semibold mb-3">
                {filteredLocations.length}{' '}
                {filteredLocations.length === 1 ? 'Location' : 'Locations'}{' '}
                Found
              </h2>
              {filteredLocations.length > 0 ? <div className="space-y-4">
                  {filteredLocations.map(location => <div key={location.id} className={`border rounded-lg p-3 cursor-pointer transition-all ${selectedLocation?.id === location.id ? 'border-green-500 bg-green-50' : 'hover:bg-gray-50'}`} onClick={() => handleLocationSelect(location)}>
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{location.name}</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {location.type}
                        </span>
                      </div>
                      <div className="flex items-start mt-2">
                        <MapPin className="h-4 w-4 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">
                          {location.address} ({location.borough})
                        </p>
                      </div>
                    </div>)}
                </div> : <div className="text-center py-8">
                  <p className="text-gray-500">
                    No locations found. Try adjusting your filters.
                  </p>
                </div>}
            </div>
          </div>
          {/* Map Container */}
          <div className="relative flex-1 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Mobile toggle button */}
            <button className="md:hidden absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md" onClick={() => setShowSidebar(!showSidebar)}>
              {showSidebar ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
            </button>
            {/* Reset view button */}
            <button className="absolute top-4 left-4 z-10 bg-white p-2 rounded-full shadow-md" onClick={handleResetView}>
              <span className="text-xs font-medium px-1">Reset</span>
            </button>
            {/* Map */}
            <MapContainer center={mapCenter} zoom={mapZoom} style={{
            height: '100%',
            width: '100%'
          }} zoomControl={false} key={`${mapCenter[0]}-${mapCenter[1]}-${mapZoom}`}>
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {filteredLocations.map(location => <Marker key={location.id} position={location.coordinates} icon={markerIcons[location.type]} eventHandlers={{
              click: () => handleLocationSelect(location)
            }}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-medium">{location.name}</h3>
                      <p className="text-xs text-gray-500">{location.type}</p>
                    </div>
                  </Popup>
                </Marker>)}
            </MapContainer>
          </div>
        </div>
        {/* Selected Location Details */}
        {selectedLocation && <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={selectedLocation.image} alt={selectedLocation.name} className="w-full h-64 object-cover" />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-bold">
                    {selectedLocation.name}
                  </h2>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {selectedLocation.type}
                  </span>
                </div>
                <div className="flex items-start mb-2">
                  <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">
                    {selectedLocation.address} ({selectedLocation.borough})
                  </p>
                </div>
                <div className="flex items-start mb-4">
                  <Calendar className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-600">{selectedLocation.hours}</p>
                </div>
                <p className="text-gray-700 mb-4">
                  {selectedLocation.description}
                </p>
                <a href={selectedLocation.website} className="inline-flex items-center text-green-700 hover:text-green-800">
                  Visit website
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>}
        {/* Legend */}
        <div className="mt-6 bg-white rounded-lg shadow-md p-4">
          <h3 className="font-medium mb-2">Map Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {locationTypes.filter(type => type !== 'All').map(type => <div key={type} className="flex items-center">
                  <div className="w-4 h-4 mr-2" style={{
              backgroundColor: type === 'Community Garden' ? '#72AF26' : type === 'Urban Farm' ? '#FF8C00' : type === 'Farmers Market' ? '#CB2B3E' : type === 'Community Fridge' ? '#2A81CB' : type === 'Food Bank' ? '#9C2BCB' : '#FFD326'
            }}></div>
                  <span className="text-sm">{type}</span>
                </div>)}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            About Saved by the Plate Inc.
          </h2>
          <div className="prose max-w-none">
            <p>
              Saved by the Plate Inc. is committed to connecting New Yorkers
              with sustainable food options across the five boroughs. Our
              interactive map helps you locate:
            </p>
            <ul>
              <li>
                <strong>Community Gardens</strong> - Volunteer-run spaces where
                neighbors grow food together
              </li>
              <li>
                <strong>Urban Farms</strong> - Larger agricultural operations
                within city limits
              </li>
              <li>
                <strong>Farmers Markets</strong> - Regular gatherings where
                farmers sell directly to consumers
              </li>
              <li>
                <strong>Community Fridges</strong> - Public refrigerators
                offering free food to anyone in need
              </li>
              <li>
                <strong>Food Banks</strong> - Organizations that distribute food
                to those facing food insecurity
              </li>
              <li>
                <strong>Local Businesses</strong> - Restaurants, cafes, and
                shops that source ingredients locally
              </li>
            </ul>
            <p>
              By supporting these local food resources, you're helping to build
              a more sustainable, equitable food system in NYC while reducing
              the environmental impact of your food choices.
            </p>
          </div>
        </div>
      </section>
    </div>;
}