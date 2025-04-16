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
@Table(name = "consultas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Consultas {
    
    //Atributos de la clase Consultas
    //Atributo id de la consulta, se genera automaticamente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long consultaID;

    private String fechaConsulta;
    private String horaConsulta;
    private String tipoConsulta;

    //Relacion con propietario (muchos a uno)
    @ManyToOne
    @JoinColumn(name="propietarioid", referencedColumnName = "propietarioID")
    private Propietarios propietarioID;

}
