package com.carboload.demo.model;

/**
 * User Entry.
 * 
 * @apiNote Dates stored as array of three integers
 */
public class UserEntry {
    final int date[];
    final double carbonEmmision;
    String description;

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
}
