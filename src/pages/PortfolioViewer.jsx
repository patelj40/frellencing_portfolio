// src/pages/PortfolioViewer.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import ClassicTemplate from '../components/templates/ClassicTemplate'
import ModernTemplate from '../components/templates/ModernTemplate'
import CreativeTemplate from '../components/templates/CreativeTemplate'

const PortfolioViewer = () => {
  const { username } = useParams()
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserAndProjects = async () => {
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .maybeSingle();
        

      if (userError || !userData) {
        console.error('User not found:', userError)
        setLoading(false)
        return
      }

      const { data: projectData, error: projectError } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', userData.id)

      if (projectError) {
        console.error('Project fetch error:', projectError)
      }

      // Get template from localStorage
      const selectedTemplate = localStorage.getItem('selected_template') || 'classic'

      setUser({ ...userData, template: selectedTemplate })
      setProjects(projectData || [])
      setLoading(false)
    }

    fetchUserAndProjects()
  }, [username])

  if (loading) return <div>Loading portfolio...</div>

  const renderTemplate = () => {
    switch (user.template) {
      case 'modern':
        return <ModernTemplate user={user} projects={projects} />
      case 'creative':
        return <CreativeTemplate user={user} projects={projects} />
      default:
        return <ClassicTemplate user={user} projects={projects} />
    }
  }

  return (
    <div>
      {renderTemplate()}
    </div>
  )
}

export default PortfolioViewer
