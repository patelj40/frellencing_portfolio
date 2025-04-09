// src/components/TemplateCard.jsx
const TemplateCard = ({ name, previewImage, onSelect }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', cursor: 'pointer', width: '300px' }}>
        <img src={previewImage} alt={name} style={{ width: '100%' }} />
        <h3>{name}</h3>
        <button onClick={onSelect}>Use Template</button>
      </div>
    )
  }
  
  export default TemplateCard
  