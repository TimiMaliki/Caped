"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">CAPED</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Luxury fashion crafted in New York.  
              Designed for modern royalty.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="font-semibold mb-3">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/new" className="hover:text-black">New In</Link></li>
              <li><Link href="/collections" className="hover:text-black">Collections</Link></li>
              <li><Link href="/story" className="hover:text-black">Our Story</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-black">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-black">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-black">Returns</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold mb-3">Follow</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black">Instagram</a></li>
              <li><a href="#" className="hover:text-black">Twitter</a></li>
              <li><a href="#" className="hover:text-black">TikTok</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-black">
          <p>© {new Date().getFullYear()} Caped. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-black">Privacy</Link>
            <Link href="/terms" className="hover:text-black">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;