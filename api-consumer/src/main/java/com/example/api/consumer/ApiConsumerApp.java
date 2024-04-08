package com.example.api.consumer;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class ApiConsumerApp implements CommandLineRunner {

  public static void main(String[] args) {
    SpringApplication.run(ApiConsumerApp.class, args);
  }

  @Override
  public void run(String... args) throws Exception {

    // TODO
  }
}