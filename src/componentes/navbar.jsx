import PropTypes from 'prop-types';

const Navbar = ({imagen,icono,cambio}) => {
  return (
    <nav className="navbar bg-dark border-bottom border-bottom-dark  " data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img className="" src={imagen} alt="" width="155" height="55"/>
        
      </a>
   
      <button onClick={cambio} className="">{icono}</button>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
 imagen:PropTypes.string,
 icono:PropTypes.string,
 cambio:PropTypes.func,
  
};
export {Navbar}