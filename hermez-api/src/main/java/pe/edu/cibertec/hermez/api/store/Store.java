package pe.edu.cibertec.hermez.api.store;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import pe.edu.cibertec.hermez.api.category.Category;
import pe.edu.cibertec.hermez.api.product.Product;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "stores")
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;

    private String description;

    @Column(nullable = false, unique = true)
    private String address;

    private String logo;

    private String banner;

    @Column(nullable = false)
    private Double price;

    @ManyToOne(targetEntity = Category.class)
    @JoinColumn(name = "category", nullable = false)
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "store", cascade = CascadeType.ALL)
    private List<Product> products;

    public Store() {
    }

    public Store(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
