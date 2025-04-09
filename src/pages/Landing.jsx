// src/pages/Landing.jsx
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Landing = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(135deg, #e0f7fa, #fff)',
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .fade-in {
            animation: fadeIn 1s ease-in-out;
          }

          .floating-shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
          }

          .shape1 {
            width: 250px;
            height: 250px;
            background: #4dd0e1;
            top: -60px;
            left: -60px;
            animation-delay: 0s;
          }

          .shape2 {
            width: 200px;
            height: 200px;
            background: #00796b;
            bottom: -60px;
            right: -40px;
            animation-delay: 1s;
          }

          .shape3 {
            width: 150px;
            height: 150px;
            background: #80deea;
            top: 40%;
            left: 80%;
            animation-delay: 2s;
          }

          button:hover {
            background-color: #0066cc !important;
            transform: scale(1.05);
          }
        `}
      </style>

      {/* Decorative background shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      <div className="fade-in" style={{
        background: '#ffffffcc',
        padding: '4rem 2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        textAlign: 'center',
        zIndex: 10,
        maxWidth: '600px',
        width: '90%',
        backdropFilter: 'blur(6px)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#004d40'
        }}>
          Welcome to Freelancer Portfolio Builder
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#333',
          marginBottom: '2rem'
        }}>
          Create and showcase your professional work with ease.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/login">
            <button style={{
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#fff',
              backgroundColor: '#0097a7',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: '0.3s ease'
            }}>
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button style={{
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#fff',
              backgroundColor: '#00796b',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: '0.3s ease'
            }}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
