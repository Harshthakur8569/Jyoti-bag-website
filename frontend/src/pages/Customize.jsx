import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { customizationOptions, contactInfo } from '../data/mockData';
import { toast } from 'sonner';

const Customize = () => {
  const [formData, setFormData] = useState({
    bagType: '',
    size: '',
    color: '',
    quantity: '',
    customText: '',
    additionalDetails: ''
  });
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage({
          file,
          preview: reader.result,
          name: file.name
        });
        toast.success('Image uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    toast.info('Image removed');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.bagType || !formData.size || !formData.quantity) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Create WhatsApp message
    let message = `*Custom Bag Order Request*\n\n`;
    message += `Bag Type: ${formData.bagType}\n`;
    message += `Size: ${formData.size}\n`;
    message += `Color: ${formData.color || 'Not specified'}\n`;
    message += `Quantity: ${formData.quantity}\n`;
    
    if (formData.customText) {
      message += `Custom Text/Tagline: ${formData.customText}\n`;
    }
    
    if (uploadedImage) {
      message += `Logo/Image: Will be shared separately\n`;
    }
    
    if (formData.additionalDetails) {
      message += `\nAdditional Details:\n${formData.additionalDetails}`;
    }

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customize Your <span className="text-red-600">Bag</span>
          </h1>
          <p className="text-xl text-gray-600">
            Create your perfect bag with custom design, size, and printing
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="space-y-6">
            {/* Bag Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Bag Type <span className="text-red-600">*</span>
              </label>
              <select
                name="bagType"
                value={formData.bagType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              >
                <option value="">Select bag type</option>
                {customizationOptions.bagTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Size <span className="text-red-600">*</span>
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              >
                <option value="">Select size</option>
                {customizationOptions.sizes.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Color */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Color
              </label>
              <select
                name="color"
                value={formData.color}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select color</option>
                {customizationOptions.colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quantity <span className="text-red-600">*</span>
              </label>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              >
                <option value="">Select quantity</option>
                {customizationOptions.quantities.map((qty, index) => (
                  <option key={index} value={qty}>{qty}</option>
                ))}
              </select>
            </div>

            {/* Custom Text */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Custom Text / Tagline
              </label>
              <input
                type="text"
                name="customText"
                value={formData.customText}
                onChange={handleInputChange}
                placeholder="Enter your brand name or tagline"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Logo / Design
              </label>
              {!uploadedImage ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    <Upload className="mx-auto text-gray-400 mb-3" size={40} />
                    <p className="text-gray-600 mb-1">Click to upload logo or design</p>
                    <p className="text-sm text-gray-400">PNG, JPG up to 5MB</p>
                  </label>
                </div>
              ) : (
                <div className="relative border border-gray-300 rounded-lg p-4">
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X size={16} />
                  </button>
                  <div className="flex items-center space-x-4">
                    <img
                      src={uploadedImage.preview}
                      alt="Preview"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{uploadedImage.name}</p>
                      <p className="text-sm text-gray-500">Image uploaded</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleInputChange}
                rows={4}
                placeholder="Any special requirements or instructions..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Submit on WhatsApp
            </button>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">How It Works</h3>
          <ol className="space-y-2 text-sm text-gray-700">
            <li>1. Fill in your customization requirements</li>
            <li>2. Upload your logo/design (optional)</li>
            <li>3. Submit the form to connect with us on WhatsApp</li>
            <li>4. Our team will provide you with a detailed quote</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Customize;
