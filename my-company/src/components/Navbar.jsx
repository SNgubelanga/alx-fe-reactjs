import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: "#333", 
      padding: "15px", 
      textAlign: "center" 
    }}>
      <ul style={{ 
        listStyle: "none", 
        display: "flex", 
        justifyContent: "center", 
        gap: "30px", 
        padding: 0 
      }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
  padding: "10px",
  borderRadius: "5px",
  transition: "background 0.3s",
};

export default Navbar;