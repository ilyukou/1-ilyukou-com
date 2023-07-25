package com.ilyukou.api.repo;

import com.ilyukou.api.exception.NoFoundRequiredResourceException;
import com.ilyukou.api.props.RedirectProperties;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.Map;

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
    public Map<String, URI> getResources() {
        return redirectProperties.getResources();
    }
}
