// src/components/TemplateSelector.jsx
const TemplateSelector = ({ onTemplateSelect }) => {
    const templates = [
      {
        title: 'Freelancer Portfolio',
        description: 'A simple portfolio to showcase your freelance projects.',
      },
      {
        title: 'Personal Blog',
        description: 'A blog-style site for sharing your thoughts and ideas.',
      },
      {
        title: 'Small Business Website',
        description: 'A starter layout for small business promotion.',
      },
    ]
  
    return (
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Start with a Template</h3>
        <div className="flex flex-wrap gap-4">
          {templates.map((template, index) => (
            <div
              key={index}
              className="p-4 border rounded cursor-pointer hover:bg-gray-100 transition"
              onClick={() => onTemplateSelect(template)}
            >
              <h4 className="font-bold">{template.title}</h4>
              <p className="text-sm">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default TemplateSelector
  