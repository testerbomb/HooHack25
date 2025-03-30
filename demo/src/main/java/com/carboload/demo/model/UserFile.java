package com.carboload.demo.model;

import java.util.List;
import java.io.File;
import java.io.ObjectOutputStream;

public class UserFile {

    public static boolean writeToFile(User user, List<com.carboload.demo.model.UserEntry> list) {
        File file = new java.io.File("demo/src/main/resources/user_data/" + user.getUserName() + ".inf");
        try (ObjectOutputStream oos = new ObjectOutputStream(new java.io.FileOutputStream(file))) {
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