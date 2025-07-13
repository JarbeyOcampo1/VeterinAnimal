# VeterinAnimal

  <img width="267" height="189" alt="image" src="https://github.com/user-attachments/assets/458941a8-92aa-450a-89cb-55b6c0d5d2cf" />

This app is about a veterinarian

***Functions
- The app allows you to register, add products, pet owners, patients (pets), medical consultations, surgeries, hospital stays, and grooming sessions

-This project was developed using Spring Boot, React, and MySQL.

recommendation: To use this app, you need to change the database username and password

*This is the directory where you need to make the change
-backend: src/main/resources/application.propierties

```Java
spring.datasource.url=jdbc:mysql://localhost:3306/database_name?useSSL=false&serverTimezone=UTC
spring.datasource.username=username
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

```
