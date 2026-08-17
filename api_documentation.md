# eFresh Vendor Portal - Comprehensive API Documentation

Base URL: `https://api.efresh.example/v1/vendor`
Authentication: Bearer Token (JWT) in Authorization Header.

---

## 1. Authentication Module

### `POST /auth/login`
Authenticates a vendor user.
**Request Body (application/json):**
```json
{
  "email": "vendor@supplier.example",
  "password": "securepassword123"
}
```
**Response (200 OK):**
```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5c...",
  "user": {
    "id": "USR-1029",
    "name": "Jane Doe",
    "company": "Mornington Produce"
  }
}
```

### `POST /auth/logout`
Invalidates the current active session token.
**Response (200 OK):**
```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```

---

## 2. Dashboard Module

### `GET /dashboard/summary`
Retrieves the top-level metric cards and sidebar snapshot data (Account Snapshot, Catalogue Health, Delivery Schedule).
**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "topMetrics": {
      "posNeedResponse": { "count": 3, "subtitle": "1 response due today" },
      "confirmedPos": { "count": 6, "subtitle": "$18,462 due for delivery" },
      "productsSupplied": { "count": 148, "subtitle": "112 where you are default" },
      "outstandingInvoices": { "value": 12480.00, "subtitle": "1 invoice requires review" }
    },
    "sidebar": {
      "deliverySchedule": {
        "activeDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "cutoff": "1 day before delivery at 3:00 PM"
      },
      "catalogueHealth": {
        "mappedProducts": 148,
        "defaultSupplierProducts": 112,
        "rawCatalogueItems": 312,
        "awaitingVendorMapping": 18,
        "lastCsvImport": "2026-08-16T16:18:00Z"
      },
      "accountSnapshot": {
        "paymentTerms": "14 Days",
        "paidThisMonth": 31620.00,
        "dueIn7Days": 8915.00,
        "creditNoteBalance": 380.00
      }
    }
  }
}
```

### `GET /dashboard/action-centre`
Retrieves pending actions for the vendor requiring attention.
**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "totalActions": 5,
    "actions": [
      {
        "id": "ACT-101",
        "type": "PO_RESPONSE_DUE",
        "title": "PO-2026-1185 · Price response due",
        "description": "3 lines · eFresh requested updated pricing - response due today.",
        "actionLabel": "Respond",
        "link": "/purchase-orders/PO-2026-1185"
      },
      {
        "id": "ACT-102",
        "type": "CATALOGUE_MAPPING",
        "title": "18 new catalogue products need vendor mapping",
        "description": "From your most recent CSV import. Products are visible in Supplier Catalogue.",
        "actionLabel": "Review",
        "link": "/products?tab=catalogue"
      },
      {
        "id": "ACT-103",
        "type": "INVOICE_VARIANCE",
        "title": "INV-MPM-80592 has a price variance",
        "description": "Part matched against PO-2026-1149. Review variance or issue credit note.",
        "actionLabel": "Open",
        "link": "/invoices/INV-MPM-80592"
      },
      {
        "id": "ACT-104",
        "type": "DISPATCH_REQUIRED",
        "title": "Tomorrow's delivery needs dispatch details",
        "description": "PO-2026-1175 - 14 items - Jims Fresh Main Warehouse.",
        "actionLabel": "Add Docket",
        "link": "/deliveries/PO-2026-1175"
      }
    ]
  }
}
```

