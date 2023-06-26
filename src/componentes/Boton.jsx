import PropTypes from 'prop-types';

const Boton = ({ icon, cambio }) => {
  return (
    <button type="button" onClick={cambio} className="btn btn-warning m-1">
      {icon}
    </button>

  );
};

Boton.propTypes = {
  icon: PropTypes.icon,
  cambio: PropTypes.func,
};
export default Boton;
