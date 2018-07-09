package pe.edu.cibertec.hermez.api.card;

import java.util.List;

public interface ICardService {

    List<Card> findAll(String authorization);

    Card save(String authorization, Card card);

    void delete(Long idCard);

}
