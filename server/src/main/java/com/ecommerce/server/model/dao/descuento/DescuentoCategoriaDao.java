package com.ecommerce.server.model.dao.descuento;

import com.ecommerce.server.model.entity.descuento.DescuentoCategoria;
import org.springframework.data.repository.CrudRepository;

public interface DescuentoCategoriaDao extends CrudRepository<DescuentoCategoria, Long> {
}
