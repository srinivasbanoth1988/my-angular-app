package aru.angular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class MyAngularApp {
    public static void main(String arg[]) {
        SpringApplication.run(MyAngularApp.class, arg);
    }

}
