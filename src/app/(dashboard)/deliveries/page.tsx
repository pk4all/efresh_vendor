import Link from 'next/link';

export default function Deliveries() {
  return (
    <div className="page active" id="page-deliveries">
      <div className="page-head">
        <div className="title">
          <h1>Deliveries</h1>
          <p>Upcoming confirmed POs and dispatch information. eFresh warehouse staff control goods receiving and GRNs.</p>
        </div>
      </div>
      
      <div className="grid-2">
        <div className="card">
          <div className="card-head">
            <div className="card-title">Upcoming Deliveries</div>
            <select className="select" style={{ width: '145px' }}>
              <option>Next 7 days</option>
              <option>Next 30 days</option>
            </select>
          </div>
          <div className="card-body" style={{ padding: 0 }}>
            <div className="delivery-card">
              <div className="delivery-date">
                <strong>15</strong><span>Aug</span>
              </div>
              <div>
                <h4>PO-2026-1175 · 14 items</h4>
                <p>Jims Fresh Main Warehouse · 6:00 AM – 10:00 AM</p>
                <div className="delivery-meta">
                  <span className="tag amber">Docket Required</span>
                  <span className="tag blue">$3,126.20</span>
                </div>
              </div>
              <button className="btn sm primary dispatch-btn">Add Dispatch</button>
            </div>
            
            <div className="delivery-card">
              <div className="delivery-date">
                <strong>15</strong><span>Aug</span>
              </div>
              <div>
                <h4>PO-2026-1171 · 7 items</h4>
                <p>Jims Fresh Main Warehouse · 10:00 AM – 2:00 PM</p>
                <div className="delivery-meta">
                  <span className="tag green">Dispatched</span>
                  <span className="tag">DCK-88031</span>
                </div>
              </div>
              <button className="btn sm">View</button>
            </div>
            
            <div className="delivery-card">
              <div className="delivery-date">
                <strong>16</strong><span>Aug</span>
              </div>
              <div>
                <h4>PO-2026-1165 · 12 items</h4>
                <p>North Warehouse · 6:00 AM – 10:00 AM</p>
                <div className="delivery-meta">
                  <span className="tag">Confirmed</span>
                  <span className="tag blue">$4,980.00</span>
                </div>
              </div>
              <button className="btn sm dispatch-btn">Dispatch</button>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card">
            <div className="card-head">
              <div className="card-title">Your Delivery Rules</div>
              <Link href="/account" className="btn sm page-link" style={{ textDecoration: 'none' }}>Edit</Link>
            </div>
            <div className="card-body">
              <div className="stat-row">
                <span>Delivery days</span>
                <strong>Monday–Saturday</strong>
              </div>
              <div className="stat-row">
                <span>Order cut-off</span>
                <strong>1 day before · 3:00 PM</strong>
              </div>
              <div className="stat-row">
                <span>Normal lead time</span>
                <strong>1 business day</strong>
              </div>
              <div className="stat-row">
                <span>Minimum order</span>
                <strong>$250.00</strong>
              </div>
              <div className="stat-row">
                <span>Receiving instruction</span>
                <strong>Rear loading dock</strong>
              </div>
            </div>
          </div>
          
          <div className="notice section-gap">
            eFresh records receiving quantities, rejections, batches and GRNs after delivery. Your portal displays those results but cannot change warehouse receiving records.
          </div>
        </div>
      </div>
    </div>
  );
}
