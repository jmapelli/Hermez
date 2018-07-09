package pe.edu.cibertec.hermez.api.card;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {

    List<Card> findByUser_Id(Long idUser);

}
