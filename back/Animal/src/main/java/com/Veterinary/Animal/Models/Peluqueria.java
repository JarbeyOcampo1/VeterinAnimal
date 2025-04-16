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
@Table(name = "peluqueria")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Peluqueria {
    
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long peluqueriaID;
    
    private String fechaPeluqueria;
    private String horaPeluqueria;
    private String tipoPeluqueria;
    private String estadoPeluqueria;
    private String precioPeluqueria;

    //Relacion con propietario (muchos a uno)
    @ManyToOne
    @JoinColumn(name="propietarioid", referencedColumnName = "propietarioID")
    private Propietarios propietarioID;

    //Relacion con paciente (muchos a uno)
    @ManyToOne
    @JoinColumn(name = "pacienteid", referencedColumnName = "pacienteID")
    private Pacientes pacienteID;

}
