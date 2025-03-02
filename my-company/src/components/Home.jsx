function Home() {
    return (
      <div style={pageStyle}>
        <h1 style={headingStyle}>Welcome to Our Company</h1>
        <p style={textStyle}>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }
  
  const pageStyle = {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh"
  };
  
  const headingStyle = {
    color: "#333",
    fontSize: "36px"
  };
  
  const textStyle = {
    fontSize: "18px",
    color: "#555"
  };
  
export default Home;