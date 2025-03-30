package com.carboload.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/health-check")
public class HealthCheckController {

    @GetMapping
    public Check healthCheck() {
        return new Check(true);

    }

    public static class Check {
        boolean ok;

        Check(boolean ok) {
            this.ok = ok;
        }

        public boolean isOk() {
            return ok;
        }

    }

}