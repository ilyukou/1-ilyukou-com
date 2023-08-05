package com.ilyukou.api.controller;

import com.ilyukou.api.model.RedirectResource;
import com.ilyukou.api.service.RedirectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Slf4j
@RestController
@CrossOrigin("*")
@RequestMapping("/redirect")
@RequiredArgsConstructor
public class RedirectController {

    private final RedirectService service;

    @GetMapping("{resource}")
    public ResponseEntity<Void> redirect(@PathVariable String resource) {
        String redirectTo = service.redirectTo(resource).toString();
        log.info("Found redirect location {} for following resource {}", redirectTo, resource);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(HttpHeaders.LOCATION, redirectTo);

        return new ResponseEntity<>(httpHeaders, HttpStatus.FOUND);
    }

    @GetMapping
    public ResponseEntity<List<RedirectResource>> getAll() {
        return ResponseEntity.ok(service.getResources());
    }
}
