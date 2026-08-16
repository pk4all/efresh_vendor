'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: '⌂' },
    { name: 'Purchase Orders', path: '/purchase-orders', icon: '▤', count: 3 },
    { name: 'Products', path: '/products', icon: '▦', count: 4 },
    { name: 'Invoices & Payments', path: '/invoices', icon: '▧', count: 1 },
    { name: 'Deliveries', path: '/deliveries', icon: '▱', count: 4 },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">🚚</div>
        <div className="brand-name">
          eFresh<small>Supplier Portal</small>
        </div>
      </div>
      <div className="nav">
        <div className="nav-label">Workspace</div>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`nav-item ${pathname === item.path ? 'active' : ''}`}
            style={{ textDecoration: 'none' }}
          >
            {item.icon} {item.name}
            {item.count && <span className="nav-count">{item.count}</span>}
          </Link>
        ))}
        <div className="nav-label">Account</div>
        <Link
          href="/account"
          className={`nav-item ${pathname === '/account' ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          ⚙ Company & Settings
        </Link>
        <button className="nav-item" id="help-btn">
          ? Help & Support
        </button>
      </div>
      <div className="sidebar-foot">
        <div className="supplier-card">
          <strong>Mornington Produce Market</strong>
          <span>SUP-1001 · Active</span>
          <span style={{ marginTop: '6px', color: '#a9bfd5' }}>
            Mon–Sat · Cut-off 1 day before at 3:00 PM
          </span>
        </div>
      </div>
    </aside>
  );
}
