package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Hospitalizados;

//Repository para la entidad Hospitalizados, metdos crud
public interface HospitalizadosRepositorie extends JpaRepository <Hospitalizados, Long> {
    
}
