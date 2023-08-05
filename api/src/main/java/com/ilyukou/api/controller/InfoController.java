package com.ilyukou.api.controller;

import com.ilyukou.api.props.PomProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.Map;

@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/info")
@RequiredArgsConstructor
public class InfoController {

    private final PomProperties pomProperties;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getInfo() {
        return ResponseEntity.ok(Map.of(
                "timestamp", new Date(),
                "api", pomProperties.getProject()
        ));
    }
}
