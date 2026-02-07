import React from 'react';
import { CheckCircle, Award, Truck, Shield, Users, Factory } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const About = () => {
  const features = [
    {
      icon: Factory,
      title: 'Direct Manufacturing',
      description: 'We are a direct manufacturer with our own production facility, ensuring quality control at every step.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Premium quality materials and strict quality checks ensure every bag meets our high standards.'
    },
    {
      icon: Truck,
      title: 'All India Delivery',
      description: 'Fast and reliable delivery network covering all major cities and towns across India.'
    },
    {
      icon: Shield,
      title: 'GST & Udyam Verified',
      description: 'Fully registered and verified business with GST and Udyam certification for your trust.'
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Dedicated support team to help you with custom orders and bulk requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: `${contactInfo.yearsInBusiness} years of excellence in manufacturing and delivering quality products.`
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-red-100">JBM</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              We are one of India's reliable PVC & non-woven bag manufacturers delivering quality packaging and custom bags with All India delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="\images\MACHINE2.jpeg"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded over {contactInfo.yearsInBusiness} years ago, JYOTI BAG MANUFACTURER (JBM) has grown to become a trusted name in the packaging industry across India.
                </p>
                <p>
                  Our journey began with a simple mission: to provide high-quality, affordable packaging solutions for businesses of all sizes. Today, we manufacture a wide range of PVC and non-woven bags that serve diverse industries.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities and a dedicated team, we ensure that every product meets the highest quality standards. Our custom printing services help businesses create unique branded packaging that stands out.
                </p>
                <p>
                  Being a GST and Udyam verified manufacturer, we offer the reliability and trust that businesses need when choosing their packaging partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">
              Excellence in manufacturing, commitment to quality, and dedication to customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-red-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-red-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">{contactInfo.yearsInBusiness}</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Product Categories</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Badge */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Verified & Trusted</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 flex-1 min-w-[200px]">
                <div className="text-green-600 font-bold text-lg mb-2">GST Verified</div>
                <div className="text-sm text-gray-600">{contactInfo.gstNumber}</div>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 flex-1 min-w-[200px]">
                <div className="text-blue-600 font-bold text-lg mb-2">Udyam Certified</div>
                <div className="text-sm text-gray-600">{contactInfo.udyamNumber}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
