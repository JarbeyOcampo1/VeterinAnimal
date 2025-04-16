package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Pacientes;

//Repository para la entidad Pacientes, metdos crud
public interface PacientesRepositorie extends JpaRepository <Pacientes, Long> {
    
}
