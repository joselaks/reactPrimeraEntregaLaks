import { CartWidjet } from "../CartWidget/CartWidjet";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
      <div>
        <a class="navbar-brand" href="#">TIENDA de JUGUETES</a>
        <button className="btn btn-success mx-2">JUEGOS DE MESA</button>
        <button className="btn btn-success mx-2">ROMPECABEZAS</button>
        <button className="btn btn-success mx-2">CAJAS</button>
      </div>
      <div className="d-flex">
        <CartWidjet /> 
      </div>
    </nav>
  );
};