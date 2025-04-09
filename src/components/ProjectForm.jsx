
import { useState } from 'react'
import { supabase } from '../supabaseClient'
import TemplateSelector from './TemplateSelector'

const ProjectForm = ({ userId, onProjectAdded }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!title || !description || !image) {
      alert('Please fill in all fields')
      return
    }

    setLoading(true)
    const fileExt = image.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`
    const filePath = `${userId}/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('projects')
      .upload(filePath, image)

    if (uploadError) {
      alert('Image upload failed')
      setLoading(false)
      return
    }

    const { data: publicData } = supabase.storage.from('projects').getPublicUrl(filePath)
    const image_url = publicData.publicUrl

    const { error: insertError } = await supabase.from('projects').insert([
      { title, description, image_url, user_id: userId }
    ])

    if (insertError) {
      alert('Project saving failed')
    } else {
      alert('Project uploaded!')
      setTitle('')
      setDescription('')
      setImage(null)
      onProjectAdded()
    }

    setLoading(false)
  }

  return (
    <div style={{
      position: 'relative',
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #fce4ec, #ffffff)',
      fontFamily: 'Segoe UI, sans-serif',
      borderRadius: '16px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
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

          .shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.08;
            animation: floaty 6s ease-in-out infinite;
          }

          .shape1 {
            width: 180px;
            height: 180px;
            background: #ec407a;
            top: -50px;
            left: -50px;
          }

          .shape2 {
            width: 150px;
            height: 150px;
            background: #d81b60;
            bottom: -40px;
            right: -40px;
          }

          .form {
            position: relative;
            z-index: 2;
            animation: fadeInUp 0.8s ease forwards;
          }

          .form h2 {
            font-size: 1.8rem;
            font-weight: bold;
            color: #880e4f;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .form input,
          .form textarea {
            width: 100%;
            padding: 0.9rem 1rem;
            border-radius: 10px;
            border: 1px solid #ccc;
            margin-bottom: 1.2rem;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s ease;
          }

          .form input:focus,
          .form textarea:focus {
            border-color: #d81b60;
          }

          .form button {
            background-color: #d81b60;
            color: white;
            padding: 0.9rem 1.5rem;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .form button:hover {
            background-color: #ad1457;
            transform: scale(1.03);
          }
        `}
      </style>

      <div className="shape shape1"></div>
      <div className="shape shape2"></div>

      <div className="form">
        <h2>Add New Project</h2>

        <TemplateSelector
          onTemplateSelect={({ title, description }) => {
            setTitle(title)
            setDescription(description)
          }}
        />

        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button onClick={handleUpload} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Project'}
        </button>
      </div>
    </div>
  )
}

export default ProjectForm
