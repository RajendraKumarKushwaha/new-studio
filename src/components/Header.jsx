"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { EnquiryButton } from "@/CilentComponent/EnquieryButton"

export default function Header() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    const [isOpen, setIsOpen] = useState(false)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)

    return (
        <header className={`w-full fixed top-0 left-0 z-1000 transition-all duration-300 
            ${isHome ? "bg-transparent text-white" : "bg-white text-black shadow-md border-b"}`}>

            <div className={`container mx-auto flex items-center justify-between px-4 py-4 
                ${isHome ? "text-white" : "text-black"}`}>

                {/* Logo */}
                <h1 className={`text-2xl font-bold 
                    ${isHome ? "text-white" : "text-black"}`}>
                    📸 StudioName
                </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-1 justify-center gap-6 relative">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/gallery">Gallery</Link>

                    {/* Gallery Dropdown */}
                    {/* <div className="relative group">
                        <button className="flex items-center gap-1">
                            Gallery <ChevronDown size={16} />
                        </button>
                        <div className="absolute top-8 left-0 w-56 bg-white text-black border shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                            <Link href="/gallery/wedding" className="block px-4 py-2 hover:bg-gray-100">Wedding Shoot</Link>
                            <Link href="/gallery/prewedding" className="block px-4 py-2 hover:bg-gray-100">Pre-Wedding Shoot</Link>
                            <Link href="/gallery/maternity" className="block px-4 py-2 hover:bg-gray-100">Maternity Shoot</Link>
                            <Link href="/gallery/fashion" className="block px-4 py-2 hover:bg-gray-100">Fashion Shoot</Link>
                        </div>
                    </div> */}

                    <Link href="/testimonials">Testimonials</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:flex">
                    {/* <Link
                        href="/contact-us"
                        className={`px-4 py-2 rounded-md transition
                        ${isHome
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                    >
                        Enquiry Now
                    </Link> */}
                    <EnquiryButton isHome={true} className="px-4 py-2 rounded-md transition"/>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className={`md:hidden ${isHome ? "text-white" : "text-black"}`}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Slide-In Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <img src="https://memoriesimagesvideos.s3.us-east-1.amazonaws.com/images/hero/logo.png" className="w-24" alt="logo" />
                    <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6 bg-white text-black">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>

                    {/* Mobile Gallery Dropdown */}
                    {/* <div className="w-full">
                        <button
                            className="flex items-center justify-between w-full py-2"
                            onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                        >
                            <span>Gallery</span>
                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-200 ${isGalleryOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${isGalleryOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} ml-4 flex flex-col gap-2`}
                        >
                            <Link href="/gallery/wedding" onClick={() => setIsOpen(false)}>Wedding Shoot</Link>
                            <Link href="/gallery/prewedding" onClick={() => setIsOpen(false)}>Pre-Wedding Shoot</Link>
                            <Link href="/gallery/maternity" onClick={() => setIsOpen(false)}>Maternity Shoot</Link>
                            <Link href="/gallery/fashion" onClick={() => setIsOpen(false)}>Fashion Shoot</Link>
                        </div>
                    </div> */}

                    <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

                    {/* <Link
                        href="/contact"
                        className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                       Enquiry Now
                    </Link> */}
                        
                
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    )
}
