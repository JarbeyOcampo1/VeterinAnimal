package com.Veterinary.Animal.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Anotaciones de Lombok para generar getters, setters, constructores y toString
////Anotaciones de JPA para mapear la clase a una tabla de la base de datos
@Entity
@Table(name = "logins")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Login {
    
    //Atributos de la clase Login
    //Atributo id del login, se genera automaticamente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long loginID;

    private String nombreLogin;
    private String password;
    
}
