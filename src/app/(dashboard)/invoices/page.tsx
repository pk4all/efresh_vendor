'use client';

import { useState } from 'react';

export default function Invoices() {
  const [activeTab, setActiveTab] = useState('invoices');

  return (
    <div className="page active" id="page-invoices">
      <div className="page-head">
        <div className="title">
          <h1>Invoices & Payments</h1>
          <p>Submit invoices against confirmed POs and track matching, approval and payment status.</p>
        </div>
        <button className="btn primary" id="open-invoice-upload">＋ Upload Invoice</button>
      </div>
      
      <div className="metrics">
        <div className="metric blue">
          <div>
            <label>Outstanding</label>
            <strong>$12,480</strong>
            <small>Open invoices</small>
          </div>
          <div className="metric-icon">$</div>
        </div>
        <div className="metric green">
          <div>
            <label>Paid This Month</label>
            <strong>$31,620</strong>
            <small>Payments completed</small>
          </div>
          <div className="metric-icon">✓</div>
        </div>
        <div className="metric amber">
          <div>
            <label>Due in 7 Days</label>
            <strong>$8,915</strong>
            <small>Approved invoices</small>
          </div>
          <div className="metric-icon">▧</div>
        </div>
        <div className="metric red">
          <div>
            <label>Requires Review</label>
            <strong>1</strong>
            <small>Invoice / PO variance</small>
          </div>
          <div className="metric-icon">!</div>
        </div>
      </div>
      
      <div className="card">
        <div className="tabs" id="invoice-tabs">
          <button 
            className={`tab ${activeTab === 'invoices' ? 'active' : ''}`} 
            onClick={() => setActiveTab('invoices')}
          >
            Invoices
          </button>
          <button 
            className={`tab ${activeTab === 'payments' ? 'active' : ''}`} 
            onClick={() => setActiveTab('payments')}
          >
            Payments
          </button>
          <button 
            className={`tab ${activeTab === 'credits' ? 'active' : ''}`} 
            onClick={() => setActiveTab('credits')}
          >
            Credit Notes
          </button>
        </div>
        
        {activeTab === 'invoices' && (
          <div className="invoice-tab-panel active" id="invoice-panel-invoices">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Invoice</th>
                    <th>Invoice Date</th>
                    <th>PO</th>
                    <th>Invoice Total</th>
                    <th>Due Date</th>
                    <th>Matching</th>
                    <th>Payment Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="id">INV-MPM-80621</span></td>
                    <td>05-Aug</td>
                    <td>PO-2026-1175</td>
                    <td>$3,126.20</td>
                    <td>19-Aug</td>
                    <td><span className="tag green">Matched</span></td>
                    <td><span className="tag blue">Approved</span></td>
                    <td><button className="btn sm">View</button></td>
                  </tr>
                  <tr>
                    <td><span className="id">INV-MPM-80592</span></td>
                    <td>01-Aug</td>
                    <td>PO-2026-1149</td>
                    <td>$4,204.10</td>
                    <td>15-Aug</td>
                    <td><span className="tag amber">Part Matched</span></td>
                    <td><span className="tag amber">Review Required</span></td>
                    <td>
                      <div className="stack">
                        <button className="btn sm">View Variance</button>
                        <button className="btn sm soft" id="quick-credit">Credit Note</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td><span className="id">INV-MPM-80488</span></td>
                    <td>20-Jul</td>
                    <td>PO-2026-1112</td>
                    <td>$1,240.00</td>
                    <td>03-Aug</td>
                    <td><span className="tag green">Matched</span></td>
                    <td><span className="tag red">Overdue</span></td>
                    <td><button className="btn sm">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'payments' && (
          <div className="invoice-tab-panel active" id="invoice-panel-payments">
            <div className="table-wrap">
              <table className="table" style={{ minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th>Payment Date</th>
                    <th>Reference</th>
                    <th>Invoices</th>
                    <th>Method</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12-Aug</td>
                    <td>PAY-2026-8891</td>
                    <td>INV-MPM-80514, 80472</td>
                    <td>Bank Transfer</td>
                    <td>$8,135.75</td>
                    <td><span className="tag green">Paid</span></td>
                  </tr>
                  <tr>
                    <td>05-Aug</td>
                    <td>PAY-2026-8744</td>
                    <td>INV-MPM-80398</td>
                    <td>Bank Transfer</td>
                    <td>$5,440.00</td>
                    <td><span className="tag green">Paid</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'credits' && (
          <div className="invoice-tab-panel active" id="invoice-panel-credits">
            <div className="table-wrap">
              <table className="table" style={{ minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th>Credit Note</th>
                    <th>Date</th>
                    <th>Invoice / PO</th>
                    <th>Reason</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CR-MPM-1094</td>
                    <td>28-Jul</td>
                    <td>PO-2026-1127</td>
                    <td>Rejected produce / quantity adjustment</td>
                    <td>-$380.00</td>
                    <td><span className="tag green">Applied</span></td>
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
