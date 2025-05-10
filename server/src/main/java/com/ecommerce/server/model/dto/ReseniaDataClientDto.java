package com.ecommerce.server.model.dto;

import com.ecommerce.server.model.entity.prenda.Prenda;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@ToString
@Builder
public class UserDataClientDto {
    private Long id;
    private String nombreUsuario;
    private Integer calificacion;
    private String comentario;
    private LocalDateTime fecha;

}
