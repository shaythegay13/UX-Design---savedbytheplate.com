import React, { useState } from 'react';
import { Check, ArrowRight, Sun, Cloud, CloudRain } from 'lucide-react';
export function GardenPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    borough: '',
    zip: '',
    gardenType: '',
    space: '',
    sunlight: '',
    experience: '',
    goals: [],
    preferences: []
  });
  const [showPlan, setShowPlan] = useState(false);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleCheckboxChange = e => {
    const {
      name,
      value,
      checked
    } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          [name]: [...prev[name], value]
        };
      } else {
        return {
          ...prev,
          [name]: prev[name].filter(item => item !== value)
        };
      }
    });
  };
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  const generatePlan = () => {
    setShowPlan(true);
  };
  return <div className="w-full bg-stone-50">
      {/* Hero */}
      <div className="bg-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            AI Garden Planner
          </h1>
          <p className="text-xl max-w-3xl">
            Get a customized garden plan based on your location, space, and
            preferences. Our AI planner uses climate data specific to NYC's
            boroughs.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!showPlan ? <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map(step => <div key={step} className={`flex items-center justify-center rounded-full w-8 h-8 text-sm ${currentStep >= step ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {currentStep > step ? <Check className="h-5 w-5" /> : step}
                  </div>)}
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">Location</span>
                <span className="text-sm text-gray-600">Garden Details</span>
                <span className="text-sm text-gray-600">Preferences</span>
              </div>
            </div>
            {/* Step 1: Location */}
            {currentStep === 1 && <div>
                <h2 className="text-xl font-semibold mb-6">
                  Tell us about your location
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Which borough do you live in?
                    </label>
                    <select name="borough" value={formData.borough} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required>
                      <option value="">Select borough</option>
                      <option value="manhattan">Manhattan</option>
                      <option value="brooklyn">Brooklyn</option>
                      <option value="queens">Queens</option>
                      <option value="bronx">Bronx</option>
                      <option value="staten_island">Staten Island</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What's your ZIP code?
                    </label>
                    <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} placeholder="e.g., 10001" className="w-full border border-gray-300 rounded-md p-2" required />
                    <p className="mt-1 text-sm text-gray-500">
                      This helps us determine your specific microclimate and
                      growing conditions.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button onClick={nextStep} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>}
            {/* Step 2: Garden Details */}
            {currentStep === 2 && <div>
                <h2 className="text-xl font-semibold mb-6">
                  Tell us about your garden space
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What type of garden are you planning?
                    </label>
                    <select name="gardenType" value={formData.gardenType} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required>
                      <option value="">Select garden type</option>
                      <option value="container">
                        Container Garden (pots/planters)
                      </option>
                      <option value="balcony">Balcony Garden</option>
                      <option value="rooftop">Rooftop Garden</option>
                      <option value="indoor">Indoor Garden</option>
                      <option value="community">Community Garden Plot</option>
                      <option value="backyard">Backyard Garden</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      How much space do you have?
                    </label>
                    <select name="space" value={formData.space} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required>
                      <option value="">Select space size</option>
                      <option value="very_small">
                        Very Small (a few pots)
                      </option>
                      <option value="small">
                        Small (windowsill or small balcony)
                      </option>
                      <option value="medium">
                        Medium (large balcony or small plot)
                      </option>
                      <option value="large">
                        Large (backyard or multiple plots)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      How much sunlight does your space get?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <label className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${formData.sunlight === 'full' ? 'bg-green-50 border-green-500' : 'border-gray-200'}`}>
                        <input type="radio" name="sunlight" value="full" checked={formData.sunlight === 'full'} onChange={handleInputChange} className="sr-only" />
                        <Sun className="h-8 w-8 text-yellow-500 mb-2" />
                        <span className="text-sm font-medium">Full Sun</span>
                        <span className="text-xs text-gray-500 mt-1">
                          6+ hours direct sunlight
                        </span>
                      </label>
                      <label className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${formData.sunlight === 'partial' ? 'bg-green-50 border-green-500' : 'border-gray-200'}`}>
                        <input type="radio" name="sunlight" value="partial" checked={formData.sunlight === 'partial'} onChange={handleInputChange} className="sr-only" />
                        <Cloud className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm font-medium">Partial Sun</span>
                        <span className="text-xs text-gray-500 mt-1">
                          3-6 hours direct sunlight
                        </span>
                      </label>
                      <label className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${formData.sunlight === 'shade' ? 'bg-green-50 border-green-500' : 'border-gray-200'}`}>
                        <input type="radio" name="sunlight" value="shade" checked={formData.sunlight === 'shade'} onChange={handleInputChange} className="sr-only" />
                        <CloudRain className="h-8 w-8 text-blue-400 mb-2" />
                        <span className="text-sm font-medium">
                          Mostly Shade
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          Less than 3 hours sunlight
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      What's your gardening experience level?
                    </label>
                    <select name="experience" value={formData.experience} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md p-2" required>
                      <option value="">Select experience level</option>
                      <option value="beginner">
                        Beginner (first-time gardener)
                      </option>
                      <option value="intermediate">
                        Intermediate (some experience)
                      </option>
                      <option value="advanced">
                        Advanced (experienced gardener)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={prevStep} className="text-green-600 hover:text-green-700 px-6 py-2 rounded-md flex items-center">
                    Back
                  </button>
                  <button onClick={nextStep} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>}
            {/* Step 3: Preferences */}
            {currentStep === 3 && <div>
                <h2 className="text-xl font-semibold mb-6">
                  What are your gardening goals?
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What do you want to grow? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="goals" value="vegetables" checked={formData.goals.includes('vegetables')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Vegetables</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="goals" value="herbs" checked={formData.goals.includes('herbs')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Herbs</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="goals" value="flowers" checked={formData.goals.includes('flowers')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Flowers</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="goals" value="fruits" checked={formData.goals.includes('fruits')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Fruits</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Any specific preferences? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="preferences" value="low_maintenance" checked={formData.preferences.includes('low_maintenance')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Low maintenance plants</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="preferences" value="drought_resistant" checked={formData.preferences.includes('drought_resistant')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Drought-resistant</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="preferences" value="native" checked={formData.preferences.includes('native')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Native plants</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="preferences" value="pollinator_friendly" checked={formData.preferences.includes('pollinator_friendly')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Pollinator-friendly</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="preferences" value="child_friendly" checked={formData.preferences.includes('child_friendly')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Child-friendly</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" name="preferences" value="pet_safe" checked={formData.preferences.includes('pet_safe')} onChange={handleCheckboxChange} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                        <span>Pet-safe plants</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button onClick={prevStep} className="text-green-600 hover:text-green-700 px-6 py-2 rounded-md flex items-center">
                    Back
                  </button>
                  <button onClick={generatePlan} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center">
                    Generate Garden Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>}
          </div> :
      // Garden Plan Results
      <div className="bg-white rounded-lg shadow-md">
            <div className="bg-green-600 text-white p-6 rounded-t-lg">
              <h2 className="text-2xl font-bold">Your Custom Garden Plan</h2>
              <p className="mt-2">
                Based on your preferences and location in {formData.borough},
                here's your personalized garden plan.
              </p>
            </div>
            <div className="p-6">
              {/* Climate Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">
                  Your Growing Conditions
                </h3>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <p className="mb-2">
                    <strong>USDA Hardiness Zone:</strong> 7b (Based on your ZIP
                    code {formData.zip})
                  </p>
                  <p className="mb-2">
                    <strong>First Frost Date:</strong> Around November 15
                  </p>
                  <p className="mb-2">
                    <strong>Last Frost Date:</strong> Around April 10
                  </p>
                  <p className="mb-2">
                    <strong>Growing Season:</strong> Approximately 210 days
                  </p>
                  <p>
                    <strong>Note:</strong> Urban environments can create "heat
                    islands" that may extend your growing season slightly.
                  </p>
                </div>
              </div>
              {/* Recommended Plants */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">
                  Recommended Plants for Your Garden
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.goals.includes('vegetables') && <div className="border rounded-lg overflow-hidden">
                      <div className="bg-green-100 px-4 py-2">
                        <h4 className="font-medium">Vegetables</h4>
                      </div>
                      <ul className="p-4 space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Cherry Tomatoes</span>
                            <p className="text-sm text-gray-600">
                              Perfect for containers, needs at least 6 hours of
                              sun
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Leafy Greens</span>
                            <p className="text-sm text-gray-600">
                              Lettuce, spinach, and kale do well in partial
                              shade
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Bush Beans</span>
                            <p className="text-sm text-gray-600">
                              Compact and productive, good for containers
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>}
                  {formData.goals.includes('herbs') && <div className="border rounded-lg overflow-hidden">
                      <div className="bg-green-100 px-4 py-2">
                        <h4 className="font-medium">Herbs</h4>
                      </div>
                      <ul className="p-4 space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Basil</span>
                            <p className="text-sm text-gray-600">
                              Loves heat and sun, perfect companion for tomatoes
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Mint</span>
                            <p className="text-sm text-gray-600">
                              Thrives in partial shade, keep in separate
                              container
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Thyme</span>
                            <p className="text-sm text-gray-600">
                              Drought-resistant, good for sunny spots
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>}
                  {formData.goals.includes('flowers') && <div className="border rounded-lg overflow-hidden">
                      <div className="bg-green-100 px-4 py-2">
                        <h4 className="font-medium">Flowers</h4>
                      </div>
                      <ul className="p-4 space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Marigolds</span>
                            <p className="text-sm text-gray-600">
                              Repels garden pests, easy to grow
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Sunflowers (Dwarf Variety)
                            </span>
                            <p className="text-sm text-gray-600">
                              Compact varieties work well in containers
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Nasturtiums</span>
                            <p className="text-sm text-gray-600">
                              Edible flowers, attract pollinators
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>}
                  {formData.goals.includes('fruits') && <div className="border rounded-lg overflow-hidden">
                      <div className="bg-green-100 px-4 py-2">
                        <h4 className="font-medium">Fruits</h4>
                      </div>
                      <ul className="p-4 space-y-2">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Strawberries</span>
                            <p className="text-sm text-gray-600">
                              Work well in hanging baskets or containers
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Blueberries (Container Variety)
                            </span>
                            <p className="text-sm text-gray-600">
                              Need acidic soil and full sun
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">
                              Fig (Dwarf Variety)
                            </span>
                            <p className="text-sm text-gray-600">
                              Can grow in large containers, needs protection in
                              winter
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>}
                </div>
              </div>
              {/* Monthly Calendar */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">
                  Monthly Garden Calendar
                </h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Month
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tasks
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          March
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Start seeds indoors (tomatoes, peppers)</li>
                            <li>Prepare containers and soil</li>
                            <li>Plan your garden layout</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          April
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>
                              Plant cold-hardy vegetables (lettuce, spinach)
                            </li>
                            <li>Begin hardening off seedlings</li>
                            <li>Set up irrigation systems</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          May
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Plant warm-season crops after last frost</li>
                            <li>Begin regular fertilizing schedule</li>
                            <li>Monitor for pests</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  This is a simplified calendar. Download the full 12-month
                  calendar below.
                </p>
              </div>
              {/* Next Steps */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a href="#" className="flex items-center justify-center p-4 border border-green-500 rounded-lg hover:bg-green-50">
                    <div className="text-center">
                      <h4 className="font-medium text-green-600 mb-1">
                        Download Full Garden Plan
                      </h4>
                      <p className="text-sm text-gray-600">
                        Complete with planting calendar and care instructions
                      </p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center justify-center p-4 border border-green-500 rounded-lg hover:bg-green-50">
                    <div className="text-center">
                      <h4 className="font-medium text-green-600 mb-1">
                        Shop Recommended Plants
                      </h4>
                      <p className="text-sm text-gray-600">
                        Find seeds, seedlings, and supplies in our marketplace
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button onClick={() => setShowPlan(false)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
                  Modify Your Plan
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}