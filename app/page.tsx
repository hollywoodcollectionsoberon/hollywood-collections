// app/page.tsx
import { Metadata } from 'next'
import { Phone, MessageCircle, MapPin, Star, Clock, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hollywood Collections - Premium Ladies & Kids Fashion | Kalamassery',
  description: 'Discover premium ladies kurthis, party wear & kids dresses at Hollywood Collections. 18+ years of trusted service in Kalamassery & Ernakulam. Online store coming soon!',
  keywords: 'ladies fashion, kids dresses, kurthis, party wear, Kalamassery, Ernakulam, textile store',
  openGraph: {
    title: 'Hollywood Collections - Premium Fashion Store',
    description: 'Premium ladies & kids fashion with 18+ years of excellence',
    type: 'website',
  },
}

export default function HomePage() {
  const whatsappNumber = "919061400119"
  const whatsappMessage = "Hi! I'm interested in your collection. Could you please share more details?"

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-white to-pastel-mint">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Hollywood Collections
            </h1>
            <p className="text-sm text-gray-600">Premium Fashion Since 2006</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:+91 90614 00119`}
              className="bg-pastel-lavender hover:bg-purple-300 text-purple-800 px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-pastel-peach/50 px-4 py-2 rounded-full mb-6">
            <span className="text-orange-800 font-medium">🎉 Online Store Coming Soon!</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Elegant Fashion for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Ladies & Kids</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience 18+ years of premium textile excellence. From traditional kurthis to modern party wear, 
            we bring you the finest collection for every occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="#products"
              className="bg-white border-2 border-pastel-lavender hover:bg-pastel-lavender text-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              View Collection
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Premium Collection
            </h3>
            <p className="text-gray-600 text-lg">
              Curated styles for every woman and child
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Kurthis", emoji: "👘", description: "Traditional & Modern" },
              { name: "Daily Wear", emoji: "👗", description: "Comfort & Style" },
              { name: "Party Wear", emoji: "✨", description: "Elegant Occasions" },
              { name: "Frocks", emoji: "🎀", description: "Stylish & Comfortable" },
              { name: "Kids Dresses", emoji: "👧", description: "Adorable Collections" }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center group hover:scale-105 transform transition-transform">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {product.emoji}
                </div>
                <h4 className="font-semibold text-gray-800 text-lg mb-2">
                  {product.name}
                </h4>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Hollywood Collections?
            </h3>
            <p className="text-gray-600 text-lg">
              Your trusted fashion partner since 2006
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-pastel-pink to-pastel-lavender rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">18+ Years Experience</h4>
              <p className="text-gray-700">
                Nearly two decades of serving families with premium quality textiles and exceptional customer service.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-pastel-mint to-pastel-sky rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Excellent Reviews</h4>
              <p className="text-gray-700">
                Trusted by thousands of satisfied customers for our quality products and personalized service.
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-pastel-peach to-pastel-cream rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Premium Quality</h4>
              <p className="text-gray-700">
                Carefully curated collection featuring the finest fabrics and latest fashion trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Visit Our Stores
            </h3>
            <p className="text-gray-600 text-lg">
              Experience our collection in person
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-pastel-pink rounded-full p-3">
                  <MapPin className="w-6 h-6 text-pink-700" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Retail Store</h4>
                  <p className="text-gray-600 leading-relaxed">
                    3rd Floor, Retail KMK Complex<br />
                    HMT Road, Kalamassery
                  </p>
                  <span className="inline-block bg-pastel-pink px-3 py-1 rounded-full text-pink-800 text-sm font-medium mt-3">
                    Retail Shopping
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-pastel-lavender rounded-full p-3">
                  <MapPin className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Wholesale Store</h4>
                  <p className="text-gray-600 leading-relaxed">
                    DD Vastra Mahal<br />
                    Ernakulam
                  </p>
                  <span className="inline-block bg-pastel-lavender px-3 py-1 rounded-full text-purple-800 text-sm font-medium mt-3">
                    Wholesale Orders
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-gray-600 text-lg">
              Real experiences from our valued customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Nair",
                location: "Kalamassery",
                review: "Absolutely love their kurthis collection! The quality is amazing and the staff is so helpful. Been shopping here for over 5 years.",
                rating: 5
              },
              {
                name: "Meera Thomas",
                location: "Ernakulam", 
                review: "Best place for kids' party dresses. My daughter looks like a princess in their outfits. Great variety and reasonable prices!",
                rating: 5
              },
              {
                name: "Anjali Raj",
                location: "Aluva",
                review: "Hollywood Collections is my go-to store for all occasions. Their party wear collection is simply outstanding. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.review}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Upgrade Your Wardrobe?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with us for personalized styling advice and exclusive collections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-3 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us: +91 90614 00119
            </a>
            <a
              href={`tel:+91 90614 00119`}
              className="bg-white border-2 border-purple-300 hover:bg-purple-50 text-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Email Collection */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Get Notified When Our Online Store Launches!
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Hollywood Collections</h4>
              <p className="text-gray-300 leading-relaxed">
                Your trusted fashion destination for premium ladies and kids wear. 
                Quality, style, and service since 2006.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-300">
                <p>📱 WhatsApp: +91 90614 00119</p>
                <p>📞 Phone: +91 90614 00119</p>
                <p>📧 Email: info@hollywoodcollections.com</p>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Store Hours</h5>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p>Sunday: 11:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              © 2026 Hollywood Collections. All rights reserved. | 
              Trusted by families across Kerala for over 18 years.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
