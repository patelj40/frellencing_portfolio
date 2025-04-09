// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // You can add Supabase logout here later
    navigate('/login')
  }

  return (
    <nav style={styles.nav}>
      <style>
        {`
          .nav-fade {
            animation: fadeInNav 0.6s ease-out;
          }

          @keyframes fadeInNav {
            from {
              opacity: 0;
              transform: translateY(-15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .nav-link:hover {
            color: #ce93d8;
          }

          .logout-btn:hover {
            background-color: #f48fb1;
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="nav-fade" style={styles.innerContainer}>
        <div style={styles.logo}>
          <Link to="/" style={styles.link}>Portfolio Builder</Link>
        </div>
        <div style={styles.links}>
          <Link to="/dashboard" className="nav-link" style={styles.link}>Dashboard</Link>
          <Link to="/contact" className="nav-link" style={styles.link}>Contact</Link>
          <button onClick={handleLogout} className="logout-btn" style={styles.button}>Logout</button>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
    padding: '1rem 2rem',
    borderRadius: '0 0 12px 12px',
    marginBottom: '30px',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: '600',
    color: '#6a1b9a',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
  },
  links: {
    display: 'flex',
    gap: '2rem',
    gap: '3 rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent : 'center'
  },
  link: {
    color: '#4a148c',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    padding: '8px 60px'
  },
  button: {
    backgroundColor: '#f06292',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    marginLeft: '20px'
  }
}

export default Navbar
