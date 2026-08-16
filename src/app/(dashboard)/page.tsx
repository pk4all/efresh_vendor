import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="page active" id="page-dashboard">
      <div className="page-head">
        <div className="title">
          <h1>Good evening, Michael</h1>
          <p>Here's what needs attention across your eFresh supplier account.</p>
        </div>
        <div className="actions">
          <Link href="/products" className="btn soft page-link" style={{ textDecoration: 'none' }}>
            Upload Catalogue
          </Link>
          <Link href="/purchase-orders" className="btn primary page-link" style={{ textDecoration: 'none' }}>
            Review New POs
          </Link>
        </div>
      </div>
      
      <div className="metrics">
        <div className="metric amber">
          <div>
            <label>POs Need Response</label>
            <strong>3</strong>
            <small>1 response due today</small>
          </div>
          <div className="metric-icon">⏳</div>
        </div>
        <div className="metric green">
          <div>
            <label>Confirmed POs</label>
            <strong>6</strong>
            <small>$18,462 due for delivery</small>
          </div>
          <div className="metric-icon">✓</div>
        </div>
        <div className="metric blue">
          <div>
            <label>Products Supplied</label>
            <strong>148</strong>
            <small>112 where you are default</small>
          </div>
          <div className="metric-icon">▦</div>
        </div>
        <div className="metric red">
          <div>
            <label>Outstanding Invoices</label>
            <strong>$12,480</strong>
            <small>1 invoice requires review</small>
          </div>
          <div className="metric-icon">$</div>
        </div>
      </div>

      <div className="grid-2">
        <div>
          <div className="card">
            <div className="card-head">
              <div className="card-title">
                Action Centre <small>Items that need a supplier response</small>
              </div>
              <span className="tag amber">5 actions</span>
            </div>
            <div className="card-body action-list">
              <div className="action-item">
                <div className="action-icon">↔</div>
                <div>
                  <strong>PO-2026-1185 · Price response due</strong>
                  <p>3 lines · eFresh requested updated pricing · response due today.</p>
                </div>
                <Link href="/purchase-orders/PO-2026-1185" className="btn sm primary open-po" style={{ textDecoration: 'none' }}>Respond</Link>
              </div>
              <div className="action-item">
                <div className="action-icon">▦</div>
                <div>
                  <strong>18 new catalogue products need vendor mapping</strong>
                  <p>From your most recent CSV import. Products are visible in Supplier Catalogue.</p>
                </div>
                <Link href="/products" className="btn sm soft page-link" style={{ textDecoration: 'none' }}>Review</Link>
              </div>
              <div className="action-item">
                <div className="action-icon">▧</div>
                <div>
                  <strong>INV-MPM-80592 has a price variance</strong>
                  <p>Part matched against PO-2026-1149. Review variance or issue credit note.</p>
                </div>
                <Link href="/invoices" className="btn sm page-link" style={{ textDecoration: 'none' }}>Open</Link>
              </div>
              <div className="action-item">
                <div className="action-icon">▱</div>
                <div>
                  <strong>Tomorrow's delivery needs dispatch details</strong>
                  <p>PO-2026-1175 · 14 items · Jims Fresh Main Warehouse.</p>
                </div>
                <Link href="/deliveries" className="btn sm page-link" style={{ textDecoration: 'none' }}>Add Docket</Link>
              </div>
            </div>
          </div>
          <div className="card section-gap">
            <div className="card-head">
              <div className="card-title">Recent Purchase Orders</div>
              <Link href="/purchase-orders" className="btn sm page-link" style={{ textDecoration: 'none' }}>View All</Link>
            </div>
            <div className="card-body" style={{ padding: 0 }}>
              <div className="table-wrap">
                <table className="table" style={{ minWidth: '820px' }}>
                  <thead>
                    <tr>
                      <th>PO</th>
                      <th>Created</th>
                      <th>Delivery</th>
                      <th>Items</th>
                      <th>Value</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="id">PO-2026-1185</span></td>
                      <td>14-Aug</td>
                      <td>15-Aug</td>
                      <td>3</td>
                      <td>$745.00 est.</td>
                      <td><span className="tag amber">Needs Response</span></td>
                      <td><Link href="/purchase-orders/PO-2026-1185" className="btn sm primary open-po" style={{ textDecoration: 'none' }}>Respond</Link></td>
                    </tr>
                    <tr>
                      <td><span className="id">PO-2026-1175</span></td>
                      <td>12-Aug</td>
                      <td>15-Aug</td>
                      <td>14</td>
                      <td>$3,126.20</td>
                      <td><span className="tag blue">Confirmed</span></td>
                      <td><Link href="/deliveries" className="btn sm page-link" style={{ textDecoration: 'none' }}>Delivery</Link></td>
                    </tr>
                    <tr>
                      <td><span className="id">PO-2026-1169</span></td>
                      <td>11-Aug</td>
                      <td>14-Aug</td>
                      <td>9</td>
                      <td>$2,440.50</td>
                      <td><span className="tag green">Delivered</span></td>
                      <td><Link href="/invoices" className="btn sm page-link" style={{ textDecoration: 'none' }}>Invoice</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-head">
              <div className="card-title">Delivery Schedule</div>
              <Link href="/account" className="btn sm page-link" style={{ textDecoration: 'none' }}>Edit</Link>
            </div>
            <div className="card-body">
              <strong style={{ fontSize: '10.5px' }}>Normal delivery days</strong>
              <div className="schedule-mini">
                <span className="on">Mon</span>
                <span className="on">Tue</span>
                <span className="on">Wed</span>
                <span className="on">Thu</span>
                <span className="on">Fri</span>
                <span className="on">Sat</span>
                <span>Sun</span>
              </div>
              <div className="notice" style={{ marginTop: '10px' }}>
                Orders close <strong>1 day before delivery at 3:00 PM</strong>.
              </div>
            </div>
          </div>
          <div className="card section-gap">
            <div className="card-head">
              <div className="card-title">Catalogue Health</div>
            </div>
            <div className="card-body">
              <div className="stat-row"><span>Mapped products</span><strong>148</strong></div>
              <div className="stat-row"><span>Default supplier products</span><strong>112</strong></div>
              <div className="stat-row"><span>Raw catalogue items</span><strong>312</strong></div>
              <div className="stat-row"><span>Awaiting vendor mapping</span><strong style={{ color: '#9b6407' }}>18</strong></div>
              <div className="stat-row"><span>Last CSV import</span><strong>Today · 4:18 PM</strong></div>
            </div>
          </div>
          <div className="card section-gap">
            <div className="card-head">
              <div className="card-title">Account Snapshot</div>
            </div>
            <div className="card-body">
              <div className="stat-row"><span>Payment terms</span><strong>14 Days</strong></div>
              <div className="stat-row"><span>Paid this month</span><strong>$31,620</strong></div>
              <div className="stat-row"><span>Due in 7 days</span><strong>$8,915</strong></div>
              <div className="stat-row"><span>Credit note balance</span><strong>$380</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
