package com.Veterinary.Animal.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Veterinary.Animal.Models.Propietarios;
import com.Veterinary.Animal.repositories.PropietariosRepositorie;

//Ruta de la clase PropietariosController
//Controlador de la clase Propietarios
@RestController
@RequestMapping("/api/propietarios")
public class PropietariosController {
    
    //Inyeccion de dependencias de la clase PropietariosRepositorie
    @Autowired
    private PropietariosRepositorie propietariosRepositorie;

    //Metodo para obtener todos los propietarios
    @GetMapping
    public List <Propietarios> getAllPropietarios() {
        return propietariosRepositorie.findAll();
    }

    //Metodo para obtener un propietario por su id
    @GetMapping("/{propietarioID}")
    public Propietarios getPropietarioById (@PathVariable Long propietarioID) {
        return propietariosRepositorie.findById(propietarioID).orElse(null);
    }

    //Crear un nuevo propietario
    @PostMapping
    public Propietarios createPropietarios (@RequestBody Propietarios propietarios) {
        return propietariosRepositorie.save(propietarios);
    }

    //Actualizar un propietario
    @PutMapping("/{propietarioID}")
    public Propietarios updatePropietario (@PathVariable Long propietarioID, @RequestBody Propietarios propietarios) {
        propietarios.setPropietarioID(propietarioID);
        return propietariosRepositorie.save(propietarios);
    }

    //Eliminar un propietario por su id
    @DeleteMapping("/{propietarioID}")
    public void deletePropietario (@PathVariable Long propietarioID) {
        propietariosRepositorie.deleteById(propietarioID);
    }

}