### `GET /dashboard/recent-orders`
Retrieves the most recent purchase orders for the dashboard table.
**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "poId": "PO-2026-1185",
      "createdDate": "2026-08-14",
      "deliveryDate": "2026-08-15",
      "items": 3,
      "value": 745.00,
      "isEstimated": true,
      "status": "Needs Response",
      "actionLabel": "Respond"
    },
    {
      "poId": "PO-2026-1175",
      "createdDate": "2026-08-12",
      "deliveryDate": "2026-08-15",
      "items": 14,
      "value": 3126.20,
      "isEstimated": false,
      "status": "Confirmed",
      "actionLabel": "Delivery"
    },
    {
      "poId": "PO-2026-1169",
      "createdDate": "2026-08-11",
      "deliveryDate": "2026-08-14",
      "items": 9,
      "value": 2440.50,
      "isEstimated": false,
      "status": "Delivered",
      "actionLabel": "Invoice"
    }
  ]
}
```

---

## 3. Purchase Orders Module

### `GET /purchase-orders`
Retrieves a paginated list of purchase orders based on the active tab status.
**Query Parameters:**
- `tab` (string) - Filter POs by tab: `response`, `confirmed`, `past`
- `search` (string) - Search by PO number (optional)

**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "poId": "PO-2026-1185",
      "createdDate": "2026-08-14T17:42:00Z",
      "deliveryDate": "2026-08-15T00:00:00Z",
      "items": 3,
      "vendorRequest": 745.00,
      "isEstimated": true,
      "round": "Round 1",
      "responseDue": "2026-08-15T10:00:00Z",
      "status": "New Price Request",
      "actionLabel": "Review & Respond"
    },
    {
      "poId": "PO-2026-1182",
      "createdDate": "2026-08-14T14:15:00Z",
      "deliveryDate": "2026-08-16T00:00:00Z",
      "items": 8,
      "vendorRequest": 1284.50,
      "isEstimated": false,
      "round": "Round 2",
      "responseDue": "2026-08-15T11:00:00Z",
      "status": "Counter Received",
      "actionLabel": "Respond"
    },
    {
      "poId": "PO-2026-1179",
      "createdDate": "2026-08-13T16:50:00Z",
      "deliveryDate": "2026-08-15T00:00:00Z",
      "items": 11,
      "vendorRequest": 2184.30,
      "isEstimated": false,
      "round": "Round 2",
      "responseDue": "2026-08-15T14:00:00Z",
      "status": "Needs Response",
      "actionLabel": "Respond"
    }
  ],
  "pagination": {
    "total": 3,
    "page": 1,
    "limit": 20
  }
}
```

### `POST /purchase-orders/{id}/respond`
Vendor responds to a new or countered Purchase Order.
**Request Body (application/json):**
```json
{
  "action": "counter",
  "partyNote": "Can only supply 100 units of Strawberries at this time.",
  "items": [
    {
      "itemId": "ITM-001",
      "sku": "MPM-STR-PREM-250",
      "proposedPrice": 12.50,
      "proposedQuantity": 100,
      "note": "Limited stock due to weather."
    },
    {
      "itemId": "ITM-002",
      "sku": "MPM-SORREL-R-100",
      "isRejected": true,
      "note": "Out of season."
    }
  ]
}
```
**Response (200 OK):**
```json
{
  "status": "success",
  "message": "Response submitted successfully.",
  "newStatus": "Vendor Countered"
}
```

---

## 4. Products & Catalogue Module

