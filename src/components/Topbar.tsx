'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logout } from '@/app/actions';

export default function Topbar() {
  const pathname = usePathname();
  
  let title = 'Dashboard';
  if (pathname.includes('/purchase-orders')) title = 'Purchase Orders';
  else if (pathname.includes('/products')) title = 'Products';
  else if (pathname.includes('/invoices')) title = 'Invoices & Payments';
  else if (pathname.includes('/deliveries')) title = 'Deliveries';
  else if (pathname.includes('/account')) title = 'Company & Settings';

  return (
    <div className="topbar">
      <div className="crumb" id="breadcrumb">
        Supplier Portal / <strong>{title}</strong>
      </div>
      <div className="top-actions">
        <button className="top-icon" id="notification-btn">
          🔔<i className="notify-dot"></i>
        </button>
        <div className="profile">
          <div className="avatar">MR</div>
          <div>
            <strong>Michael Russo</strong>
            <small>Mornington Produce Market</small>
          </div>
        </div>
        <form action={logout}>
          <button type="submit" className="btn sm" id="logout-button" style={{ textDecoration: 'none', border: 'none', cursor: 'pointer' }}>
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
