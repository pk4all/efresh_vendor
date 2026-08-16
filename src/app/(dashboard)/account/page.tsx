export default function Account() {
  return (
    <div className="page active" id="page-account">
      <div className="page-head">
        <div className="title">
          <h1>Company & Settings</h1>
          <p>Maintain supplier contacts, delivery schedule and notification preferences.</p>
        </div>
        <button className="btn success" id="save-account">Save Changes</button>
      </div>
      
      <div className="grid-3">
        <div className="card">
          <div className="card-head">
            <div className="card-title">Company Profile</div>
          </div>
          <div className="card-body">
            <div className="profile-card">
              <div className="big-avatar">MP</div>
              <div>
                <strong>Mornington Produce Market</strong>
                <span className="sub">SUP-1001 · Fresh Produce · Active</span>
                <span className="tag green" style={{ marginTop: '6px' }}>Verified Supplier</span>
              </div>
            </div>
            <div className="form-grid" style={{ marginTop: '12px' }}>
              <div>
                <label className="field-label">Primary Contact</label>
                <input className="input" defaultValue="Michael Russo" />
              </div>
              <div>
                <label className="field-label">Phone</label>
                <input className="input" defaultValue="03 5975 8800" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="field-label">Orders Email</label>
                <input className="input" defaultValue="orders@morningtonproduce.example" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="field-label">Address</label>
                <input className="input" defaultValue="45 Market Drive, Mornington VIC 3931" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-head">
            <div className="card-title">Delivery Schedule</div>
          </div>
          <div className="card-body">
            <label className="field-label">Delivery Days</label>
            <div className="days" id="account-days">
              <button className="day-btn active">Mon</button>
              <button className="day-btn active">Tue</button>
              <button className="day-btn active">Wed</button>
              <button className="day-btn active">Thu</button>
              <button className="day-btn active">Fri</button>
              <button className="day-btn active">Sat</button>
              <button className="day-btn">Sun</button>
            </div>
            <div style={{ marginTop: '11px' }}>
              <label className="field-label">Order Cut-off</label>
              <div className="cutoff-grid">
                <select className="select" id="account-cutoff-day" defaultValue="1 day before">
                  <option>Same day</option>
                  <option>1 day before</option>
                  <option>2 days before</option>
                  <option>3 days before</option>
                  <option>Previous business day</option>
                </select>
                <input className="input" id="account-cutoff-time" type="time" defaultValue="15:00" />
              </div>
            </div>
            <div className="notice" style={{ marginTop: '10px' }} id="account-cutoff-summary">
              Orders close 1 day before delivery at 3:00 PM.
            </div>
            <div style={{ marginTop: '10px' }}>
              <label className="field-label">Delivery / Receiving Notes</label>
              <textarea className="textarea" defaultValue="Deliver to rear loading dock. Call warehouse manager 20 minutes before arrival." />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-head">
            <div className="card-title">Commercial & Notifications</div>
          </div>
          <div className="card-body">
            <div className="stat-row"><span>Payment Terms</span><strong>14 Days</strong></div>
            <div className="stat-row"><span>Preferred Payment</span><strong>Bank Transfer</strong></div>
            <div className="stat-row"><span>Account Number</span><strong>EFRESH-8821</strong></div>
            <div style={{ marginTop: '12px', display: 'grid', gap: '8px', fontSize: '9.4px' }}>
              <label><input type="checkbox" defaultChecked /> Email me new purchase orders</label>
              <label><input type="checkbox" defaultChecked /> SMS urgent negotiation reminders</label>
              <label><input type="checkbox" defaultChecked /> Email payment remittances</label>
              <label><input type="checkbox" /> Weekly catalogue mapping summary</label>
            </div>
            <div className="notice" style={{ marginTop: '12px' }}>
              Payment terms and account approvals are controlled by eFresh.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
