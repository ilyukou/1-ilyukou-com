package com.ilyukou.api.props;

import jakarta.annotation.PostConstruct;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.net.URI;
import java.util.Map;

@Slf4j
@Getter
@Setter
@Configuration
@ConfigurationProperties("com.ilyukou.api.redirect")
public class RedirectProperties {

    private Map<String, URI> resources;

    @PostConstruct
    void log() {
        log.info("Found {} redirect properties", resources.size());

        resources.forEach((resource, uri) -> log.info("Found redirection '{}' for resource '{}'", resource, uri));
    }
}
