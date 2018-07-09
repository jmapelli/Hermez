package pe.edu.cibertec.hermez.api.product;

import org.springframework.stereotype.Service;
import pe.edu.cibertec.hermez.api.store.Store;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> findAll() {
        return (List<Product>) productRepository.findAll();
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product findById(Long idProduct) {
        Optional<Product> op = productRepository.findById(idProduct);

        if (!op.isPresent()) {
            //TODO: throw new NotFoundException;
        }

        return op.get();
    }

    @Override
    public Product update(Long idProduct, Product product) {
        product.setId(idProduct);
        return productRepository.save(product);
    }

    @Override
    public void delete(Long idProduct) {
        productRepository.deleteById(idProduct);
    }

}
