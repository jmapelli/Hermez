package pe.edu.cibertec.hermez.api.category;

import org.springframework.stereotype.Service;
import pe.edu.cibertec.hermez.api.store.Store;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService implements ICategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<Category> findAll() {
        return (List<Category>) categoryRepository.findAll();
    }

    @Override
    public Category save(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category findById(Long idCategory) {
        Optional<Category> op = categoryRepository.findById(idCategory);

        if (!op.isPresent()) {
            //TODO: throw new NotFoundException;
        }

        return op.get();
    }

    @Override
    public Category update(Long idCategory, Category category) {
        category.setId(idCategory);
        return categoryRepository.save(category);
    }

    @Override
    public void delete(Long idCategory) {
        categoryRepository.deleteById(idCategory);
    }

    @Override
    public List<Store> getStores(Long idCategory) {
        return this.findById(idCategory).getStores();
    }


}
