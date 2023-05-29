import React from "react";
import img from "./img/Checklist.jpg";

const Banner = () => {
  return (
    <div className="raounded shadow p-5 mt-3 d-flex">
      <img src={img} alt="" width="250" />
      <div>
        <h3 className="text-primary">Bienvenido a Tareas</h3>
        <h5 className="text-secundary">
          Con esta aplicación podrás consultar, crear, actualizar y eliminar tus
          tareas
        </h5>
        <hr />

        <p className="text-muted">
          {" "}
          Esta aplicación fue desarrollada con Spring Boot, ReactJs y Mongo DB.
        </p>
      </div>
    </div>
  );
};

export default Banner;
