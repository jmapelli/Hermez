package pe.edu.cibertec.hermez.api.user;

public interface IUserService {

    User findOneByEmail(String email);

    User save(User userModel);

}
