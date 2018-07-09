package pe.edu.cibertec.hermez.api.util;

import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Service;

@Service
public class HeaderService {

    public String getUsername(String authorization) {
        String username = Jwts.parser()
                .setSigningKey("secret".getBytes())
                .parseClaimsJws(authorization.replace("Bearer ", ""))
                .getBody()
                .getSubject();

        return username;
    }

}
