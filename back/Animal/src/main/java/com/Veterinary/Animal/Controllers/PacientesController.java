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
import com.Veterinary.Animal.Models.Pacientes;
import com.Veterinary.Animal.repositories.PacientesRepositorie;

//Ruta de la clase PacientesController
//Controlador de la clase Pacientes
@RestController
@RequestMapping("/api/pacientes")
public class PacientesController {
    
    //Inyeccion de dependencias de clase PacientesRepositorie
    @Autowired
    private PacientesRepositorie pacientesRepositorie;

    //Tener todos los pacientes
    @GetMapping
    public List <Pacientes> getAllPacientes () {
        return pacientesRepositorie.findAll();
    }

    //Tener un paciente por una id
    @GetMapping("/{pacienteID}")
    public Pacientes getPacienteById (@PathVariable Long pacienteID) {
        return pacientesRepositorie.findById(pacienteID).orElse(null);
    }

    //Crear un paciente
    @PostMapping
    public Pacientes createPacientes (@RequestBody Pacientes pacientes) {
        return pacientesRepositorie.save(pacientes);
    }

    //Actualizar un paciente
    @PutMapping("/{pacienteID}")
    public Pacientes updatePacientes (@PathVariable Long pacienteID, @RequestBody Pacientes pacientes) {
        pacientes.setPacienteID(pacienteID);;
        return pacientesRepositorie.save(pacientes);
    }

    //Eliminar un paciente
    @DeleteMapping("/{pacienteID}")
    public void deletePacientes (@PathVariable Long pacienteID) {
        pacientesRepositorie.deleteById(pacienteID);
    }
}
