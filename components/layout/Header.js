'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // For demo, simulate cart count from localStorage
  useEffect(() => {
    const getCartCount = () => {
      if (typeof window !== 'undefined') {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartCount(cart.length);
      }
    };
    
    getCartCount();
    window.addEventListener('storage', getCartCount);
    
    return () => window.removeEventListener('storage', getCartCount);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                Scent<span className="text-accent">Sutra</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="font-medium hover:text-accent transition">
              Shop
            </Link>
            <Link href="/collections" className="font-medium hover:text-accent transition">
              Collections
            </Link>
            <Link href="/best-sellers" className="font-medium hover:text-accent transition">
              Best Sellers
            </Link>
            <Link href="/referral" className="font-medium hover:text-accent transition">
              Referrals
            </Link>
          </nav>
          
          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-accent transition">
              <FiSearch className="w-5 h-5" />
            </button>
            <Link href="/cart" className="p-2 hover:text-accent transition relative">
              <FiShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart" className="p-2 hover:text-accent transition relative">
              <FiShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="p-2 hover:text-accent transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container-custom py-4 space-y-3">
              <Link 
                href="/products" 
                className="block py-2 hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/collections" 
                className="block py-2 hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                href="/best-sellers" 
                className="block py-2 hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Best Sellers
              </Link>
              <Link 
                href="/referral" 
                className="block py-2 hover:text-accent transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Referrals
              </Link>
              <div className="pt-2 border-t border-gray-200">
                <button className="flex items-center space-x-2 py-2 hover:text-accent transition">
                  <FiSearch className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}