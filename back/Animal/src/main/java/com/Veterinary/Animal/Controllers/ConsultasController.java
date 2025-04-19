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
import com.Veterinary.Animal.Models.Consultas;
import com.Veterinary.Animal.repositories.ConsultasRepositorie;

//Ruta de la clase ConsultasController
//Controlador de la clase Consultas
@RestController
@RequestMapping("/api/consultas")
public class ConsultasController {

    //Inyeccion de dependencias de clase ConsultasRepositorie
    @Autowired
    private ConsultasRepositorie consultasRepositorie;

    //obtener todas la consultas
    @GetMapping
    public List <Consultas> getAllConsultas () {
        return consultasRepositorie.findAll();
    }

    //obtener una consulta por una id 
    @GetMapping("/{consultaID}")
    public Consultas getConsultasById (@PathVariable Long consultaID) {
        return consultasRepositorie.findById(consultaID).orElse(null);
    }

    //Crear una consulta
    @PostMapping
    public Consultas createConsultas (@RequestBody Consultas consultas) {
        return consultasRepositorie.save(consultas);
    }

    //actualizar una consulta
    @PutMapping("/{consultaID}")
    public Consultas updateConsultas (@PathVariable Long consultaID, @RequestBody Consultas consultas) {
        consultas.setConsultaID(consultaID);
        return consultasRepositorie.save(consultas);
    }

    //Eliminar uan consulta
    @DeleteMapping("/{consultaID}")
    public void deleteConsultas (@PathVariable Long consultaID) {
        consultasRepositorie.deleteById(consultaID);
    }
    
}
