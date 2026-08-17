'use client';

import { useState } from 'react';
import ConnectApiDrawer from '@/components/ConnectApiDrawer';
import UploadCsvDrawer from '@/components/UploadCsvDrawer';

export default function Products() {
  const [activeTab, setActiveTab] = useState('mapped');
  const [isApiDrawerOpen, setIsApiDrawerOpen] = useState(false);
  const [isCsvDrawerOpen, setIsCsvDrawerOpen] = useState(false);

  return (
    <div className="page active" id="page-products">
      <div className="page-head">
        <div className="title">
          <h1>Products</h1>
          <p>Keep the products you supply to Jims Fresh current and manage your raw supplier catalogue.</p>
        </div>
        <div className="actions">
          <button className="btn" id="download-sample-csv">↓ Sample CSV</button>
          <button className="btn soft" id="open-api-setup" onClick={() => setIsApiDrawerOpen(true)}>🔌 Connect API</button>
          <button className="btn primary" id="open-csv" onClick={() => setIsCsvDrawerOpen(true)}>⇧ Upload Product CSV</button>
        </div>
      </div>
      
      <div className="product-summary-strip">
        <div className="summary-box"><label>Products You Supply</label><strong>148</strong></div>
        <div className="summary-box"><label>You Are Default Supplier</label><strong>112</strong></div>
        <div className="summary-box"><label>Raw Catalogue Items</label><strong>312</strong></div>
        <div className="summary-box"><label>Awaiting Vendor Mapping</label><strong style={{ color: '#9b6407' }}>18</strong></div>
      </div>
      
      <div className="card">
        <div className="tabs" id="product-tabs">
          <button 
            className={`tab ${activeTab === 'mapped' ? 'active' : ''}`} 
            onClick={() => setActiveTab('mapped')}
          >
            Products We Supply
          </button>
          <button 
            className={`tab ${activeTab === 'catalogue' ? 'active' : ''}`} 
            onClick={() => setActiveTab('catalogue')}
          >
            Supplier Catalogue
          </button>
        </div>
        
        {activeTab === 'mapped' && (
          <div className="product-tab-panel active" id="product-panel-mapped">
            <div className="card-head">
              <div>
                <div className="card-title">Products We Supply <small>Already assigned or mapped to your supplier account</small></div>
                <div className="helper">eFresh controls the internal product. You can maintain your SKU, supply unit, price, MOQ, availability and supplier conversion.</div>
              </div>
              <div className="toolbar">
                <div className="search"><input placeholder="Search product / SKU" /></div>
                <select className="select" style={{ width: '155px' }}>
                  <option>All supplier roles</option>
                  <option>Default Supplier</option>
                  <option>Alternate Supplier</option>
                </select>
              </div>
            </div>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Vendor Product</th>
                    <th>Your SKU</th>
                    <th>Your Role</th>
                    <th>Supply Unit</th>
                    <th>Current Price</th>
                    <th>Unit Conversion</th>
                    <th>Availability</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-thumb">🍎</div>
                        <div><strong>Apple Fuji Large</strong><span className="sub">Fruit & Veg / Fruit · AFL13</span></div>
                      </div>
                    </td>
                    <td>MPM-APL-FUJI-LG</td>
                    <td><span className="tag blue">Default Supplier</span></td>
                    <td>Box 18kg</td>
                    <td><strong>$47.00</strong></td>
                    <td>72 Each · 18 Kg</td>
                    <td><span className="tag green">In Stock</span></td>
                    <td>Today 4:00 PM</td>
                    <td><button className="btn sm edit-product">Update</button></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-thumb">🥑</div>
                        <div><strong>Hass Avocado</strong><span className="sub">Fruit & Veg / Fruit · AVO08</span></div>
                      </div>
                    </td>
                    <td>MPM-AVO-HASS-25</td>
                    <td><span className="tag blue">Default Supplier</span></td>
                    <td>Tray 25</td>
                    <td><strong>$29.50</strong></td>
                    <td>25 Each · 1 Tray</td>
                    <td><span className="tag green">In Stock</span></td>
                    <td>Today 4:00 PM</td>
                    <td><button className="btn sm edit-product">Update</button></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-thumb">🍓</div>
                        <div><strong>Strawberries 250g</strong><span className="sub">Fruit & Veg / Berries · STR250</span></div>
                      </div>
                    </td>
                    <td>MPM-STR-PREM-250</td>
                    <td><span className="tag">Alternate Supplier</span></td>
                    <td>Tray 12 punnets</td>
                    <td><strong>$33.00</strong></td>
                    <td>12 Punnet · 1 Tray</td>
                    <td><span className="tag green">In Stock</span></td>
                    <td>Today 4:00 PM</td>
                    <td><button className="btn sm edit-product">Update</button></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-thumb">🥕</div>
                        <div><strong>Carrots Loose</strong><span className="sub">Fruit & Veg / Vegetables · CRT01</span></div>
                      </div>
                    </td>
                    <td>MPM-CAR-PREM-10</td>
                    <td><span className="tag">Alternate Supplier</span></td>
                    <td>Bag 10kg</td>
                    <td><strong>$16.90</strong></td>
                    <td>10 Kg · 1 Bag</td>
                    <td><span className="tag green">In Stock</span></td>
                    <td>Yesterday</td>
                    <td><button className="btn sm edit-product">Update</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'catalogue' && (
          <div className="product-tab-panel active" id="product-panel-catalogue">
            <div className="card-head">
              <div>
                <div className="card-title">Your Supplier Catalogue <small>Raw product feed uploaded or synced by your company</small></div>
                <div className="helper">New catalogue items do not automatically become vendor products. Jims Fresh reviews and maps them.</div>
              </div>
              <div className="actions">
                <button className="btn" id="download-sample-csv-2">↓ Sample CSV</button>
                <button className="btn soft" id="open-api-setup-2" onClick={() => setIsApiDrawerOpen(true)}>🔌 API Setup</button>
                <button className="btn soft" id="catalogue-settings">CSV Mapping Settings</button>
                <button className="btn primary" id="open-csv-2" onClick={() => setIsCsvDrawerOpen(true)}>⇧ Upload CSV</button>
              </div>
            </div>
            <div className="card-body">
              <div className="catalogue-source-strip">
                <div>
                  <label>Catalogue Source</label>
                  <strong id="catalogue-source-status">CSV Upload</strong>
                  <small id="catalogue-source-note">API setup can be requested from Jims Fresh.</small>
                </div>
                <div>
                  <label>Last Import</label>
                  <strong id="catalogue-last-import">Today · 4:18 PM</strong>
                  <small id="catalogue-last-meta">18 new · 42 prices updated</small>
                </div>
                <div>
                  <label>Saved CSV Mapping</label>
                  <strong><span className="tag green">Configured</span> 9 fields</strong>
                  <small>Edit if your column structure changes.</small>
                </div>
                <div>
                  <label>Vendor Review</label>
                  <strong>18 items waiting</strong>
                  <small>New catalogue items awaiting mapping.</small>
                </div>
              </div>
            </div>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Your Catalogue Product</th>
                    <th>Supplier SKU</th>
                    <th>Supply Unit</th>
                    <th>Your Price</th>
                    <th>Availability</th>
                    <th>Vendor Product</th>
                    <th>Mapping Status</th>
                    <th>Source</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="catalogue-body">
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-thumb">🍓</div>
                        <div><strong>Strawberries Premium 250g</strong><span className="sub">Your catalogue item</span></div>
                      </div>
                    </td>
                    <td>MPM-STR-PREM-250</td>
                    <td>Tray 12 punnets</td>
                    <td>$33.00</td>
                    <td><span className="tag green">In Stock</span></td>
                    <td>Strawberries 250g <span className="id">STR250</span></td>
                    <td><span className="tag green">Mapped</span></td>
                    <td>CSV</td>
                    <td><button className="btn sm edit-product">Update</button></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-thumb">🥬</div>
                        <div><strong>Red Sorrel Leaves 100g</strong><span className="sub">Your catalogue item</span></div>
                      </div>
                    </td>
                    <td>MPM-SORREL-R-100</td>
                    <td>Pack 100g</td>
                    <td>$3.20</td>
                    <td><span className="tag green">In Stock</span></td>
                    <td>—</td>
                    <td><span className="tag amber">Awaiting Vendor Mapping</span></td>
                    <td>CSV</td>
                    <td><button className="btn sm">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      
      <ConnectApiDrawer 
        isOpen={isApiDrawerOpen} 
        onClose={() => setIsApiDrawerOpen(false)} 
      />
      <UploadCsvDrawer 
        isOpen={isCsvDrawerOpen} 
        onClose={() => setIsCsvDrawerOpen(false)} 
      />
    </div>
  );
}