### `GET /products/summary`
Retrieves the high-level statistics for the Products page header.
**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "productsYouSupply": 148,
    "youAreDefaultSupplier": 112,
    "rawCatalogueItems": 312,
    "awaitingVendorMapping": 18
  }
}
```

### `GET /products`
Retrieves a paginated list of products based on the selected tab and filters.
**Query Parameters:**
- `tab` (string) - `we_supply`, `catalogue`
- `search` (string) - Search by product or SKU (optional)
- `role` (string) - Filter by supplier role: e.g., `all`, `default`, `alternate` (optional)

**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "productId": "PRD-1029",
      "vendorProduct": {
        "name": "Apple Fuji Large",
        "category": "Fruit & Veg / Fruit",
        "code": "AFL13",
        "image": "apple.png"
      },
      "yourSku": "MPM-APL-FUJI-LG",
      "yourRole": "Default Supplier",
      "supplyUnit": "Box 18kg",
      "currentPrice": 47.00,
      "unitConversion": "72 Each · 18 Kg",
      "availability": "In Stock",
      "lastUpdated": "Today 4:00 PM",
      "actionLabel": "Update"
    },
    {
      "productId": "PRD-1030",
      "vendorProduct": {
        "name": "Hass Avocado",
        "category": "Fruit & Veg / Fruit",
        "code": "AVO08",
        "image": "avocado.png"
      },
      "yourSku": "MPM-AVO-HASS-25",
      "yourRole": "Default Supplier",
      "supplyUnit": "Tray 25",
      "currentPrice": 29.50,
      "unitConversion": "25 Each · 1 Tray",
      "availability": "In Stock",
      "lastUpdated": "Today 4:00 PM",
      "actionLabel": "Update"
    },
    {
      "productId": "PRD-1031",
      "vendorProduct": {
        "name": "Strawberries 250g",
        "category": "Fruit & Veg / Berries",
        "code": "STR250",
        "image": "strawberry.png"
      },
      "yourSku": "MPM-STR-PREM-250",
      "yourRole": "Alternate Supplier",
      "supplyUnit": "Tray 12 punnets",
      "currentPrice": 33.00,
      "unitConversion": "12 Punnet · 1 Tray",
      "availability": "In Stock",
      "lastUpdated": "Today 4:00 PM",
      "actionLabel": "Update"
    },
    {
      "productId": "PRD-1032",
      "vendorProduct": {
        "name": "Carrots Loose",
        "category": "Fruit & Veg / Vegetables",
        "code": "CRT01",
        "image": "carrot.png"
      },
      "yourSku": "MPM-CAR-PREM-10",
      "yourRole": "Alternate Supplier",
      "supplyUnit": "Bag 10kg",
      "currentPrice": 16.90,
      "unitConversion": "10 Kg · 1 Bag",
      "availability": "In Stock",
      "lastUpdated": "Yesterday",
      "actionLabel": "Update"
    }
  ],
  "pagination": {
    "total": 148,
    "page": 1,
    "limit": 20
  }
}
```

### `POST /products/integration/setup`
Submits API integration details from the "Connect Catalogue API" drawer.
**Request Body (application/json):**
```json
{
  "integrationName": "Mornington Produce API",
  "environment": "Production",
  "baseApiUrl": "https://api.supplier.example/v1",
  "apiDocsUrl": "https://docs.supplier.example/catalogue-api",
  "authentication": "API Key",
  "preferredSync": "Hourly",
  "catalogueEndpoint": "/products",
  "priceEndpoint": "/products/pricing",
  "credentialsExchange": "Vendor admin will provide key via secure vault.",
  "technicalNotes": "Rate limit is 100 req/min.",
  "sendToEmail": "admin@jimsfresh.example",
  "message": "Hi, our catalogue API is available for integration..."
}
```
**Response (201 Created):**
```json
{
  "status": "success",
  "message": "Integration request sent successfully."
}
```

### `POST /products/catalogue/upload`
Uploads a CSV file of the supplier's raw catalogue from the "Upload Product CSV" drawer.
**Request Headers:**
`Content-Type: multipart/form-data`
**Form Data:**
- `file`: `[Binary File Data]`
- `existingSkuRule`: `update`
- `encoding`: `UTF-8`

**Response (200 OK):**
```json
{
  "status": "success",
  "message": "CSV uploaded and processed successfully.",
  "data": {
    "rowsProcessed": 125,
    "itemsUpdated": 42,
    "itemsAdded": 18
  }
}
```

---

## 5. Deliveries & Dispatch Module

