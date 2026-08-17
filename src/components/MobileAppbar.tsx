'use client';

import React from 'react';

export default function MobileAppbar() {
  return (
    <header className="appbar">
      <div className="brand-mini">
        <div className="logo">🚚</div>
        <div>
          <strong>eFresh Supplier</strong>
          <span>Mornington Produce Market</span>
        </div>
      </div>
      <div className="app-actions">
        <button className="icon-btn">
          🔔<i className="dot"></i>
        </button>
        <button className="icon-btn">MR</button>
      </div>
    </header>
  );
}
