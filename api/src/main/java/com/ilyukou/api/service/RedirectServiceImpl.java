package com.ilyukou.api.service;

import com.ilyukou.api.exception.NoFoundRequiredResourceException;
import com.ilyukou.api.model.RedirectResource;
import com.ilyukou.api.props.RedirectProperties;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class RedirectServiceImpl implements RedirectService {

    private final RedirectProperties redirectProperties;

    @Override
    public URI redirectTo(String resource) throws IllegalArgumentException {
        if (redirectProperties.getResources().containsKey(resource)) {
            return redirectProperties.getResources().get(resource);
        }

        throw new NoFoundRequiredResourceException(resource + " not found");
    }

    @Override
    public List<RedirectResource> getResources() {
        return redirectProperties.getResources().entrySet().stream()
                .map(es -> new RedirectResource(es.getKey(), es.getValue()))
                .collect(Collectors.toList());
    }
}
