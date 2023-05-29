import "./App.css";
import { Col, Container, Row } from "reactstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";
import axios from "axios";
import FormularioTarea from "./FormularioTarea";
import Banner from "./Banner";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState();

  const cargarTareas = () => {
    axios
      .get("http://localhost:8080/tareas")
      .then(({ data }) => setTareas(data));
  };

  useEffect(cargarTareas, []);

  const onSubmit = (values) => {
    if (tarea) {
      axios.put(`http://localhost:8080/tareas/${tarea.id}`, values).then(() => {
        setTarea();
        cargarTareas();
      });
    } else {
      axios
        .post("http://localhost:8080/tareas", values)
        .then(() => cargarTareas());
    }
  };

  const deleteTarea = (tarea) => {
    axios
      .delete(`http://localhost:8080/tareas/${tarea.id}`)
      .then(() => cargarTareas());
  };

  return (
    <>
      <Container>
        <Banner />
        <Row className="mt-5">
          <Col md={6}>
            <ListaTareas
              tareas={tareas}
              onDelete={deleteTarea}
              onEdit={(tarea) => setTarea(tarea)}
            />
          </Col>
          <Col md={6}>
            <FormularioTarea onSubmit={onSubmit} tarea={tarea} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