### `GET /deliveries/rules`
Retrieves the vendor's static delivery rules and constraints for the side panel.
**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "deliveryDays": "Monday-Saturday",
    "orderCutOff": "1 day before · 3:00 PM",
    "normalLeadTime": "1 business day",
    "minimumOrder": 250.00,
    "receivingInstruction": "Rear loading dock"
  }
}
```

### `GET /deliveries`
Retrieves a paginated list of upcoming deliveries for the vendor.
**Query Parameters:**
- `timeframe` (string) - e.g., `next_7_days`, `next_14_days`, `all_upcoming` (optional)
- `page` (number)
- `limit` (number)

**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "deliveryDate": "2026-08-15",
      "poId": "PO-2026-1175",
      "itemsCount": 14,
      "location": "Jims Fresh Main Warehouse",
      "deliveryWindow": "6:00 AM - 10:00 AM",
      "status": "Docket Required",
      "value": 3126.20,
      "docketNumber": null,
      "actionLabel": "Add Dispatch"
    },
    {
      "deliveryDate": "2026-08-15",
      "poId": "PO-2026-1171",
      "itemsCount": 7,
      "location": "Jims Fresh Main Warehouse",
      "deliveryWindow": "10:00 AM - 2:00 PM",
      "status": "Dispatched",
      "value": null,
      "docketNumber": "DCK-88031",
      "actionLabel": "View"
    },
    {
      "deliveryDate": "2026-08-16",
      "poId": "PO-2026-1165",
      "itemsCount": 12,
      "location": "North Warehouse",
      "deliveryWindow": "6:00 AM - 10:00 AM",
      "status": "Confirmed",
      "value": 4980.00,
      "docketNumber": null,
      "actionLabel": "Dispatch"
    }
  ],
  "pagination": {
    "total": 15,
    "page": 1,
    "limit": 20
  }
}
```

### `POST /deliveries/{poId}/dispatch`
Submits dispatch metadata for a confirmed PO from the "Add Dispatch Details" drawer.
**Request Body (application/json):**
```json
{
  "dispatchDate": "2026-08-14",
  "expectedArrival": "2026-08-15T07:30:00Z",
  "deliveryDocketNo": "DCK-88042",
  "driverCarrier": "MPM Delivery Van 3",
  "dispatchNote": "All lines packed and dispatched. Refrigerated produce loaded at 4°C."
}
```
**Response (201 Created):**
```json
{
  "status": "success",
  "message": "Dispatch details added successfully.",
  "deliveryStatus": "Dispatched"
}
```

---

## 6. Invoices & Payments Module

### `GET /invoices/summary`
Retrieves the high-level statistics for the Invoices & Payments page header.
**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "outstanding": { "value": 12480.00, "subtitle": "Open invoices" },
    "paidThisMonth": { "value": 31620.00, "subtitle": "Payments completed" },
    "dueIn7Days": { "value": 8915.00, "subtitle": "Approved invoices" },
    "requiresReview": { "count": 1, "subtitle": "Invoice / PO variance" }
  }
}
```

### `GET /invoices`
Retrieves a paginated list of invoices for the "Invoices" tab.
**Query Parameters:**
- `status` (string) - Filter by matching or payment status (optional)
- `page` (number)
- `limit` (number)

**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "invoiceId": "INV-MPM-80621",
      "invoiceDate": "2026-08-05",
      "poId": "PO-2026-1175",
      "invoiceTotal": 3126.20,
      "dueDate": "2026-08-19",
      "matchingStatus": "Matched",
      "paymentStatus": "Approved",
      "actionLabel": "View"
    },
    {
      "invoiceId": "INV-MPM-80592",
      "invoiceDate": "2026-08-01",
      "poId": "PO-2026-1149",
      "invoiceTotal": 4204.10,
      "dueDate": "2026-08-15",
      "matchingStatus": "Part Matched",
      "paymentStatus": "Review Required",
      "actionLabel": "View Variance",
      "secondaryActionLabel": "Credit Note"
    },
    {
      "invoiceId": "INV-MPM-80488",
      "invoiceDate": "2026-07-20",
      "poId": "PO-2026-1112",
      "invoiceTotal": 1240.00,
      "dueDate": "2026-08-03",
      "matchingStatus": "Matched",
      "paymentStatus": "Overdue",
      "actionLabel": "View"
    }
  ],
  "pagination": {
    "total": 124,
    "page": 1,
    "limit": 20
  }
}
```

### `GET /invoices/payments`
Retrieves a paginated list of payments for the "Payments" tab.
**Query Parameters:**
- `dateFrom` (string)
- `dateTo` (string)

