package pe.edu.cibertec.hermez.api.purchase;

import org.springframework.stereotype.Service;
import pe.edu.cibertec.hermez.api.user.User;

import java.util.List;
import java.util.Optional;

@Service
public class PurchaseService implements IPurchaseService {

    private PurchaseRepository purchaseRepository;

    public PurchaseService(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    @Override
    public List<Purchase> findAll(Long idUSer) {
        return (List<Purchase>) purchaseRepository.findByUser_IdOrderByDateDesc(idUSer);
    }

    @Override
    public Purchase save(Long idUser, Purchase purchase) {
        purchase.setUser(new User(idUser));
        return purchaseRepository.save(purchase);
    }

    @Override
    public Purchase findById(Long idPurchase) {
        Optional<Purchase> op = purchaseRepository.findById(idPurchase);

        if (!op.isPresent()) {
            //TODO: throw new NotFoundException;
        }

        return op.get();
    }
}
