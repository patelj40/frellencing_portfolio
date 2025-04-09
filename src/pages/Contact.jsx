// src/pages/Contact.jsx
import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div style={styles.container}>
      <Navbar />

      <style>
        {`
          @keyframes fadeInText {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .contact-heading {
            animation: fadeInText 0.8s ease-in-out forwards;
          }
        `}
      </style>

      <h1 className="contact-heading" style={styles.heading}>Let's Connect</h1>

      <ContactForm />
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e1bee7, #bbdefb)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#4a148c',
    marginBottom: '2rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  },
}

export default Contact
