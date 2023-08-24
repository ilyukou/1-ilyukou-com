# ilyukou-com
## 0. Environment variables

## 1. Run locally
### 1.1. Build API application
```shell
mvn -f api spring-boot:build-image -Ddocker.image.name=IMAGE_NAME
```
### 1.2. Build and Push API application
```shell
mvn -f api spring-boot:build-image -Ddocker.image.name=IMAGE_NAME -Ddocker.registry.publish=true -Ddocker.registry.url=REGISTRY_URL -Ddocker.registry.username=USERNAME -Ddocker.registry.password=PASSWORD
```

### 1.2. Build UI application
```shell
cd ui
```
```shell
docker build --no-cache -t ilyailyukou/ilyukou-com:latest .
```

### 1.3. Run docker-compose file
```shell
docker-compose up
```
