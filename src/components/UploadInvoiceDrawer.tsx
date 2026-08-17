import React from 'react';
import { Drawer } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

interface UploadInvoiceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadInvoiceDrawer({ isOpen, onClose }: UploadInvoiceDrawerProps) {
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
            <h2>Upload Invoice</h2>
            <p>Attach the supplier invoice to a Jims Fresh purchase order.</p>
          </div>
          <button className="drawer-close" onClick={onClose}>×</button>
        </div>
        
        <div className="drawer-body" style={{ flex: 1, overflow: 'auto', padding: '15px 18px 82px' }}>
          
          <div className="drawer-section">
            <div className="drawer-section-head">
              <strong>Invoice Details</strong>
            </div>
            <div className="drawer-section-body">
              <div className="form-grid" style={{ marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Invoice Number</label>
                  <input type="text" className="input" defaultValue="INV-MPM-80655" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Invoice Date</label>
                  <input type="date" className="input" defaultValue="2026-08-14" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
              </div>
              
              <div className="form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Related PO</label>
                  <select className="input" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px', background: '#fff' }}>
                    <option>PO-2026-1175</option>
                    <option>PO-2026-1149</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Invoice Total</label>
                  <input type="number" className="input" defaultValue="3126.20" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="drawer-section">
            <div className="drawer-section-head">
              <strong>Invoice File</strong>
            </div>
            <div className="drawer-section-body">
              <div className="dropzone" style={{ minHeight: '120px' }}>
                <strong style={{ fontSize: '11px', color: '#162b4d', marginTop: '6px' }}>Drop invoice here or choose file</strong>
                <span style={{ fontSize: '9px', color: '#8898aa', marginBottom: '8px' }}>PDF, JPG or PNG</span>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                  <button className="btn" style={{ border: '1px solid #c9d2de', background: '#f5f7fa', padding: '6px 12px', borderRadius: '4px', fontSize: '11px', color: '#333' }}>Choose File</button>
                  <span style={{ fontSize: '11px', color: '#666' }}>No file chosen</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ background: '#f2f8fc', border: '1px solid #d4e5f2', borderRadius: '8px', padding: '12px 14px', fontSize: '10px', color: '#316b9b', marginTop: '12px' }}>
            Jims Fresh will match the invoice against the confirmed PO and accepted goods receipt. Variances will appear in your invoice status.
          </div>
          
        </div>
        
        <div className="drawer-footer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid var(--line)', padding: '11px 18px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" onClick={onClose} style={{ border: '1px solid #cbd5e1', padding: '9px 16px', borderRadius: '8px', background: '#fff', fontSize: '11px', fontWeight: 'bold' }}>Cancel</button>
            <button className="btn primary" onClick={onClose} style={{ background: '#25a86a', color: '#fff', border: '0', padding: '9px 16px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>Submit Invoice</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
