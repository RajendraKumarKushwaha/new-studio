import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-gray-300 pt-20 pb-10 border-t border-zinc-800">
            <div className="container px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo + Tagline */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Studio Name</h2>
                    <p className="text-sm text-gray-400">
                        Capturing timeless moments with precision and creativity.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-pink-500">Home</Link></li>
                        <li><Link href="/about" className="hover:text-pink-500">About</Link></li>
                        <li><Link href="/services" className="hover:text-pink-500">Services</Link></li>
                        <li><Link href="/portfolio" className="hover:text-pink-500">Portfolio</Link></li>
                        <li><Link href="/contact" className="hover:text-pink-500">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Wedding Photography</li>
                        <li>Pre-Wedding Photography</li>
                        <li>Maternity Photography</li>
                        <li>Candid Photography</li>
                        <li>Films & Slow Motion</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                    <p className="text-sm text-gray-400">
                        📍 101, Creative Complex
                        <br /> Rewa, Madhya Pradesh - 486001
                    </p>
                    <p className="mt-2 text-sm">
                        📞 +91 9876543210
                        <br /> ✉️ contact@techyardweb.com
                    </p>
                </div>
            </div>

            <div className="border-t border-zinc-800 mt-12 pt-6 text-center text-sm text-gray-500">
                © 2025 Studio Name. All rights reserved. Developed by{" "}
                <a
                    href="https://www.techyardweb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline font-medium"
                >
                    TechYard Web Solutions
                </a>
            </div>

        </footer>
    )
}
