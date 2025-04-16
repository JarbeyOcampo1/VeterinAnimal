package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Peluqueria;

//Repository para la entidad Peluqueria, metdos crud
public interface PeluqueriaRepositorie extends JpaRepository <Peluqueria, Long> {
    
}
