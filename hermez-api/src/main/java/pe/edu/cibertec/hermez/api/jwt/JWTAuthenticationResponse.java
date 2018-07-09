package pe.edu.cibertec.hermez.api.jwt;

import io.swagger.annotations.ApiModel;

@ApiModel(value = "Token")
public class JWTAuthenticationResponse {

    private String authorization;

    public String getAuthorization() {
        return authorization;
    }

    public void setAuthorization(String authorization) {
        this.authorization = authorization;
    }
}
