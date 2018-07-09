package pe.edu.cibertec.hermez.api.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import pe.edu.cibertec.hermez.api.exception.ExceptionResponse;
import pe.edu.cibertec.hermez.api.user.User;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;

import static pe.edu.cibertec.hermez.api.jwt.JWTConstants.*;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req,
                                                HttpServletResponse res) throws AuthenticationException {
        Authentication authentication = null;

        try {
            User creds = new ObjectMapper()
                    .readValue(req.getInputStream(), User.class);

            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            creds.getEmail(),
                            creds.getPassword(),
                            new ArrayList<>()));

        } catch (AuthenticationException e) {
            try {
                res.setContentType(MediaType.APPLICATION_JSON.toString());
                res.setStatus(HttpServletResponse.SC_BAD_REQUEST);

                ExceptionResponse response = new ExceptionResponse();
                response.setMessage(e.getMessage());

                PrintWriter writer = res.getWriter();
                writer.println(new ObjectMapper()
                        .writerWithDefaultPrettyPrinter()
                        .writeValueAsString(response));
                writer.close();
            } catch (Exception e1) {
                res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            e.printStackTrace();
            res.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }

        return authentication;
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {

        String token = Jwts.builder()
                .setSubject(((org.springframework.security.core.userdetails.User) auth.getPrincipal()).getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET.getBytes())
                .compact();

        res.setContentType(MediaType.APPLICATION_JSON.toString());
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);

        JWTAuthenticationResponse response = new JWTAuthenticationResponse();
        response.setAuthorization(TOKEN_PREFIX + token);

        PrintWriter writer = res.getWriter();
        writer.println(new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(response));
        writer.close();
    }
}
