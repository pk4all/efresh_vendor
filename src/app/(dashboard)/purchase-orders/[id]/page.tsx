'use client';

import { use } from 'react';
import Link from 'next/link';

export default function PODetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  return (
    <div className="page active" id="page-po-detail">
      <div className="page-head">
        <div className="title">
          <h1 id="po-detail-title">{resolvedParams.id}</h1>
          <p>Review the vendor's price request and respond line by line.</p>
        </div>
        <div className="actions">
          <Link href="/purchase-orders" className="btn page-link" style={{ textDecoration: 'none' }}>
            ← Purchase Orders
          </Link>
          <button className="btn success" id="submit-po-response">
            Submit Response to Jims Fresh
          </button>
        </div>
      </div>
      
      <div className="notice warn" style={{ marginBottom: '11px' }}>
        <strong>Response required.</strong>
        <div>Accept the requested price, counter with another price, or mark an item unavailable.</div>
      </div>
      
      <div className="po-header-grid">
        <div className="po-kv">
          <label>PO Number</label>
          <strong>{resolvedParams.id}</strong>
        </div>
        <div className="po-kv">
          <label>Requested Delivery</label>
          <strong>15-Aug-2026</strong>
        </div>
        <div className="po-kv">
          <label>Deliver To</label>
          <strong>Jims Fresh Main Warehouse</strong>
        </div>
        <div className="po-kv">
          <label>Negotiation</label>
          <strong>Round 1</strong>
        </div>
        <div className="po-kv">
          <label>Response Due</label>
          <strong style={{ color: '#b23b3b' }}>Today · 10:00 AM</strong>
        </div>
      </div>
      
      <div className="card">
        <div className="card-head">
          <div className="card-title">Price & Availability Response</div>
          <div className="flow">
            <div className="flow-step on">
              <span className="flow-dot">✓</span>Vendor Request
            </div>
            <div className="flow-step on">
              <span className="flow-dot">2</span>Your Review
            </div>
            <div className="flow-step">
              <span className="flow-dot">3</span>Vendor Decision
            </div>
            <div className="flow-step">
              <span className="flow-dot">4</span>Confirmed
            </div>
          </div>
        </div>
        <div className="table-wrap">
          <table className="negotiation-table" id="supplier-negotiation-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Supply Unit</th>
                <th>Reference</th>
                <th>Vendor Requested</th>
                <th>Your Response</th>
                <th>Your Price</th>
                <th>Availability / Note</th>
                <th>Line Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Apple Fuji Large</strong>
                  <span className="sub">MPM-APL-FUJI-LG</span>
                </td>
                <td>8</td>
                <td>Box 18kg</td>
                <td>$47.00</td>
                <td>
                  <strong>$44.50</strong>
                  <span className="sub">Target based on volume</span>
                </td>
                <td>
                  <select className="po-response" defaultValue="counter">
                    <option value="accept">Accept requested price</option>
                    <option value="counter">Counter / update price</option>
                    <option value="unavailable">Product unavailable</option>
                  </select>
                </td>
                <td className="supplier-offer">
                  <input className="po-offer" type="number" defaultValue="45.50" step=".01" />
                </td>
                <td>
                  <input className="po-note" defaultValue="Can supply full quantity" />
                </td>
                <td className="po-line-total">$364.00</td>
              </tr>
              <tr>
                <td>
                  <strong>Hass Avocado</strong>
                  <span className="sub">MPM-AVO-HASS-25</span>
                </td>
                <td>12</td>
                <td>Tray 25</td>
                <td>$29.50</td>
                <td>
                  <strong>$29.50</strong>
                  <span className="sub">Use current price</span>
                </td>
                <td>
                  <select className="po-response" defaultValue="accept">
                    <option value="accept">Accept requested price</option>
                    <option value="counter">Counter / update price</option>
                    <option value="unavailable">Product unavailable</option>
                  </select>
                </td>
                <td className="supplier-offer">
                  <input className="po-offer" type="number" defaultValue="29.50" step=".01" />
                </td>
                <td>
                  <input className="po-note" defaultValue="In stock" />
                </td>
                <td className="po-line-total">$354.00</td>
              </tr>
              <tr>
                <td>
                  <strong>Broccoli</strong>
                  <span className="sub">MPM-BROC-10KG</span>
                </td>
                <td>10</td>
                <td>Box 10kg</td>
                <td>Not available</td>
                <td>
                  <strong>Please quote</strong>
                </td>
                <td>
                  <select className="po-response" defaultValue="counter">
                    <option value="accept">Accept requested price</option>
                    <option value="counter">Counter / update price</option>
                    <option value="unavailable">Product unavailable</option>
                  </select>
                </td>
                <td className="supplier-offer">
                  <input className="po-offer" type="number" defaultValue="22.75" step=".01" />
                </td>
                <td>
                  <input className="po-note" defaultValue="Limited but can supply 10" />
                </td>
                <td className="po-line-total">$227.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="negotiation-summary">
        <div className="card">
          <div className="card-head">
            <div className="card-title">Negotiation Notes</div>
          </div>
          <div className="card-body">
            <div className="note-thread" id="po-note-thread">
              <div className="party-note">
                <div className="note-meta">
                  <strong>eFresh · Jims Admin</strong>
                  <span>14-Aug 5:42 PM</span>
                </div>
                <p>
                  Please confirm availability. Apple price is requested at $44.50 per box due to volume. Please quote the Broccoli price.
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '7px', marginTop: '9px' }}>
              <textarea className="textarea" id="supplier-po-note" style={{ minHeight: '58px' }} placeholder="Add an order-wide note..."></textarea>
              <button className="btn soft" id="add-po-note">Add Note</button>
            </div>
          </div>
        </div>
        
        <div className="totals">
          <div className="total-row">
            <span>Priced Line Subtotal</span>
            <strong id="po-subtotal">$945.50</strong>
          </div>
          <div className="total-row">
            <span>Cart Discount</span>
            <div style={{ display: 'flex', gap: '5px' }}>
              <select id="po-discount-type" className="select" style={{ width: '92px', padding: '4px' }}>
                <option value="none">None</option>
                <option value="percent">%</option>
                <option value="amount">$</option>
              </select>
              <input id="po-discount-value" className="input" type="number" defaultValue="0" style={{ width: '70px', padding: '4px' }} />
            </div>
          </div>
          <div className="total-row">
            <span>Discount Amount</span>
            <strong id="po-discount">-$0.00</strong>
          </div>
          <div className="total-row">
            <span>Freight</span>
            <strong>$35.00</strong>
          </div>
          <div className="total-row grand">
            <span>Your Offer Total</span>
            <strong id="po-total">$980.50</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
