package pe.edu.cibertec.hermez.api.product;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private IProductService productService;

    public ProductController(IProductService productService) {
        this.productService = productService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> findAll() {
        return productService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Product save(@RequestBody Product product) {
        return productService.save(product);
    }

    @RequestMapping(value = "/{idProduct}", method = RequestMethod.GET)
    public Product findById(@PathVariable Long idProduct) {
        return productService.findById(idProduct);
    }

    @RequestMapping(value = "/{idProduct}", method = RequestMethod.PUT)
    public Product update(@PathVariable Long idProduct,
                          @RequestBody Product product) {
        return productService.update(idProduct, product);
    }

    @RequestMapping(value = "/{idProduct}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long idProduct) {
        productService.delete(idProduct);
    }

}
