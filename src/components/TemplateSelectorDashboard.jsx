const templates = ['classic', 'modern', 'creative']

const TemplateSelectorDashboard = () => {
  const handleChange = (template) => {
    localStorage.setItem('selected_template', template)
    window.location.reload()
  }

  return (
    <div style={{
      position: 'relative',
      padding: '2.5rem 2rem',
      background: 'linear-gradient(to bottom right, #e1bee7, #ffffff)',
      borderRadius: '20px',
      fontFamily: 'Segoe UI, sans-serif',
      overflow: 'hidden'
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes floaty {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          .template-shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.07;
            animation: floaty 7s ease-in-out infinite;
            z-index: 0;
          }

          .template-shape1 {
            width: 180px;
            height: 180px;
            background: #ab47bc;
            top: -40px;
            left: -50px;
          }

          .template-shape2 {
            width: 140px;
            height: 140px;
            background: #ba68c8;
            bottom: -30px;
            right: -40px;
          }

          .template-container {
            z-index: 2;
            position: relative;
            animation: fadeIn 0.8s ease forwards;
          }

          .template-heading {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 12px;
            color: #6a1b9a;
          }

          .template-buttons {
            display: flex;
            gap: 16px;
          }

          .template-btn {
            padding: 10px 18px;
            border-radius: 8px;
            border: none;
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
            background-color: rgba(255,255,255,0.7);
            backdrop-filter: blur(6px);
            box-shadow: 0 4px 14px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
          }

          .template-btn:hover {
            transform: translateY(-2px);
            background-color: rgba(255,255,255,0.9);
          }
        `}
      </style>

      <div className="template-shape template-shape1"></div>
      <div className="template-shape template-shape2"></div>

      <div className="template-container">
        <h2 className="template-heading">Choose a Portfolio Template:</h2>
        <div className="template-buttons">
          {templates.map((template) => (
            <button
              key={template}
              onClick={() => handleChange(template)}
              className="template-btn"
            >
              {template.charAt(0).toUpperCase() + template.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TemplateSelectorDashboard
