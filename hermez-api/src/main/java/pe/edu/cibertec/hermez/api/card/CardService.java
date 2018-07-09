package pe.edu.cibertec.hermez.api.card;

import org.springframework.stereotype.Service;
import pe.edu.cibertec.hermez.api.user.IUserService;
import pe.edu.cibertec.hermez.api.user.User;
import pe.edu.cibertec.hermez.api.user.UserService;
import pe.edu.cibertec.hermez.api.util.HeaderService;

import java.util.List;

@Service
public class CardService implements ICardService {

    private CardRepository cardRepository;
    private HeaderService headerService;
    private IUserService userService;

    public CardService(CardRepository cardRepository,
                       HeaderService headerService,
                       IUserService userService) {
        this.cardRepository = cardRepository;
        this.headerService = headerService;
        this.userService = userService;
    }


    @Override
    public List<Card> findAll(String authorization) {
        User user = getUser(authorization);
        return cardRepository.findByUser_Id(user.getId());
    }

    @Override
    public Card save(String authorization, Card card) {
        User user = getUser(authorization);
        card.setUser(user);
        card.setNumber("xxxx-xxxx-xxxx-" + card.getNumber().substring(card.getNumber().length() - 4));
        return cardRepository.save(card);
    }

    @Override
    public void delete(Long idCard) {
        cardRepository.deleteById(idCard);
    }

    private User getUser(String authorization) {
        String username = headerService.getUsername(authorization);
        return userService.findOneByEmail(username);
    }
}
