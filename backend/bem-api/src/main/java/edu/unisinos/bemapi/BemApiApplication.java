package edu.unisinos.bemapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BemApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BemApiApplication.class, args);
	}

}
