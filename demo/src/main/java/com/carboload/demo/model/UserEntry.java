package com.carboload.demo.model;

import java.io.Serializable;

/**
 * User Entry.
 * 
 * @apiNote Dates stored as array of three integers
 */
public class UserEntry implements Serializable {
    private static final long serialVersionUID = 1L; // Add a serialVersionUID for version control

    private final int[] date; // Changed to private for encapsulation
    private final double carbonEmmision;
    private String description;

    public UserEntry(int day, int month, int year, double carbonEmmision, String description) {
        this.date = new int[] { day, month, year };
        this.carbonEmmision = carbonEmmision;
        this.description = description;
    }

    public int[] getDate() {
        return date;
    }

    public double getCarbonEmmision() {
        return carbonEmmision;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
