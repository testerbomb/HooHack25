package com.carboload.demo.controller;

import org.springframework.web.bind.annotation.*;

import com.carboload.demo.model.User;

@RestController
@RequestMapping("/api")
public class LogInController {

    // Hardcoded username and password (for demo purposes only)
    private final String validUsername = "hoo";
    private final String validPassword = "hacks";

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getUsername().equals(validUsername) && loginRequest.getPassword().equals(validPassword)) {
            return new LoginResponse(true, new User("NOTHING YET", loginRequest.username));
        } else {
            return new LoginResponse(false, null);
        }
    }

    // LoginRequest POJO
    public static class LoginRequest {
        private String username;
        private String password;

        // Getters and Setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    // LoginResponse POJO
    public static class LoginResponse {
        private boolean success;
        private User user;

        public LoginResponse(boolean success, User user) {
            this.success = success;
            this.user = user;
        }

        // Getters and Setters
        public boolean isSuccess() {
            return success;
        }

        public void setSuccess(boolean success) {
            this.success = success;
        }

        public User getUser() {
            return this.user;
        }

        public void setMessage(User user) {
            this.user = user;
        }
    }
}
