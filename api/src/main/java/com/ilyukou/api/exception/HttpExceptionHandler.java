package com.ilyukou.api.exception;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HttpExceptionHandler {

    @Value("${com.com.ilyukou.api.redirect.error.404}")
    private String redirect404;

    @ExceptionHandler(NoFoundRequiredResourceException.class)
    protected ResponseEntity<Void> handleConflict(NoFoundRequiredResourceException ex) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(HttpHeaders.LOCATION, redirect404);

        return new ResponseEntity<>(httpHeaders, HttpStatus.FOUND);
    }
}
