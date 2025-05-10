package com.ecommerce.server.model.dto;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Builder
public class UsuarioDataClientDto {
    private Long id;
    private String nombreUsuario;
}
