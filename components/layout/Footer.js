import Link from 'next/link';
import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-secondary pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              Scent<span className="text-accent">Sutra</span>
            </h2>
            <p className="mb-4 text-gray-300">
              Premium dupes of luxury perfumes at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition">
                <FiTwitter className="w-6 h-6" />
              </a>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-accent transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="text-gray-300 hover:text-accent transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-300 hover:text-accent transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/gift-sets" className="text-gray-300 hover:text-accent transition">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/referral" className="text-gray-300 hover:text-accent transition">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-accent transition">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-accent transition">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-accent transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} ScentSutra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}