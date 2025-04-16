package com.Veterinary.Animal.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Anotaciones de Lombok para generar getters, setters, constructores y toString
//Anotaciones de JPA para mapear la clase a una tabla de la base de datos
@Entity
@Table(name = "cirugias")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cirugias {
    
    //Atributos de la clase Cirugias
    //Atributo id de la cirugia, se genera automaticamente
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long cirugiaID;

    private String fechaCirugia;
    private String horaCirugia;
    private String tipoCirugia;
    private String estadoCirugia;
    private String observaciones;
    private String complicaciones;
    private String costoCirugia;

    //Relacion con propietario (muchos a uno)
    @ManyToOne
    @JoinColumn(name="propietarioid", referencedColumnName = "propietarioID")
    private Propietarios propietarioID;

    //Relacion con paciente (muchos a uno)
    @ManyToOne
    @JoinColumn(name = "pacienteid", referencedColumnName = "pacienteID")
    private Pacientes pacienteID;
}
