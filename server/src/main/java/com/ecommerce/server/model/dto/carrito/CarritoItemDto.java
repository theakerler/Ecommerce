package com.ecommerce.server.model.dto.carrito;

import com.ecommerce.server.model.entity.prenda.Prenda;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Builder
public class CarritoItemDto {

    private Long id;
    private Prenda prenda; // O un PrendaDto si prefieres
    private Integer cantidad;
}