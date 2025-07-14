'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Truck, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Set mounted state
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle scroll and click outside only after mounting
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    // Initial scroll check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mounted, isScrolled]);

  const handleDropdownClick = (itemName: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const navigation = [
    { 
      name: 'Long Distance Movers',
      href: '/long-distance-movers',
    },
    { 
      name: 'Moving Resources',
      href: '/moving-resources',
      children: [
        { name: 'Moving Tips', href: '/moving-resources#tips' },
        { name: 'Moving Checklist', href: '/moving-resources#checklist' },
        { name: 'Packing Guides', href: '/moving-resources#packing' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Only render content after mounting
  if (!mounted) {
    return null; // Return null on server-side
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-lg bg-white/80 shadow-lg' 
          : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                MovingStar
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2" ref={dropdownRef}>
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
              >
                {item.children ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => handleDropdownClick(item.name, e)}
                      className={`text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl hover:bg-blue-50/50 ${
                        activeDropdown === item.name ? 'text-blue-600 bg-blue-50/50' : ''
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 inline-block transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 rounded-xl shadow-xl bg-white/95 backdrop-blur-lg ring-1 ring-black/5 focus:outline-none overflow-hidden"
                        >
                          <div className="py-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50/50 hover:text-blue-600 transition-colors duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.href}>
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`text-gray-700 hover:text-blue-600 px-4 py-2.5 text-sm font-medium transition-all duration-200 rounded-xl hover:bg-blue-50/50 block ${
                        pathname === item.href ? 'text-blue-600 bg-blue-50/50' : ''
                      }`}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center text-sm text-gray-600 bg-blue-50/50 rounded-xl px-4 py-2.5 shadow-sm backdrop-blur-sm"
            >
              <Phone className="h-4 w-4 mr-2 text-blue-600" />
              <span className="font-medium">(800) MOVING-1</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="sm" variant="primary" className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-105">
                Get Free Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 p-2 rounded-xl hover:bg-blue-50/50 transition-all duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-lg rounded-xl mb-4 shadow-lg">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          className="text-gray-700 px-4 py-3 text-base font-medium flex justify-between items-center w-full hover:text-blue-600 hover:bg-blue-50/50 rounded-xl"
                          onClick={(e) => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-medium rounded-xl hover:bg-blue-50/50 transition-all duration-200 ${
                          pathname === item.href ? 'text-blue-600 bg-blue-50/50' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center text-sm text-gray-600 mb-3 px-4 py-2.5 bg-blue-50/50 rounded-xl"
                  >
                    <Phone className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">(800) MOVING-1</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="sm" variant="primary" className="w-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      Get Free Quote
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
} 