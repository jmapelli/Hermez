package pe.edu.cibertec.hermez.api.purchase;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchaseRepository extends CrudRepository<Purchase, Long> {

    List<Purchase> findByUser_IdOrderByDateDesc(Long idUser);

}
