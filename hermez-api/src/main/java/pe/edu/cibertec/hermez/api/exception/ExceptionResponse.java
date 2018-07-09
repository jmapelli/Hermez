package pe.edu.cibertec.hermez.api.exception;

public class ExceptionResponse {

    //private int status;
    //private String error;
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
