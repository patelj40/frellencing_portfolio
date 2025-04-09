const ClassicTemplate = ({ user, projects }) => {
  const styles = {
    container: {
      maxWidth: '750px',
      margin: '0 auto',
      padding: '50px 25px',
      fontFamily: 'Georgia, serif',
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
    },
    header: {
      borderBottom: '2px solid #ccc',
      marginBottom: '30px',
      paddingBottom: '10px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#333',
    },
    email: {
      fontSize: '1rem',
      color: '#777',
      marginTop: '5px',
    },
    project: {
      position: 'relative',
      marginBottom: '40px',
      paddingLeft: '20px',
      borderLeft: '3px solid #d4af37',
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '6px',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.6',
    },
    image: {
      width: '100%',
      height: '230px',
      objectFit: 'cover',
      borderRadius: '4px',
      marginTop: '12px',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{user.username}'s Portfolio</h1>
        <p style={styles.email}>Email: {user.email}</p>
      </div>
      {projects.map(project => (
        <div key={project.id} style={styles.project}>
          <h2 style={styles.projectTitle}>{project.title}</h2>
          <p style={styles.description}>{project.description}</p>
          <img src={project.image_url} alt={project.title} style={styles.image} />
        </div>
      ))}
    </div>
  )
}

export default ClassicTemplate
