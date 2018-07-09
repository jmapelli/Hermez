package pe.edu.cibertec.hermez.api.store;

import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.hermez.api.product.Product;

import java.util.List;

@RestController
@RequestMapping("/api/stores")
public class StoreController {

    private IStoreService storeService;

    public StoreController(IStoreService storeService) {
        this.storeService = storeService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Store> findAll() {
        return storeService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Store save(@RequestBody Store store) {
        return storeService.save(store);
    }

    @RequestMapping(value = "/{idStore}", method = RequestMethod.GET)
    public Store findById(@PathVariable Long idStore) {
        return storeService.findById(idStore);
    }

    @RequestMapping(value = "/{idStore}", method = RequestMethod.PUT)
    public Store update(@PathVariable Long idStore,
                        @RequestBody Store store) {
        return storeService.update(idStore, store);
    }

    @RequestMapping(value = "/{idStore}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long idStore) {
        storeService.delete(idStore);
    }

    @RequestMapping(value = "/{idStore}/products", method = RequestMethod.GET)
    public List<Product> getProducts(@PathVariable Long idStore) {
        return storeService.getCategories(idStore);
    }

}
