import Link from 'next/link';
import { logout } from '@/app/actions';

export default function MorePage() {
  return (
    <div>
      <div className="page-head" style={{ marginBottom: '20px' }}>
        <div className="title">
          <h1>More</h1>
          <p>Deliveries, company settings and supplier account.</p>
        </div>
      </div>
      
      <div className="card">
        <div className="card-body" style={{ padding: 0 }}>
          <Link href="/deliveries" className="action-card" style={{ width: '100%', border: 0, background: '#fff', textAlign: 'left', padding: '11px', textDecoration: 'none', color: 'inherit', display: 'grid' }}>
            <div className="action-icon">▱</div>
            <div>
              <strong>Deliveries</strong>
              <p style={{ margin: '2px 0 0', color: '#7b8798', fontSize: '8.7px' }}>Upcoming POs and dispatch details</p>
            </div>
            <span>›</span>
          </Link>

          <Link href="/account" className="action-card" style={{ width: '100%', border: 0, background: '#fff', textAlign: 'left', padding: '11px', textDecoration: 'none', color: 'inherit', display: 'grid' }}>
            <div className="action-icon">⚙</div>
            <div>
              <strong>Company & Settings</strong>
              <p style={{ margin: '2px 0 0', color: '#7b8798', fontSize: '8.7px' }}>Contacts, delivery schedule and notifications</p>
            </div>
            <span>›</span>
          </Link>

          <button className="action-card" style={{ width: '100%', border: 0, background: '#fff', textAlign: 'left', padding: '11px', display: 'grid' }}>
            <div className="action-icon">?</div>
            <div>
              <strong>Help & Support</strong>
              <p style={{ margin: '2px 0 0', color: '#7b8798', fontSize: '8.7px' }}>Contact the eFresh team</p>
            </div>
            <span>›</span>
          </button>

          <form action={logout} style={{ width: '100%', margin: 0 }}>
            <button type="submit" className="action-card" style={{ width: '100%', border: 0, background: '#fff', textAlign: 'left', padding: '11px', display: 'grid' }}>
              <div className="action-icon">↪</div>
              <div>
                <strong>Logout</strong>
                <p style={{ margin: '2px 0 0', color: '#7b8798', fontSize: '8.7px' }}>Sign out of supplier portal</p>
              </div>
              <span>›</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
