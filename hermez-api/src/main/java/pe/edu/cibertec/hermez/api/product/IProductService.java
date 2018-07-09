package pe.edu.cibertec.hermez.api.product;

import java.util.List;

public interface IProductService {

    List<Product> findAll();

    Product save(Product product);

    Product findById(Long idProduct);

    Product update(Long idProduct, Product product);

    void delete(Long idProduct);

}
