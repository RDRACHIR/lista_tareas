import {
  faCheckCircle,
  faClock,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ListaTareas = ({ tareas, onDelete, onEdit }) => {
  return (
    <>
      <h3 className="mb-3">Mi lista de tareas </h3>

      {tareas.map((tarea) => (
        <div className="mb-3 border rounder p-3" hey={tarea.id}>
          <div className="d-flex justify-content-between mb-1">
            <div className="fw-bold">{tarea.nombre}</div>
            <div className="text-muted small">
              <FontAwesomeIcon
                icon={faEdit}
                className="cursor-pointer"
                onClick={() => onEdit(tarea)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer ms-2"
                onClick={() => onDelete(tarea)}
              />
            </div>
          </div>

          <div>
            {tarea.completado ? (
              <div className="text-success small">
                <FontAwesomeIcon icon={faCheckCircle} /> Completado
              </div>
            ) : (
              <div className="text-secundary small">
                <FontAwesomeIcon icon={faClock} /> Pendiente
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListaTareas;
