// src/pages/Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password)

    if (error || data.length === 0) {
      setError('Invalid credentials')
    } else {
      localStorage.setItem('user', JSON.stringify(data[0]))
      localStorage.setItem('user_id', data[0].id)
      navigate('/dashboard')
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #e1f5fe, #ffffff)',
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
            opacity: 0.08;
            animation: float 6s ease-in-out infinite;
          }

          .shape1 {
            width: 220px;
            height: 220px;
            background: #29b6f6;
            top: -40px;
            left: -40px;
          }

          .shape2 {
            width: 180px;
            height: 180px;
            background: #0288d1;
            bottom: -50px;
            right: -30px;
          }

          .form-container {
            animation: fadeIn 1s ease;
            background: #ffffffcc;
            backdrop-filter: blur(5px);
            padding: 3rem 2rem;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            width: 90%;
            max-width: 400px;
            z-index: 10;
          }

          .form-container h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: #01579b;
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
            border-color: #0288d1;
          }

          .form-container button {
            width: 100%;
            padding: 0.9rem;
            font-size: 1rem;
            font-weight: 600;
            background-color: #0288d1;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .form-container button:hover {
            background-color: #0277bd;
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

      <form className="form-container" onSubmit={handleLogin}>
        <h2>Log In</h2>
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
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login
