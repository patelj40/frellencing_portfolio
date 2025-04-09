
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const ProjectGallery = ({ userId }) => {
  const [projects, setProjects] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (!error) setProjects(data)
  }

  const handleDelete = async (id, imageUrl) => {
    const filePath = imageUrl.split('/projects/')[1]
    await supabase.storage.from('projects').remove([filePath])
    await supabase.from('projects').delete().eq('id', id)
    fetchProjects()
  }

  const handleUpdate = async (id) => {
    await supabase
      .from('projects')
      .update({ title: editTitle, description: editDescription })
      .eq('id', id)
    setEditingId(null)
    fetchProjects()
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div style={{
      position: 'relative',
      padding: '3rem 2rem',
      background: 'linear-gradient(to bottom right, #f8bbd0, #ffffff)',
      borderRadius: '20px',
      fontFamily: 'Segoe UI, sans-serif',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes floaty {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .gallery-shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.07;
            animation: floaty 8s ease-in-out infinite;
            z-index: 0;
          }

          .gallery-shape1 {
            width: 220px;
            height: 220px;
            background: #f06292;
            top: -60px;
            left: -60px;
          }

          .gallery-shape2 {
            width: 160px;
            height: 160px;
            background: #ec407a;
            bottom: -50px;
            right: -40px;
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            z-index: 2;
            position: relative;
            animation: fadeInUp 0.9s ease forwards;
          }

          .project-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.08);
            transition: transform 0.3s ease;
          }

          .project-card:hover {
            transform: translateY(-5px);
          }

          .project-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 12px;
          }

          .project-card input,
          .project-card textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 1rem;
          }

          .project-card button {
            padding: 8px 14px;
            margin-right: 10px;
            border: none;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
            font-size: 0.9rem;
            transition: transform 0.2s ease;
          }

          .project-card button:hover {
            transform: scale(1.05);
          }

          .edit-btn { background: #1976d2; color: #fff; }
          .delete-btn { background: #d32f2f; color: #fff; }
          .save-btn { background: #388e3c; color: #fff; }
          .cancel-btn { background: #9e9e9e; color: #fff; }
        `}
      </style>

      <div className="gallery-shape gallery-shape1"></div>
      <div className="gallery-shape gallery-shape2"></div>

      <div className="project-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image_url} alt={project.title} className="project-image" />

            {editingId === project.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                />
                <textarea
                  value={editDescription}
                  onChange={e => setEditDescription(e.target.value)}
                />
                <button onClick={() => handleUpdate(project.id)} className="save-btn">Save</button>
                <button onClick={() => setEditingId(null)} className="cancel-btn">Cancel</button>
              </>
            ) : (
              <>
                <h3 style={{ margin: '10px 0', color: '#880e4f' }}>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ marginTop: '12px' }}>
                  <button
                    onClick={() => {
                      setEditingId(project.id)
                      setEditTitle(project.title)
                      setEditDescription(project.description)
                    }}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id, project.image_url)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectGallery

