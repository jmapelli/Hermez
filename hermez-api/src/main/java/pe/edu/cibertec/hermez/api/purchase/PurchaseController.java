package pe.edu.cibertec.hermez.api.purchase;

import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.hermez.api.user.IUserService;
import pe.edu.cibertec.hermez.api.user.User;
import pe.edu.cibertec.hermez.api.util.HeaderService;

import java.util.List;

@RestController
@RequestMapping("/api/purchases")
public class PurchaseController {

    private IPurchaseService purchaseService;
    private IUserService userService;
    private HeaderService headerService;

    public PurchaseController(IPurchaseService purchaseService,
                              IUserService userService,
                              HeaderService headerService) {
        this.purchaseService = purchaseService;
        this.userService = userService;
        this.headerService = headerService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Purchase> findAll(@RequestHeader(name = "Authorization") String authorization) {
        String username = headerService.getUsername(authorization);
        User user = userService.findOneByEmail(username);

        return purchaseService.findAll(user.getId());
    }

    @RequestMapping(method = RequestMethod.POST)
    public Purchase save(@RequestHeader(name = "Authorization") String authorization,
                         @RequestBody Purchase purchase) {
        String username = headerService.getUsername(authorization);
        User user = userService.findOneByEmail(username);

        return purchaseService.save(user.getId(), purchase);
    }

    @RequestMapping(value = "/{idPurchase}", method = RequestMethod.GET)
    public Purchase findByID(@PathVariable Long idPurchase) {
        return purchaseService.findById(idPurchase);
    }

}