**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "paymentDate": "2026-08-12",
      "reference": "PAY-2026-8891",
      "invoices": ["INV-MPM-80514", "INV-MPM-80472"],
      "method": "Bank Transfer",
      "amount": 8135.75,
      "status": "Paid"
    },
    {
      "paymentDate": "2026-08-05",
      "reference": "PAY-2026-8744",
      "invoices": ["INV-MPM-80398"],
      "method": "Bank Transfer",
      "amount": 5440.00,
      "status": "Paid"
    }
  ],
  "pagination": {
    "total": 45,
    "page": 1,
    "limit": 20
  }
}
```

### `GET /invoices/credit-notes`
Retrieves a paginated list of credit notes for the "Credit Notes" tab.
**Query Parameters:**
- `status` (string) - Filter by credit note status (e.g., `applied`, `pending`) (optional)
- `page` (number)
- `limit` (number)

**Response (200 OK):**
```json
{
  "status": "success",
  "data": [
    {
      "creditNoteId": "CN-MPM-1021",
      "date": "2026-08-03",
      "relatedInvoice": "INV-MPM-80592",
      "relatedPo": "PO-2026-1149",
      "amount": 380.00,
      "reason": "Price Variance",
      "status": "Pending",
      "actionLabel": "View Details"
    }
  ],
  "pagination": {
    "total": 12,
    "page": 1,
    "limit": 20
  }
}
```

### `POST /invoices/upload`
Uploads a supplier invoice and attaches it to a PO from the "Upload Invoice" drawer.
**Request Headers:**
`Content-Type: multipart/form-data`
**Form Data:**
- `file`: `[Binary File Data (PDF/JPG/PNG)]`
- `invoiceNumber`: `INV-MPM-80655`
- `invoiceDate`: `2026-08-14`
- `relatedPo`: `PO-2026-1175`
- `invoiceTotal`: `3126.20`

**Response (201 Created):**
```json
{
  "status": "success",
  "message": "Invoice uploaded successfully.",
  "data": {
    "invoiceId": "INV-109283",
    "status": "Processing"
  }
}
```

---

## 7. Company & Settings Module

### `GET /settings`
Retrieves all company profile data, delivery schedules, and notification preferences.
**Response (200 OK):**
```json
{
  "status": "success",
  "data": {
    "companyProfile": {
      "logoInitials": "MP",
      "name": "Mornington Produce Market",
      "vendorId": "SUP-1001",
      "category": "Fresh Produce",
      "status": "Active",
      "verificationTag": "Verified Supplier",
      "primaryContact": "Michael Russo",
      "phone": "03 5975 8800",
      "ordersEmail": "orders@morningtonproduce.example",
      "address": "45 Market Drive, Mornington VIC 3931"
    },
    "deliverySchedule": {
      "deliveryDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      "orderCutOff": {
        "dayOffset": "1 day before",
        "time": "15:00"
      },
      "deliveryNotes": "Deliver to rear loading dock. Call warehouse manager 20 minutes before arrival."
    },
    "commercialAndNotifications": {
      "paymentTerms": "14 Days",
      "preferredPayment": "Bank Transfer",
      "accountNumber": "EFRESH-8821",
      "notifications": {
        "emailNewPurchaseOrders": true,
        "smsUrgentReminders": true,
        "emailPaymentRemittances": true,
        "weeklyCatalogueSummary": false
      }
    }
  }
}
```

### `PUT /settings`
Updates the editable fields in the Company & Settings screen. Note: Static fields like Payment Terms and Vendor ID cannot be updated via this endpoint.
**Request Body (application/json):**
```json
{
  "companyProfile": {
    "primaryContact": "Michael Russo",
    "phone": "03 5975 8800",
    "ordersEmail": "orders@morningtonproduce.example",
    "address": "45 Market Drive, Mornington VIC 3931"
  },
  "deliverySchedule": {
    "deliveryDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    "orderCutOff": {
      "dayOffset": "1 day before",
      "time": "15:00"
    },
    "deliveryNotes": "Deliver to rear loading dock. Call warehouse manager 20 minutes before arrival."
  },
  "notifications": {
    "emailNewPurchaseOrders": true,
    "smsUrgentReminders": true,
    "emailPaymentRemittances": true,
    "weeklyCatalogueSummary": false
  }
}
```
**Response (200 OK):**
```json
{
  "status": "success",
  "message": "Settings updated successfully."
}
```
