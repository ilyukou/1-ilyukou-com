package com.ilyukou.api.service;

import com.ilyukou.api.model.RedirectResource;

import java.net.URI;
import java.util.List;

public interface RedirectService {
    URI redirectTo(String resource) throws IllegalArgumentException;

    List<RedirectResource> getResources();
}
