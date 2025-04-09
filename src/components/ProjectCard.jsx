// src/components/ProjectCard.jsx
const ProjectCard = ({ title, description, image }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
        <img src={image} alt={title} style={{ width: '100%' }} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
  
  export default ProjectCard
  