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
import com.Veterinary.Animal.Models.Hospitalizados;
import com.Veterinary.Animal.repositories.HospitalizadosRepositorie;


//Ruta de la clase HospitalizadosController
//Controlador de la clase Hospitalizados
@RestController
@RequestMapping("/api/hospitalizados")
public class HospitalizadosController {
 
    //Inyeccion de dependencias de clase HospitalizadosRepositorie
    @Autowired
    private HospitalizadosRepositorie hospitalizadosRepositorie;

    //Obtener todos los hospitalizados
    @GetMapping
    public List <Hospitalizados> getAllHospitalizados () {
        return hospitalizadosRepositorie.findAll();
    }

    //obtener hospitalizado por id
    @GetMapping("/{hospitalizadoID}")
    public Hospitalizados getHospitalizadoById (@PathVariable Long hospitalizadoID) {
        return hospitalizadosRepositorie.findById(hospitalizadoID).orElse(null);
    }

    //crear hospitalizado
    @PostMapping
    public Hospitalizados createHospitalizado (@RequestBody Hospitalizados hospitalizado) {
        return hospitalizadosRepositorie.save(hospitalizado);
    }

    //Actualizar hospitalizado
    @PutMapping("/{hospitalizadoID}")
    public Hospitalizados updateHospitalizado (@PathVariable Long hospitalizadoID, @RequestBody Hospitalizados hospitalizado) {
        hospitalizado.setHospitalizadoID(hospitalizadoID);
        return hospitalizadosRepositorie.save(hospitalizado);
    }

    //Eliminar hospitalizado
    @DeleteMapping("/{hospitalizadoID}")
    public void deleteHospitalizado (@PathVariable Long hospitalizadoID) {
        hospitalizadosRepositorie.deleteById(hospitalizadoID);
    }
    
}
