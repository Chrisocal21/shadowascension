import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="logo">
          <img src="/assets/coinmarkvtr.png" alt="Shadow Ascension" className="logo-image" />
          <span className="logo-text">Shadow Ascension</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/buy" className={location.pathname === '/buy' ? 'active' : ''}>
              Buy
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/community" className={location.pathname === '/community' ? 'active' : ''}>
              Community
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
