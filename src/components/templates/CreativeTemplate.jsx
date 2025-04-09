const CreativeTemplate = ({ user, projects }) => {
  const styles = {
    container: {
      background: 'radial-gradient(circle at top left, #ff9a9e, #fad0c4)',
      padding: '60px 30px',
      minHeight: '100vh',
      fontFamily: '"Comic Sans MS", cursive, sans-serif',
      color: '#220033',
    },
    title: {
      fontSize: '3rem',
      textAlign: 'center',
      marginBottom: '50px',
      textShadow: '2px 2px #fff',
    },
    scrollArea: {
      display: 'flex',
      overflowX: 'auto',
      gap: '24px',
      paddingBottom: '20px',
    },
    card: {
      flex: '0 0 320px',
      background: '#fff',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.4s ease',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '12px',
    },
    projectTitle: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
    description: {
      fontSize: '0.95rem',
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{user.username}'s Dream Space ✨</h1>
      <div style={styles.scrollArea}>
        {projects.map(project => (
          <div
            key={project.id}
            style={styles.card}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={project.image_url} alt={project.title} style={styles.image} />
            <h2 style={styles.projectTitle}>{project.title}</h2>
            <p style={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreativeTemplate
