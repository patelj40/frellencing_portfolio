import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectForm from '../components/ProjectForm'
import ProjectGallery from '../components/ProjectGallery'
import TemplateSelectorDashboard from '../components/TemplateSelectorDashboard'
import { supabase } from '../supabaseClient'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUserId = localStorage.getItem('user_id')
      if (!storedUserId) {
        navigate('/login')
      } else {
        setUserId(storedUserId)
        const { data, error } = await supabase
          .from('users')
          .select('username')
          .eq('id', storedUserId)
          .single()

        if (data) {
          setUsername(data.username)
        } else {
          console.error('Failed to fetch username:', error)
        }
      }
    }

    fetchUserData()
  }, [navigate])

  const handleProjectAdded = () => {
    window.location.reload()
  }

  const viewPortfolio = () => {
    if (username) {
      navigate(`/portfolio/${username}`)
    }
  }

  return (
    <div style={{
      padding: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Segoe UI, sans-serif',
      background: 'linear-gradient(to bottom right, #f3e5f5, #ffffff)',
      borderRadius: '20px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes fadeInDashboard {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .dashboard-fade {
            animation: fadeInDashboard 0.6s ease-out forwards;
            position: relative;
            z-index: 2;
          }

          .bg-bubble1, .bg-bubble2 {
            position: absolute;
            border-radius: 50%;
            opacity: 0.08;
            z-index: 1;
          }

          .bg-bubble1 {
            width: 200px;
            height: 200px;
            background-color: #ce93d8;
            top: -50px;
            left: -50px;
          }

          .bg-bubble2 {
            width: 150px;
            height: 150px;
            background-color: #ba68c8;
            bottom: -40px;
            right: -40px;
          }

          .dashboard-title {
            font-size: 26px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #6a1b9a;
            text-align: center;
          }

          .view-btn {
            background-color: #6a1b9a;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            border: none;
            font-weight: bold;
            cursor: pointer;
            margin-top: 30px;
            transition: transform 0.2s ease, background-color 0.3s;
          }

          .view-btn:hover {
            transform: translateY(-2px);
            background-color: #7b1fa2;
          }
        `}
      </style>

      <div className="bg-bubble1"></div>
      <div className="bg-bubble2"></div>

      <div className="dashboard-fade">
        <Navbar />
        <h1 className="dashboard-title">Your Projects</h1>
        {userId && (
          <>
            <ProjectForm userId={userId} onProjectAdded={handleProjectAdded} />
            <ProjectGallery userId={userId} />
            <TemplateSelectorDashboard />
            <div style={{ textAlign: 'center' }}>
              <button onClick={viewPortfolio} className="view-btn">View My Portfolio</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Dashboard
