package pe.edu.cibertec.hermez.api.category;

import org.springframework.web.bind.annotation.*;
import pe.edu.cibertec.hermez.api.store.Store;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private ICategoryService categoryService;

    public CategoryController(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Category> findAll() {
        return categoryService.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Category save(@RequestBody Category category) {
        return categoryService.save(category);
    }

    @RequestMapping(value = "/{idCategory}", method = RequestMethod.PUT)
    public Category update(@PathVariable Long idCategory,
                           @RequestBody Category category) {
        category.setId(idCategory);
        return categoryService.update(idCategory, category);
    }

    @RequestMapping(value = "/{idCategory}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long idCategory) {
        categoryService.delete(idCategory);
    }

    @RequestMapping(value = "/{idCategory}/stores", method = RequestMethod.GET)
    public List<Store> getStores(@PathVariable Long idCategory) {
        return categoryService.getStores(idCategory);
    }
}
