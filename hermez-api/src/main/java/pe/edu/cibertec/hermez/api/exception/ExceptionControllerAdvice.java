package pe.edu.cibertec.hermez.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionControllerAdvice {

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<?> MethodArgumentNotValidException(UsernameNotFoundException e) {
        ExceptionResponse response = new ExceptionResponse();
        response.setMessage(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }

}
