import { Outlet, Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <span className="logo-icon">◆</span>
            <span>Atlas Wargaming</span>
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link to="/scenarios" className={isActive('/scenarios') ? 'active' : ''}>Scenarios</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
            <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <span className="logo-icon">◆</span>
                <span>Atlas Wargaming Solutions LLC</span>
              </div>
              <p className="footer-desc">Strategic scenario planning for businesses that refuse to leave growth to chance.</p>
            </div>
            <div>
              <h4>Navigate</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/scenarios">Scenarios</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><Link to="/scenarios">Market Entry</Link></li>
                <li><Link to="/scenarios">Crisis Response</Link></li>
                <li><Link to="/scenarios">Competitive Strategy</Link></li>
                <li><Link to="/scenarios">Growth Planning</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Atlas Wargaming Solutions LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
