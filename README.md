# ilyukou-com
## 0. Environment variables

## 1. Run locally
### 1.1. Build API application
```shell
cd api
docker build --no-cache -t ilyailyukou/api-ilyukou-com:latest .
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
