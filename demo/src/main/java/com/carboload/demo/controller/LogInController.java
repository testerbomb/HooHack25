package com.carboload.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LogInController {

    // Hardcoded username and password (for demo purposes only)
    private final String validUsername = "hoo";
    private final String validPassword = "hacks";

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getUsername().equals(validUsername) && loginRequest.getPassword().equals(validPassword)) {
            return new LoginResponse(true, "Login successful!");
        } else {
            return new LoginResponse(false, "Invalid username or password.");
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
        private String message;

        public LoginResponse(boolean success, String message) {
            this.success = success;
            this.message = message;
        }

        // Getters and Setters
        public boolean isSuccess() {
            return success;
        }

        public void setSuccess(boolean success) {
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
