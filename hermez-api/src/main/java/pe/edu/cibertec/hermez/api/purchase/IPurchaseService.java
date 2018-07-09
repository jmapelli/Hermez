package pe.edu.cibertec.hermez.api.purchase;

import java.util.List;

public interface IPurchaseService {

    List<Purchase> findAll(Long idUSer);

    Purchase save(Long idUser, Purchase purchase);

    Purchase findById(Long idPurchase);

}
