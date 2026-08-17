import React from 'react';
import { Drawer } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

interface AddDispatchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddDispatchDrawer({ isOpen, onClose }: AddDispatchDrawerProps) {
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
            <h2>Add Dispatch Details</h2>
            <p>PO-2026-1175 · add dispatch details</p>
          </div>
          <button className="drawer-close" onClick={onClose}>×</button>
        </div>
        
        <div className="drawer-body" style={{ flex: 1, overflow: 'auto', padding: '15px 18px 82px' }}>
          
          <div className="drawer-section">
            <div className="drawer-section-head">
              <strong>Dispatch</strong>
            </div>
            <div className="drawer-section-body">
              <div className="form-grid" style={{ marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Dispatch Date</label>
                  <input type="date" className="input" defaultValue="2026-08-14" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Expected Arrival</label>
                  <input type="datetime-local" className="input" defaultValue="2026-08-15T07:30" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
              </div>
              
              <div className="form-grid" style={{ marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Delivery Docket No.</label>
                  <input type="text" className="input" defaultValue="DCK-88042" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Driver / Carrier</label>
                  <input type="text" className="input" defaultValue="MPM Delivery Van 3" style={{ width: '100%', padding: '8px', border: '1px solid #c9d2de', borderRadius: '6px' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#657488', marginBottom: '5px' }}>Dispatch Note</label>
                <textarea className="input" defaultValue="All lines packed and dispatched. Refrigerated produce loaded at 4°C." style={{ width: '100%', padding: '10px', border: '1px solid #c9d2de', borderRadius: '6px', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
              </div>
            </div>
          </div>
          
          <div style={{ background: '#f2f8fc', border: '1px solid #d4e5f2', borderRadius: '8px', padding: '12px 14px', fontSize: '10px', color: '#316b9b', marginTop: '12px' }}>
            Marking dispatched does not mark the PO received. Vendor warehouse staff complete receiving and GRNs.
          </div>
          
        </div>
        
        <div className="drawer-footer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: '#fff', borderTop: '1px solid var(--line)', padding: '11px 18px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn" onClick={onClose} style={{ border: '1px solid #cbd5e1', padding: '9px 16px', borderRadius: '8px', background: '#fff', fontSize: '11px', fontWeight: 'bold' }}>Cancel</button>
            <button className="btn primary" onClick={onClose} style={{ background: '#25a86a', color: '#fff', border: '0', padding: '9px 16px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>Mark as Dispatched</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
