import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ texto, imagen, id, habilidad,habilidad2,imagenbal}) => {
  return (
    <div className="completo col-10 col-md-6 col-lg-4 container mx-auto ">
      <div className="tarjeta card row">
        <div className="etiqueta card-body col">
        <img src={imagen} alt="" className="fotochica" />
          <h3 className="nombre card-title ">{texto}</h3>
          <div className="triangle-container">
            <div className="triangle"></div>
            <div className="text">{id}</div>
          </div>
        </div>
        <img
          src={imagen}
          className="pokemon img-fluid rounded-start"
          alt="..."
        />
        <div className="etiqueta2 card-body">
          <h2 className=" habilidad text-center ">Habilidad</h2>
        <img className= "pokebola" src={imagenbal} alt="" />
          <spam className=" habilidades card-title ">{habilidad}</spam>
          <br />
          <img className= "pokebola" src={imagenbal} alt="" />
          <spam className="habilidades card-title ">{habilidad2}</spam>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  texto: PropTypes.string,
  imagen: PropTypes.string,
  id: PropTypes.number,
  habilidad:PropTypes.string,
  habilidad2:PropTypes.string,
  imagenbal: PropTypes.string,

};
export { Card };
