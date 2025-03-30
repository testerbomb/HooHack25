package com.carboload.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.carboload.demo.model.User;
import com.carboload.demo.model.UserEntry;
import com.carboload.demo.model.UserFile;

@RestController
@RequestMapping("api/user-entries")
public class UserEntriesController {

    @GetMapping("/read")
    public List<UserEntry> readEntries(@RequestParam String request) {
        return UserFile.readFromFile(request);
    }

    @PostMapping("/write")
    public String writeEntries(@RequestBody WriteRequest writeRequest) {
        System.out.println("WriteRequest received: User = " + writeRequest.getUser());
        System.out.println("Entries = " + writeRequest.getEntries());

        for (UserEntry entry : writeRequest.getEntries()) {
            System.out.println("Date: " + java.util.Arrays.toString(entry.getDate()));
            System.out.println("Carbon Emission: " + entry.getCarbonEmmision());
            System.out.println("Description: " + entry.getDescription());

            System.out.println("Processing entry: " + entry);
        }
        boolean success = UserFile.writeToFile(writeRequest.getUser(), writeRequest.getEntries());
        System.out.println("Exiting\n");
        return success ? "Entries written successfully" : "Failed to write entries";
    }

    // Make WriteRequest a static inner class
    static class WriteRequest {
        private User user;
        private List<UserEntry> entries;

        public WriteRequest() {
            // Default no-argument constructor required by Jackson
        }

        public WriteRequest(User user, List<UserEntry> entries) {
            this.user = user;
            this.entries = entries;
        }

        public User getUser() {
            return user;
        }

        public void setUser(User user) {
            this.user = user;
        }

        public List<UserEntry> getEntries() {
            return entries;
        }

        public void setEntries(List<UserEntry> entries) {
            this.entries = entries;
        }
    }
}
