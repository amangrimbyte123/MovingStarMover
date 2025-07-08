import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | MovingStar - Professional Moving Services',
  description: 'Get in touch with MovingStar for all your moving needs. Contact our team for quotes, questions, or support.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're here to help with your moving needs. Reach out to our team for personalized assistance and support.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your moving needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p>(800) MOVING-1</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p>info@movingstar.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p>123 Moving Street, Suite 100<br />Los Angeles, CA 90001</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                  <p className="text-gray-600 mb-4">
                    Need urgent assistance? Our support team is available 24/7 for emergency moving situations.
                  </p>
                  <p className="font-medium text-blue-600">
                    Emergency Hotline: (800) 999-9999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 