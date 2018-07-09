package pe.edu.cibertec.hermez.api.store;

import org.springframework.stereotype.Service;
import pe.edu.cibertec.hermez.api.category.Category;
import pe.edu.cibertec.hermez.api.product.Product;

import java.util.List;
import java.util.Optional;

@Service
public class StoreService implements IStoreService {

    private StoreRepository storeRepository;

    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }


    @Override
    public List<Store> findAll() {
        return (List<Store>) storeRepository.findAll();
    }

    @Override
    public Store save(Store store) {
        return storeRepository.save(store);
    }

    @Override
    public Store findById(Long idStore) {
        Optional<Store> op = storeRepository.findById(idStore);

        if (!op.isPresent()) {
            //TODO: throw new NotFoundException;
        }

        return op.get();
    }

    @Override
    public Store update(Long idStore, Store store) {
        store.setId(idStore);
        return this.save(store);
    }

    @Override
    public void delete(Long idStore) {
        storeRepository.deleteById(idStore);
    }

    @Override
    public List<Product> getCategories(Long idStore) {
        return this.findById(idStore).getProducts();
    }

}
