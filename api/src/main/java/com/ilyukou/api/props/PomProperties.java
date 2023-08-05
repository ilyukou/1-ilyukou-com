package com.ilyukou.api.props;

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
@ConfigurationProperties("com.ilyukou.api")
public class PomProperties {

    private Map<String, URI> project;
}
