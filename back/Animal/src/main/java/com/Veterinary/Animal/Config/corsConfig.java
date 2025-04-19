package com.Veterinary.Animal.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.lang.NonNull;

// Anotación que indica que esta clase contiene la configuración para el controlador web
@Configuration
public class corsConfig  implements WebMvcConfigurer{
    
    // Método que sobreescribe la configuración por defecto para permitir solicitudes CORS
    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**") // Aplica esta configuración a todas las rutas del backend
        .allowedOrigins("http://localhost:5173/") //URL del frontend
        .allowedMethods("*") //Metodos permitidos desde del frontend
        .allowCredentials(true); //Permite credenciales
    }

}
