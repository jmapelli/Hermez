package pe.edu.cibertec.hermez.api.store;

import pe.edu.cibertec.hermez.api.category.Category;
import pe.edu.cibertec.hermez.api.product.Product;

import java.util.List;

public interface IStoreService {

    List<Store> findAll();

    Store save(Store store);

    Store findById(Long idStore);

    Store update(Long idStore, Store store);

    void delete(Long idStore);

    List<Product> getCategories(Long idStore);

}
