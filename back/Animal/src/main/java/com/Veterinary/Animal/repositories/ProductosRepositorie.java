package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Productos;

// Repository para la entidad Productos, metdos crud
public interface ProductosRepositorie extends JpaRepository <Productos, Long> {
    
}
