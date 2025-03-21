export default function ContactSection() {
    return (
      <section className="bg-black text-white py-20">
        <div className="container px-4 mx-auto space-y-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-pink-500">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions, ideas, or ready to start your next project? Reach out to us — we’re just a message away!
          </p>
  
          <div className="grid lg:grid-cols-2 gap-10 mt-10 text-left">
            {/* Contact Form */}
            <form className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl transition duration-300"
              >
                Send Message
              </button>
            </form>
  
            {/* Address + Map */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Our Studio</h3>
                <p className="text-gray-300">
                  TechYard Web Solutions  
                  <br /> 101, Creative Complex  
                  <br /> Near Main Market, Jaipur, Rajasthan  
                  <br /> Pin: 302001  
                </p>
                <p className="mt-4 text-gray-400">
                  📞 +91 9876543210  
                  <br /> ✉️ contact@techyardweb.com
                </p>
              </div>
  
              <div className="rounded-xl overflow-hidden shadow-lg border border-pink-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2952901187897!2d75.788532!3d26.912434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ed45f8e63b%3A0x2d7a656cb73ea176!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  