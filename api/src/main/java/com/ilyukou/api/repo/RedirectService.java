package com.ilyukou.api.repo;

import java.net.URI;
import java.util.Map;

public interface RedirectService {
    URI redirectTo(String resource) throws IllegalArgumentException;

    Map<String, URI> getResources();
}
