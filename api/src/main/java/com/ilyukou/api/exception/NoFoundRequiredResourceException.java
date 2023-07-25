package com.ilyukou.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class NoFoundRequiredResourceException extends RuntimeException {
    public NoFoundRequiredResourceException(String message) {
        super(message);
    }
}
