package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Cirugias;

//Repository para la entidad Consultas, metdos crud
public interface CirugiasRepositorie extends JpaRepository <Cirugias, Long> {
    
}
