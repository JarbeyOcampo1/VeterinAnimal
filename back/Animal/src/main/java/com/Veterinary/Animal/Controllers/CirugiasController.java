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
import com.Veterinary.Animal.Models.Cirugias;
import com.Veterinary.Animal.repositories.CirugiasRepositorie;

//Ruta de la clase CirugiasController
//Controlador de la clase Cirugias
@RestController
@RequestMapping("/api/cirugias")
public class CirugiasController {
    
    //Inyeccion de dependencias de clase CirugiasRepositorie
    @Autowired
    private CirugiasRepositorie cirugiasRepositorie;

    //obtener todos los cirugias
    @GetMapping
    public List <Cirugias> getAllCirugias () {
        return cirugiasRepositorie.findAll();
    }

    //obtener una cirugias por una id
    @GetMapping("/{cirugiaID}")
    public Cirugias getCirugiasById (@PathVariable Long cirugiaID) {
        return cirugiasRepositorie.findById(cirugiaID).orElse(null);
    }

    //crear un cirugia
    @PostMapping
    public Cirugias createCirugia (@RequestBody Cirugias cirugias) {
        return cirugiasRepositorie.save(cirugias);
    }

    //actualizar una cirugia
    @PutMapping("/{cirugiaID}")
    public Cirugias updateCirugias (@PathVariable Long cirugiaID, @RequestBody Cirugias cirugias) {
        cirugias.setCirugiaID(cirugiaID);
        return cirugiasRepositorie.save(cirugias);
    }

    //Eliminar una cirugia
    @DeleteMapping("/{cirugiaID}")
    public void deleteCirugia (@PathVariable Long cirugiaID) {
        cirugiasRepositorie.deleteById(cirugiaID);
    }

}
