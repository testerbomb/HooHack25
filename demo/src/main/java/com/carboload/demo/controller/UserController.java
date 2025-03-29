package com.carboload.demo.controller;

import com.carboload.demo.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/api/users")
    public User getUser() {
        // For simplicity, return a static user
        return new User("John Doe", "john.doe@example.com");
    }
}
