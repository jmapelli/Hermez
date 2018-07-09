package pe.edu.cibertec.hermez.api.purchase;

import com.fasterxml.jackson.annotation.JsonIgnore;
import pe.edu.cibertec.hermez.api.user.User;

import javax.persistence.*;
import java.util.Date;

@Table
@Entity(name = "purchases")
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String detail;

    private String comment;

    @Column(nullable = false)
    private String card;

    private int quantity;

    private Double price;

    private Double subtotal;

    @Column(nullable = false)
    private Double total;

    private String nameOrigin;

    private String docOrigin;

    private String phoneOrigin;

    @Column(nullable = false)
    private String addressOrigin;

    private String nameArrival;

    private String docArrival;

    private String phoneArrival;

    @Column(nullable = false)
    private String addressArrival;

    @JsonIgnore
    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user", nullable = false)
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(Double subtotal) {
        this.subtotal = subtotal;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getNameOrigin() {
        return nameOrigin;
    }

    public void setNameOrigin(String nameOrigin) {
        this.nameOrigin = nameOrigin;
    }

    public String getDocOrigin() {
        return docOrigin;
    }

    public void setDocOrigin(String docOrigin) {
        this.docOrigin = docOrigin;
    }

    public String getPhoneOrigin() {
        return phoneOrigin;
    }

    public void setPhoneOrigin(String phoneOrigin) {
        this.phoneOrigin = phoneOrigin;
    }

    public String getAddressOrigin() {
        return addressOrigin;
    }

    public void setAddressOrigin(String addressOrigin) {
        this.addressOrigin = addressOrigin;
    }

    public String getNameArrival() {
        return nameArrival;
    }

    public void setNameArrival(String nameArrival) {
        this.nameArrival = nameArrival;
    }

    public String getDocArrival() {
        return docArrival;
    }

    public void setDocArrival(String docArrival) {
        this.docArrival = docArrival;
    }

    public String getPhoneArrival() {
        return phoneArrival;
    }

    public void setPhoneArrival(String phoneArrival) {
        this.phoneArrival = phoneArrival;
    }

    public String getAddressArrival() {
        return addressArrival;
    }

    public void setAddressArrival(String addressArrival) {
        this.addressArrival = addressArrival;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @PrePersist
    private void prePersist() {
        this.date = new Date();
    }
}
