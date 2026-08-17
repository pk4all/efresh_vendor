import React from 'react';
import { Drawer } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

interface ConnectApiDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectApiDrawer({ isOpen, onClose }: ConnectApiDrawerProps) {
  return (
    <Drawer 
      placement="right" 
      open={isOpen} 
      onClose={onClose} 
      size="calc(min(780px, 94vw))"
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
        <div className="drawer-head">
          <div className="drawer-title">
            <h2>Connect Catalogue API</h2>
            <p>Send your API information to Jims Fresh. The vendor reviews and activates the connection from their admin.</p>
          </div>
          <button className="drawer-close" onClick={onClose}>×</button>
        </div>
        
        <div className="drawer-body" style={{ flex: 1, overflow: 'auto', padding: '15px 18px 82px' }}>
          <div style={{ background: '#f4f8ff', border: '1px solid #d2dff6', borderRadius: '8px', padding: '12px 14px', fontSize: '11px', color: '#445b79', marginBottom: '16px' }}>
            <strong>Vendor:</strong> This connection request is for <strong>Jims Fresh</strong>. Your supplier portal cannot directly activate vendor-side integrations.
          </div>
          
          <div className="drawer-section">
            <div className="drawer-section-head">
              <strong>API Details</strong>
              <span className="tag blue">Supplier Provided</span>
            </div>
            <div className="drawer-section-body">
              <div className="form-grid" style={{ marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Integration Name</label>
                  <input type="text" className="input" defaultValue="Mornington Produce Catalogue API" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Environment</label>
                  <select className="input" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px', background: '#fff' }}>
                    <option>Production</option>
                    <option>Staging</option>
                  </select>
                </div>
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Base API URL</label>
                <input type="text" className="input" defaultValue="https://api.supplier.com.au/v1" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
              </div>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>API Documentation URL</label>
                <input type="text" className="input" defaultValue="https://docs.supplier.com.au/catalogue-api" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
              </div>
              
              <div className="form-grid" style={{ marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Authentication</label>
                  <select className="input" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px', background: '#fff' }}>
                    <option>API Key</option>
                    <option>OAuth 2.0</option>
                    <option>Basic Auth</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Preferred Sync</label>
                  <select className="input" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px', background: '#fff' }}>
                    <option>Hourly</option>
                    <option>Daily</option>
                    <option>Real-time</option>
                  </select>
                </div>
              </div>
              
              <div className="form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Catalogue Endpoint</label>
                  <input type="text" className="input" defaultValue="/products" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Price / Availability Endpoint</label>
                  <input type="text" className="input" defaultValue="/products/pricing" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="drawer-section">
            <div className="drawer-section-head">
              <strong>Credential Exchange</strong>
              <span className="tag amber">No Secrets in Email</span>
            </div>
            <div className="drawer-section-body">
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>How should Jims Fresh obtain API credentials?</label>
                <textarea className="input" placeholder="Example: Vendor admin should contact api-support@supplier.com.au for a key, or credentials can be exchanged by phone / secure vault." style={{ width: '100%', padding: '10px', border: '1px solid #c9d2de', borderRadius: '6px', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Technical Notes</label>
                <textarea className="input" placeholder="Rate limit, pagination, required headers, webhooks, sample payload notes..." style={{ width: '100%', padding: '10px', border: '1px solid #c9d2de', borderRadius: '6px', minHeight: '60px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
              </div>

              <div style={{ background: '#fdf6e9', border: '1px solid #f6e6cd', borderRadius: '8px', padding: '12px 14px', fontSize: '10px', color: '#88642a', marginTop: '12px' }}>
                <strong style={{ color: '#a67215' }}>Security:</strong> Do not include live API keys, passwords or bearer tokens in the email. The email should contain endpoint/documentation details and instructions for secure credential exchange.
              </div>
            </div>
          </div>

          <div className="drawer-section" style={{ marginTop: '16px' }}>
            <div className="drawer-section-head">
              <strong>Email Request to Vendor</strong>
              <span className="tag green">Jims Fresh</span>
            </div>
            <div className="drawer-section-body">
              <div className="form-grid" style={{ marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Send To</label>
                  <input type="text" className="input" defaultValue="Configured Jims Fresh Vendor Admin Email" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Request Status</label>
                  <input type="text" className="input" defaultValue="Not sent" disabled style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px', background: '#f9fafa', color: '#657488' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Message</label>
                <textarea className="input" defaultValue="Hi, our catalogue API is available for integration. Please review the endpoint and documentation and configure it for our supplier account." style={{ width: '100%', padding: '10px', border: '1px solid #c9d2de', borderRadius: '6px', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="drawer-footer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid var(--line)', padding: '11px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '10px', color: '#7c8b9f' }}>Vendor activation is required.</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" onClick={onClose} style={{ border: '1px solid #cbd5e1', padding: '9px 16px', borderRadius: '8px', background: '#fff', fontSize: '11px', fontWeight: 'bold' }}>Cancel</button>
            <button className="btn primary" onClick={onClose} style={{ background: '#2c63cf', color: '#fff', border: '0', padding: '9px 16px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>Send API Details to Jims Fresh</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
