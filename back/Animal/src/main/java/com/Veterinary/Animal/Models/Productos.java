package com.Veterinary.Animal.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Anotaciones de Lombok para generar getters, setters, constructores y toString
//Anotaciones de JPA para mapear la clase a una tabla de la base de datos
@Entity
@Table(name = "productos")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Productos {
    
    //Atributos de la clase Productos
    //Atributo id del producto, se genera automaticamente
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productoID;
    
    private String nombreProducto;
    private String tipoProducto;
    private String descripcionProducto;
    private String marcaProducto;
    private String precioProducto;
    private String cantidadProducto;
}
