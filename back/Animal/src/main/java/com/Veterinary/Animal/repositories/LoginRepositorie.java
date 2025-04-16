package com.Veterinary.Animal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Veterinary.Animal.Models.Login;

//Repository para la entidad Login, metdos crud
public interface LoginRepositorie extends JpaRepository <Login, Long>{

    //Método para buscar un Login por nombre de usuario y password
    Login findByNombreLoginAndPassword(String nombreLogin, String password);

}
