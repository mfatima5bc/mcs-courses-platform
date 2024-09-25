## Back-end purchasing project

This project is a microservice for a course platform project that I started to learn the basic structure of how a microservice works and how they communicate.

### Concept
This microservice is responsible for making purchases.

### Business roles
**Products**: the application should be able to create and list products. The creation should require authentication.
**Clientes**: the application should authenticate the clients with auth0 service and save they data when they make his first purchase.
**Purchases**: the application should save the reference about who and what product was bayed.

### Stack
- Nodejs
- Typescript
- Nestjs
- Auth0


### Configurations to run this project on you machine

1. First you has to create a auth0 application and api to generate you credentials;