package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Propietarios;

//Repository para la entidad Propietarios, metdos crud
public interface PropietariosRepositorie extends JpaRepository <Propietarios, Long> {
    
}
