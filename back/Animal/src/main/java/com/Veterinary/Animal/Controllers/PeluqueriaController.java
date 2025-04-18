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

import com.Veterinary.Animal.Models.Peluqueria;
import com.Veterinary.Animal.repositories.PeluqueriaRepositorie;


//Ruta de la clase PeluqueriaController
//Controlador de la clase Peluqueria
@RestController
@RequestMapping("/api/peluqueria")
public class PeluqueriaController {

    //Inyeccion de dependencias de clase PeluqueriaRepositorie
    @Autowired
    private PeluqueriaRepositorie peluqueriaRepositorie;

    //Obtener todas las citas de la peluqueria
    @GetMapping
    public List <Peluqueria> getAllPeluqueria() {
        return peluqueriaRepositorie.findAll();
    }
    
    //Obtener una cita de la peluqueria por la id
    @GetMapping("/{peluqueriaID}")
    public Peluqueria getPeluqueriaById (@PathVariable Long peluqueriaID) {
        return peluqueriaRepositorie.findById(peluqueriaID).orElse(null);
    }

    //Crear una cita en la peluqueria
    @PostMapping
    public Peluqueria createPeluqueria (@RequestBody Peluqueria peluqueria) {
        return peluqueriaRepositorie.save(peluqueria);
    }

    //Actualizar una cita en la peluqueria
    @PutMapping("/{peluqueriaID}")
    public Peluqueria updatePeluqueria (@PathVariable Long peluqueriaID, @RequestBody Peluqueria peluqueria) {
        peluqueria.setPeluqueriaID(peluqueriaID);
        return peluqueriaRepositorie.save(peluqueria);
    }

    //Eliminar una cita de la peluqueria
    @DeleteMapping("/{peluqueriaID}")
    public void deletePeluqueria (@PathVariable Long peluqueriaID) {
        peluqueriaRepositorie.deleteById(peluqueriaID);
    }

}
