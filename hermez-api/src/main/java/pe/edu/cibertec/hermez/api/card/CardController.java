package pe.edu.cibertec.hermez.api.card;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {

    private ICardService cardService;

    public CardController(ICardService cardService) {
        this.cardService = cardService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Card> findAll(@RequestHeader(name = "Authorization") String authorization) {
        return cardService.findAll(authorization);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Card save(@RequestHeader(name = "Authorization") String authorization,
                     @RequestBody Card card) {
        return cardService.save(authorization, card);
    }

    @RequestMapping(value = "/{idCard}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long idCard) {
        cardService.delete(idCard);
    }

}
