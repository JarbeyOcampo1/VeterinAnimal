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

@Entity
@Table(name = "pacientes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pacientes {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pacienteID;
    
    private String nombrePaciente;
    private String especiePaciente;
    private String razaPaciente;
    private String sexoPaciente;
    private String edad;
    private String pesoPaciente;
    private String colorPaciente;
    private String fechaNacimiento;
    private String historialClinico;

    //Relacion con propietario (muchos a uno)
    @ManyToOne
    @JoinColumn(name="propietarioid", referencedColumnName = "propietarioID")
    private Propietarios propietarioID;

}
