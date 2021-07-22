 
import { Link } from 'react-router-dom';
import './navbarStyles.css';
import DropdownApp from '../dropdown/dropdownApp';
import { useState } from 'react';


// export default function Navbar() { // Why not use this
const Navbar = () => { // WHY use this
  const [title, setTitle] = useState("")
  const [link, setLink] = useState("/")

  return (
    <nav className="navbar">
      <h1> 
        <Link to="/">MY THREE.JS TEST</Link> 
      </h1>
      <a href={link} style={{fontSize:25}}>
        { title }
      </a>
      <div className="links">
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/create">List box</Link> */}
        {/* <Link>
          <DropdownApp />
          <button onClick={logValue}>Log value</button>
        </Link> */}
        <DropdownApp title={title} setTitle={setTitle} setLink={setLink}/>
      </div>
    </nav>

  );
}

export default Navbar;