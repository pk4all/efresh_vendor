'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', href: '/', icon: '⌂' },
    { name: 'POs', href: '/purchase-orders', icon: '▤' },
    { name: 'Products', href: '/products', icon: '▦' },
    { name: 'Invoices', href: '/invoices', icon: '▧' },
    { name: 'More', href: '/more', icon: '•••' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
        return (
          <Link 
            key={item.name} 
            href={item.href} 
            className={`bottom-btn ${isActive ? 'active' : ''}`}
          >
            <i>{item.icon}</i>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
