// src/pages/Signup.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('users')
      .insert([{ email, password, username }])

    if (error) {
      setError(error.message)
    } else {
      navigate('/login')
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f3e5f5, #ffffff)',
      fontFamily: 'Segoe UI, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          .floating-shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.07;
            animation: float 6s ease-in-out infinite;
          }

          .shape1 {
            width: 250px;
            height: 250px;
            background: #ab47bc;
            top: -50px;
            left: -50px;
          }

          .shape2 {
            width: 200px;
            height: 200px;
            background: #7b1fa2;
            bottom: -60px;
            right: -40px;
          }

          .form-container {
            animation: fadeIn 1s ease;
            background: #ffffffcc;
            backdrop-filter: blur(6px);
            padding: 3rem 2rem;
            border-radius: 18px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            width: 90%;
            max-width: 420px;
            z-index: 10;
          }

          .form-container h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: #6a1b9a;
          }

          .form-container input {
            width: 100%;
            padding: 0.8rem 1rem;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
          }

          .form-container input:focus {
            border-color: #8e24aa;
          }

          .form-container button {
            width: 100%;
            padding: 0.9rem;
            font-size: 1rem;
            font-weight: 600;
            background-color: #8e24aa;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .form-container button:hover {
            background-color: #6a1b9a;
            transform: scale(1.03);
          }

          .form-container p {
            margin-top: 1rem;
            color: red;
            text-align: center;
          }
        `}
      </style>

      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>

      <form className="form-container" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Signup
