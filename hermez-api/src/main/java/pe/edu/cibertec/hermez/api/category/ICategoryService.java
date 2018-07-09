package pe.edu.cibertec.hermez.api.category;

import pe.edu.cibertec.hermez.api.store.Store;

import java.util.List;

public interface ICategoryService {


    List<Category> findAll();

    Category save(Category category);

    Category findById(Long idCategory);

    Category update(Long idCategory, Category category);

    void delete(Long idCategory);

    List<Store> getStores(Long idCategory);

}
