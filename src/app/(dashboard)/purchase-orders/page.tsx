'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PurchaseOrders() {
  const [activeTab, setActiveTab] = useState('response');

  return (
    <div className="page active" id="page-purchase-orders">
      <div className="page-head">
        <div className="title">
          <h1>Purchase Orders</h1>
          <p>Review new price requests, confirmed orders and historical POs sent to your company.</p>
        </div>
      </div>
      <div className="card">
        <div className="tabs" id="po-tabs">
          <button 
            className={`tab ${activeTab === 'response' ? 'active' : ''}`} 
            onClick={() => setActiveTab('response')}
          >
            Need Response <span className="tag amber">3</span>
          </button>
          <button 
            className={`tab ${activeTab === 'confirmed' ? 'active' : ''}`} 
            onClick={() => setActiveTab('confirmed')}
          >
            Confirmed / In Progress <span className="tag blue">6</span>
          </button>
          <button 
            className={`tab ${activeTab === 'past' ? 'active' : ''}`} 
            onClick={() => setActiveTab('past')}
          >
            Delivered / Past
          </button>
        </div>
        
        {activeTab === 'response' && (
          <div className="po-tab-panel active" id="po-panel-response">
            <div className="card-head">
              <div className="card-title">Purchase Orders Requiring Response</div>
              <div className="toolbar">
                <div className="search">
                  <input placeholder="Search PO" />
                </div>
              </div>
            </div>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>PO Number</th>
                    <th>Created</th>
                    <th>Delivery</th>
                    <th>Items</th>
                    <th>Vendor Request</th>
                    <th>Round</th>
                    <th>Response Due</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="id">PO-2026-1185</span></td>
                    <td>14-Aug 5:42 PM</td>
                    <td>15-Aug</td>
                    <td>3</td>
                    <td>$745.00 est.</td>
                    <td>Round 1</td>
                    <td><strong style={{ color: '#b23b3b' }}>Today 10:00 AM</strong></td>
                    <td><span className="tag amber">New Price Request</span></td>
                    <td>
                      <Link href="/purchase-orders/PO-2026-1185" className="btn sm primary open-po" style={{ textDecoration: 'none' }}>Review & Respond</Link>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="id">PO-2026-1182</span></td>
                    <td>14-Aug 2:15 PM</td>
                    <td>16-Aug</td>
                    <td>8</td>
                    <td>$1,284.50</td>
                    <td>Round 2</td>
                    <td>15-Aug 11:00 AM</td>
                    <td><span className="tag blue">Counter Received</span></td>
                    <td>
                      <Link href="/purchase-orders/PO-2026-1182" className="btn sm primary open-po" style={{ textDecoration: 'none' }}>Respond</Link>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="id">PO-2026-1179</span></td>
                    <td>13-Aug 4:50 PM</td>
                    <td>15-Aug</td>
                    <td>11</td>
                    <td>$2,184.30</td>
                    <td>Round 2</td>
                    <td>15-Aug 2:00 PM</td>
                    <td><span className="tag amber">Needs Response</span></td>
                    <td>
                      <Link href="/purchase-orders/PO-2026-1179" className="btn sm primary open-po" style={{ textDecoration: 'none' }}>Respond</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'confirmed' && (
          <div className="po-tab-panel active" id="po-panel-confirmed">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>PO</th>
                    <th>Confirmed</th>
                    <th>Delivery</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Dispatch</th>
                    <th>Receiving</th>
                    <th>Invoice</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="id">PO-2026-1175</span></td>
                    <td>12-Aug</td>
                    <td>15-Aug</td>
                    <td>14</td>
                    <td>$3,126.20</td>
                    <td><span className="tag amber">Docket Needed</span></td>
                    <td><span className="tag">Awaiting Delivery</span></td>
                    <td><span className="tag">Not Uploaded</span></td>
                    <td><Link href="/deliveries" className="btn sm page-link" style={{ textDecoration: 'none' }}>Add Dispatch</Link></td>
                  </tr>
                  <tr>
                    <td><span className="id">PO-2026-1171</span></td>
                    <td>11-Aug</td>
                    <td>15-Aug</td>
                    <td>7</td>
                    <td>$1,862.00</td>
                    <td><span className="tag green">Dispatched</span></td>
                    <td><span className="tag">Awaiting Delivery</span></td>
                    <td><span className="tag blue">Uploaded</span></td>
                    <td><button className="btn sm">View</button></td>
                  </tr>
                  <tr>
                    <td><span className="id">PO-2026-1168</span></td>
                    <td>10-Aug</td>
                    <td>14-Aug</td>
                    <td>10</td>
                    <td>$2,914.30</td>
                    <td><span className="tag green">Delivered</span></td>
                    <td><span className="tag amber">Part Received</span></td>
                    <td><span className="tag blue">Uploaded</span></td>
                    <td><button className="btn sm">View Status</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'past' && (
          <div className="po-tab-panel active" id="po-panel-past">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>PO</th>
                    <th>Order Date</th>
                    <th>Delivered</th>
                    <th>Confirmed Total</th>
                    <th>Invoice</th>
                    <th>Invoice Total</th>
                    <th>Variance</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="id">PO-2026-1149</span></td>
                    <td>01-Aug</td>
                    <td>02-Aug</td>
                    <td>$4,219.80</td>
                    <td>INV-MPM-80592</td>
                    <td>$4,204.10</td>
                    <td style={{ color: '#198451' }}>-$15.70</td>
                    <td><span className="tag amber">Part Matched</span></td>
                    <td><Link href="/invoices" className="btn sm page-link" style={{ textDecoration: 'none' }}>View Invoice</Link></td>
                  </tr>
                  <tr>
                    <td><span className="id">PO-2026-1127</span></td>
                    <td>28-Jul</td>
                    <td>29-Jul</td>
                    <td>$3,118.00</td>
                    <td>INV-MPM-80514</td>
                    <td>$3,095.50</td>
                    <td style={{ color: '#198451' }}>-$22.50</td>
                    <td><span className="tag green">Closed</span></td>
                    <td><button className="btn sm">View PO</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
