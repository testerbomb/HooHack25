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
        boolean success = UserFile.writeToFile(writeRequest.user, writeRequest.entries);
        return success ? "Entries written successfully" : "Failed to write entries";
    }

    class WriteRequest {
        private User user;
        private List<UserEntry> entries;

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
