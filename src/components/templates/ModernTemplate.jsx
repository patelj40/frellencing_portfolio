// src/templates/ModernTemplate.jsx
const ModernTemplate = ({ user, projects }) => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1e2f, #2c2c3e)',
      padding: '60px 20px',
      fontFamily: "'Segoe UI', sans-serif",
      color: '#e0e0e0',
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      margin: 0,
      color: '#f3e5f5',
      textShadow: '0 0 6px rgba(255,255,255,0.1)',
    },
    subheading: {
      fontSize: '1rem',
      color: '#b39ddb',
      marginTop: '8px',
    },
    projectList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#2e2e42',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.02)',
      boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
    },
    image: {
      width: '40%',
      objectFit: 'cover',
    },
    content: {
      padding: '20px',
      width: '60%',
    },
    projectTitle: {
      fontSize: '1.8rem',
      marginBottom: '10px',
      color: '#fff',
    },
    description: {
      fontSize: '1rem',
      color: '#ccc',
      lineHeight: '1.6',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{user.username}'s Portfolio</h1>
        <p style={styles.subheading}>A curated showcase of my finest work</p>
      </div>

      <div style={styles.projectList}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={styles.card}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.cardHover)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = styles.card.boxShadow
            }}
          >
            <img src={project.image_url} alt={project.title} style={styles.image} />
            <div style={styles.content}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <p style={styles.description}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModernTemplate
