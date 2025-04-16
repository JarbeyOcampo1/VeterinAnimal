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
//Anotaciones de JPA para mapear la clase a una tabla de la base de datos
@Entity
@Table(name = "propietarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Propietarios {
    
    //Atributos de la clase Propietarios
    //Atributo id del propietario, se genera automaticamente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long propietarioID;

    private String nombrePropietario;
    private String apellidoPropietario;
    private String cedulaPropietario;
    private String telefonoPropietario;
    private String correoPropietario;
    private String direccionPropietario;
}
