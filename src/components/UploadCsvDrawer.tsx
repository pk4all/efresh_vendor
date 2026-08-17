import React from 'react';
import { Drawer } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

interface UploadCsvDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadCsvDrawer({ isOpen, onClose }: UploadCsvDrawerProps) {
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
            <h2>Upload Product Catalogue</h2>
            <p>Import your supplier products, pricing and availability into your Supplier Catalogue.</p>
          </div>
          <button className="drawer-close" onClick={onClose}>×</button>
        </div>
        
        <div className="csv-steps">
          <div className="csv-step active"><i>1</i>Upload</div>
          <div className="csv-line"></div>
          <div className="csv-step"><i>2</i>Mapping</div>
          <div className="csv-line"></div>
          <div className="csv-step"><i>3</i>Review</div>
          <div className="csv-line"></div>
          <div className="csv-step"><i>✓</i>Result</div>
        </div>

        <div className="drawer-body" style={{ flex: 1, overflow: 'auto', padding: '15px 18px 82px' }}>
          
          <div className="saved-map" style={{ marginBottom: '15px' }}>
            <div>
              <strong>✓ CSV mapping already configured</strong>
              <span>7 fields mapped · last used today</span>
            </div>
            <button className="btn" style={{ background: '#eaf4ef', color: '#2b7852', border: '1px solid #cfe7da', fontWeight: 'bold' }}>Edit Mapping</button>
          </div>
          
          <div className="drawer-section">
            <div className="drawer-section-head">
              <strong>Upload CSV</strong>
              <span className="tag green">Saved Mapping Available</span>
            </div>
            <div className="drawer-section-body">
              <div className="dropzone">
                <div style={{ fontSize: '20px', color: '#4a82fb' }}>⇧</div>
                <strong style={{ fontSize: '13px', color: '#162b4d', marginTop: '6px' }}>Drop your supplier CSV here</strong>
                <span style={{ fontSize: '9px', color: '#8898aa', marginBottom: '8px' }}>or select a file</span>
                <button className="btn primary" style={{ background: '#2c63cf', color: '#fff', border: '0', padding: '10px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>Choose CSV</button>
                <small style={{ fontSize: '8px', color: '#a0aab8', display: 'block' }}>CSV / TSV · UTF-8 recommended</small>
                <div style={{ background: '#f0f3f7', padding: '5px 12px', borderRadius: '6px', fontSize: '9px', color: '#657488', fontWeight: '650', marginTop: '8px' }}>No file selected</div>
                <button className="btn" style={{ border: '1px solid #d0d7e2', padding: '7px 12px', borderRadius: '6px', background: '#fff', fontSize: '10px', color: '#536174', marginTop: '14px' }}>↓ Download Sample CSV</button>
              </div>
            </div>
          </div>
          
          <div className="drawer-section">
            <div className="drawer-section-head">
              <strong>Import Rules</strong>
            </div>
            <div className="drawer-section-body">
              <div className="form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Existing Supplier SKU</label>
                  <select className="input" style={{ width: '100%', padding: '9px', border: '1px solid #c9d2de', borderRadius: '6px', background: '#fff' }}>
                    <option>Update existing catalogue item</option>
                    <option>Skip existing item</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Encoding</label>
                  <select className="input" style={{ width: '100%', padding: '9px', border: '1px solid #c9d2de', borderRadius: '6px', background: '#fff' }}>
                    <option>UTF-8</option>
                    <option>ISO-8859-1</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ background: '#f2fbf6', border: '1px solid #cfe7da', borderRadius: '8px', padding: '12px 14px', fontSize: '10px', color: '#2a7550', marginTop: '12px' }}>
            <strong style={{ color: '#206542' }}>Saved mapping:</strong> Your usual CSV mapping will be applied automatically. Edit only if the column structure changed.
          </div>
          
        </div>
        
        <div className="drawer-footer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid var(--line)', padding: '11px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '10px', color: '#7c8b9f' }}>Select a CSV to continue.</div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" onClick={onClose} style={{ border: '1px solid #cbd5e1', padding: '9px 16px', borderRadius: '8px', background: '#fff', fontSize: '11px', fontWeight: 'bold', color: '#657488' }}>← Back</button>
            <button className="btn primary" style={{ background: '#2c63cf', color: '#fff', border: '0', padding: '9px 16px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>Continue →</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
