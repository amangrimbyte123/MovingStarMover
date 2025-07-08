import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | MovingStar - Professional Moving Services',
  description: 'Learn about MovingStar\'s history, mission, and commitment to providing exceptional moving services across the nation.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About MovingStar
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in making moves that matter. We combine expertise, dedication, and innovation to deliver exceptional moving experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At MovingStar, our mission is to transform the moving experience through exceptional service, innovative solutions, and unwavering commitment to customer satisfaction.
                </p>
                <p className="text-lg text-gray-600">
                  We strive to make every move seamless, stress-free, and successful, whether you're moving across the street or across the globe.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose MovingStar?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Over 20 years of moving expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Fully licensed and insured services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Dedicated customer support team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span>Customized moving solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Excellence',
                  description: 'We maintain the highest standards in every aspect of our service.'
                },
                {
                  title: 'Integrity',
                  description: 'We operate with complete transparency and honesty in all our dealings.'
                },
                {
                  title: 'Innovation',
                  description: 'We continuously improve our services through modern solutions.'
                },
                {
                  title: 'Reliability',
                  description: 'We deliver on our promises, every time.'
                },
                {
                  title: 'Customer Focus',
                  description: 'Your satisfaction is our top priority.'
                },
                {
                  title: 'Teamwork',
                  description: 'We work together to ensure your move is successful.'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 