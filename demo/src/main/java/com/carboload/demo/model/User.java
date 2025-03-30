package com.carboload.demo.model;

public class User {
    private String username;
    private String email;

    // Constructor, getters, and setters
    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getUserName() {
        return this.username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
