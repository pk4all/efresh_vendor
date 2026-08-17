import Link from 'next/link';
import { login } from '@/app/actions';

export default function LoginPage() {
  return (
    <div id="login-shell" className="login-shell">
      <div className="mobile-login-header mobile-only">
        <div className="brand-mark" style={{ margin: 'auto' }}>🚚</div>
        <h1>eFresh Supplier</h1>
        <p>Supplier Portal</p>
      </div>
      <section className="login-brand-panel desktop-only">
        <div className="login-logo">
          <div className="brand-mark">🚚</div>
          <div className="brand-name">
            eFresh<small>Supplier Portal</small>
          </div>
        </div>
        <div className="login-copy">
          <h1>Orders, pricing, products and payments — in one supplier workspace.</h1>
          <p>
            Review purchase orders, respond to price requests, keep your catalogue and availability
            current, submit invoices and track upcoming deliveries.
          </p>
          <div className="login-points">
            <div className="login-point">
              <strong>Purchase Orders</strong>
              <span>Accept, counter or quote unavailable items.</span>
            </div>
            <div className="login-point">
              <strong>Product Catalogue</strong>
              <span>Upload products, update pricing and see mapping status.</span>
            </div>
            <div className="login-point">
              <strong>Invoices & Payments</strong>
              <span>Submit invoices and track matching/payment.</span>
            </div>
            <div className="login-point">
              <strong>Deliveries</strong>
              <span>Add docket details and mark dispatch.</span>
            </div>
          </div>
        </div>
        <div style={{ fontSize: '9px', color: '#87a0bb' }}>
          Secure supplier access · Only your organisation's records are visible.
        </div>
      </section>
      <section className="login-form-panel">
        <div className="login-box">
          <div className="login-logo" style={{ color: '#17202f', marginBottom: '24px' }}>
            <div className="brand-mark">🚚</div>
            <div className="brand-name">
              eFresh<small style={{ color: '#7890aa' }}>Supplier Portal</small>
            </div>
          </div>
          <h2>Welcome back</h2>
          <p>Sign in to manage your supplier account with eFresh.</p>
          <form action={login} className="login-form-wrapper">
            <div className="login-fields">
              <div>
                <label className="field-label">Email</label>
                <input name="email" className="input" defaultValue="michael@morningtonproduce.example" />
              </div>
              <div>
                <label className="field-label">Password</label>
                <input name="password" className="input" type="password" defaultValue="demo123" />
              </div>
            </div>
            <div className="login-actions">
              <label>
                <input type="checkbox" name="remember" defaultChecked /> Remember me
              </label>
              <Link href="#">Forgot password?</Link>
            </div>
            <button type="submit" className="btn primary login-btn" style={{ textDecoration: 'none', width: '100%', border: 'none', cursor: 'pointer' }}>
              Sign In
            </button>
            <div className="login-demo">
              Prototype login: use the prefilled details and select Sign In.
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
