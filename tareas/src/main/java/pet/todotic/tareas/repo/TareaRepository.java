package pet.todotic.tareas.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import pet.todotic.tareas.model.Tarea;

public interface TareaRepository extends MongoRepository<Tarea, String> {
}
