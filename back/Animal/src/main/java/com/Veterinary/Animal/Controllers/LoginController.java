package com.Veterinary.Animal.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.Veterinary.Animal.Models.Login;
import com.Veterinary.Animal.repositories.LoginRepositorie;

//Ruta de la clase LoginsController
//Controlador de la clase Logins
@RestController
@RequestMapping("/api/logins")
public class LoginController {
    
    //Inyeccion de dependencias de clase LoginsRepositorie
    @Autowired
    private LoginRepositorie loginRepositorie;

    //Obtener todos los logins
    @GetMapping
    public List <Login> getAllLogins () {
        return loginRepositorie.findAll();
    }

    //Obtener un login por una id
    @GetMapping("/{loginID}")
    public Login getLoginById (@PathVariable Long loginID) {
        return loginRepositorie.findById(loginID).orElse(null);
    }

    //Crear un Login
    @PostMapping
    public Login createLogin (@RequestBody Login login) {
        return loginRepositorie.save(login);
    }

    //Actualizar un Login
    @PutMapping("/{loginID}")
    public Login updateLogin (@PathVariable Long loginID, @RequestBody Login login) {
        login.setLoginID(loginID);
        return loginRepositorie.save(login);
    }

    //Eliminar un Login
    @DeleteMapping("/{loginID}")
    public void deleteLogin (@PathVariable Long loginID) {
        loginRepositorie.deleteById(loginID);
    }

    //Validar si el usuario existe en la base de datos
    @PostMapping("/validar")
    public ResponseEntity <String> validateLogin (@RequestBody Login login) {
        Login foundLoing = loginRepositorie.findByNombreLoginAndPassword(login.getNombreLogin(),login.getPassword());

        if (foundLoing != null) {
            return ResponseEntity.status(HttpStatus.OK).body("Exito");
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error");
        }
    }
    
}   
