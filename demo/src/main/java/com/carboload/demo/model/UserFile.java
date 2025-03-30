package com.carboload.demo.model;

import java.util.List;
import java.io.File;
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class UserFile {

    public static boolean writeToFile(User user, List<com.carboload.demo.model.UserEntry> list) {
        // Correct the file path to match the actual location of the user_data directory

        File file = new File(user.getUserName() + ".inf");
        System.out.println("Attempting to write to file: " + file.getAbsolutePath());
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(file))) {
            oos.writeObject(list);
            return true;
        } catch (java.io.IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static List<com.carboload.demo.model.UserEntry> readFromFile(String userName) {
        File file = new File("demo/src/main/resources/user_data/" + userName + ".inf");

        if (!file.exists()) {
            return null;
        }
        try (java.io.ObjectInputStream ois = new java.io.ObjectInputStream(new java.io.FileInputStream(file))) {
            return (List<UserEntry>) ois.readObject();
        } catch (java.io.IOException | ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }

    }
}