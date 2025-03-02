function Services() {
    return (
      <div style={pageStyle}>
        <h1 style={headingStyle}>Our Services</h1>
        <ul style={listStyle}>
          <li>🚀 Technology Consulting</li>
          <li>📊 Market Analysis</li>
          <li>💡 Product Development</li>
        </ul>
      </div>
    );
  }
  
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    fontSize: "18px",
    color: "#555"
  };
  
export default Services;