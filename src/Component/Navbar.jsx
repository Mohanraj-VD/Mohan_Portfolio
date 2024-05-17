import { Nav } from 'rsuite';
import 'rsuite/Nav/styles/index.css';

const Navbar = ({ active, onSelect, ...props }) => {
  return (
    <>
    
    <Nav {...props} activeKey={active} onSelect={onSelect}  >
     
      <Nav.Item eventKey="home">Home</Nav.Item>
      <Nav.Item eventKey="news">News</Nav.Item>
      <Nav.Item eventKey="solutions">Solutions</Nav.Item>
      <Nav.Item eventKey="products">Products</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
    </>
  );
};

export default Navbar;