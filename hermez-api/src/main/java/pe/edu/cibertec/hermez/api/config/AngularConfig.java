package pe.edu.cibertec.hermez.api.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AngularConfig {

    @RequestMapping({"/","/admin"})
    public String redirect() {
        return "forward:/index.html";
    }

}