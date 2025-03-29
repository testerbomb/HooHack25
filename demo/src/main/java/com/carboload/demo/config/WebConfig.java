package com.carboload.demo.config;

//import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Allow CORS for all API endpoints
                .allowedOrigins("*") // Allow requests from the frontend (React, Vue, etc.)
                .allowedMethods("GET", "POST") // Allow specific HTTP methods
                .allowedHeaders("*"); // Allow all headers
    }
}
