package com.Veterinary.Animal.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.Veterinary.Animal.Models.Productos;
import com.Veterinary.Animal.repositories.ProductosRepositorie;

//Ruta de la clase ProductosController
//Controlador de la clase Productos
@RestController
@RequestMapping("/api/productos")
public class ProductosController {

    //Inyeccion de dependencias de la clase ProductosRepositorie
    @Autowired
    private ProductosRepositorie productosRepositorie;

    // Obtener todos los productos
    @GetMapping
    public List <Productos> getAllProductos() {
        return productosRepositorie.findAll();
    }

    // Obtener producto por ID
    @GetMapping("/{productoID}")
    public Productos getProductoById(@PathVariable Long productoID) {
        return productosRepositorie.findById(productoID).orElse(null);
    }

    // Crear un nuevo producto
    @PostMapping
    public Productos createProductos(@RequestBody Productos productos) {
        return productosRepositorie.save(productos);
    }

    // Actualizar producto existente
    @PutMapping("/{productoID}")
    public Productos updateProductos(@PathVariable Long productoID, @RequestBody Productos productos) {
        productos.setProductoID(productoID);
        return productosRepositorie.save(productos);
    }

    // Eliminar producto por ID
    @DeleteMapping("/{productoID}")
    public void deleteProductos(@PathVariable Long productoID) {
        productosRepositorie.deleteById(productoID);
    }
}
