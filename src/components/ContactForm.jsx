// src/components/ContactForm.jsx
import { useState } from 'react'
import { supabase } from '../supabaseClient'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = form

    const { error } = await supabase.from('contacts').insert([{ name, email, message }])

    if (error) {
      console.error(error)
      setStatus('Something went wrong. Please try again.')
    } else {
      setStatus('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes fadeInSlideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .contact-form {
            animation: fadeInSlideUp 0.8s ease forwards;
          }

          .contact-form input:focus,
          .contact-form textarea:focus {
            outline: none;
            border-color: #ab47bc;
            box-shadow: 0 0 5px rgba(171, 71, 188, 0.5);
          }

          .submit-btn:hover {
            background: #7b1fa2;
            transform: scale(1.03);
          }

          @media (max-width: 600px) {
            .contact-form {
              width: 90%;
              padding: 20px;
            }
          }
        `}
      </style>

      <form className="contact-form" onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Get in Touch</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />
        <button type="submit" className="submit-btn" style={styles.button}>Send Message</button>
        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right top, #ce93d8, #b39ddb, #90caf9)',
    padding: '30px',
  },
  form: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    color: '#4a148c',
    fontFamily: 'sans-serif',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '24px',
    fontSize: '2rem',
    color: '#6a1b9a',
  },
  input: {
    width: '100%',
    padding: '14px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '14px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    minHeight: '120px',
    resize: 'vertical',
    transition: 'all 0.3s ease',
  },
  button: {
    backgroundColor: '#8e24aa',
    color: '#fff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s ease',
  },
  status: {
    marginTop: '16px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
}

export default ContactForm
