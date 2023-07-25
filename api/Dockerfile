FROM eclipse-temurin:17-jdk-alpine
FROM maven:latest

# Copy source code to the Docker image
COPY src src
COPY pom.xml pom.xml

# Build application
RUN mvn clean install

# Extract builded JAR file
RUN cp -R target/*.jar app.jar

# Remove source code from the Docker image
RUN rm -rf src
RUN rm -rf target
RUN rm -f pom.xml

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app.jar"]