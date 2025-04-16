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
@Table(name = "hospitalizados")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Hospitalizados {
    
    //Atributos de la clase Hospitalizados
    //Atributo id del hospitalizado, se genera automaticamente
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long hospitalizadoID;

    private String fechaIngreso;
    private String fechaSalida;
    private String horaEntrada;
    private String horaSalida;
    private String estado;
    private String tratamiento;
    private String cuidadoEspecial;
    private String diagnostico;
    private String costo;
    private String observaciones;

     //Relacion con propietario (muchos a uno)
    @ManyToOne
    @JoinColumn(name="propietarioid", referencedColumnName = "propietarioID")
    private Propietarios propietarioID;

    //Relacion con paciente (muchos a uno)
    @ManyToOne
    @JoinColumn(name = "pacienteid", referencedColumnName = "pacienteID")
    private Pacientes pacienteID;

}
