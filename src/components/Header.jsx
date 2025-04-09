// src/components/Header.jsx
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Freelancer Portfolio</h2>
        <div>
          <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link to="/templates" style={{ marginRight: '1rem' }}>Templates</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
