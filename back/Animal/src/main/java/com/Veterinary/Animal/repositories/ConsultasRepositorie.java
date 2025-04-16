package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Consultas;

//Repository para la entidad Consultas, metdos crud
public interface ConsultasRepositorie  extends JpaRepository <Consultas, Long>{
    
}
