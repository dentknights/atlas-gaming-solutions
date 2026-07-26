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
            <span>Atlas Gaming</span>
          </Link>
          <ul className="nav-links">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link to="/games" className={isActive('/games') ? 'active' : ''}>Games</Link></li>
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
                <span>Atlas Gaming Solutions LLC</span>
              </div>
              <p className="footer-desc">Premium gaming experiences across all platforms. Play free, win real.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li><Link to="/contact">Help Center</Link></li>
                <li><Link to="/contact">Account Issues</Link></li>
                <li><Link to="/contact">Responsible Gaming</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Atlas Gaming Solutions LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
