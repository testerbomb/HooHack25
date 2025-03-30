package com.carboload.demo.model;

public class User {
    private String userName;
    private String email;

    // Default no-argument constructor required by Jackson
    public User() {
    }

    public User(String email, String userName) {
        this.email = email;
        this.userName = userName;
    }

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String username) {
        this.userName = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
