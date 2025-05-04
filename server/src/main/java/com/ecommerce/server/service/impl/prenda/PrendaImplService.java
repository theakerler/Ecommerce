package com.ecommerce.server.service.impl.prenda;

import com.ecommerce.server.model.dao.prenda.*;
import com.ecommerce.server.model.dto.prenda.*;
import com.ecommerce.server.model.entity.prenda.*;
import com.ecommerce.server.service.prenda.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PrendaImplService implements IPrendaService {

    @Autowired
    private PrendaDao prendaDao;

    @Autowired
    private MarcaDao marcaDao;

    @Autowired
    private TallaDao tallaDao;

    @Autowired
    private CategoriaDao categoriaDao;

    @Autowired
    private ProveedorDao proveedorDao;



    @Autowired
    private IMarcaService marcaService;

    @Autowired
    private ITallaService tallaService;

    @Autowired
    private ICategoriaService categoriaService;

    @Autowired
    private IProveedorService proveedorService;


    @Override
    public List<Prenda> getPrendas() {
        return (List) prendaDao.findAll();
    }
    @Transactional(readOnly = true)
    @Override
    public Prenda getPrenda(Long id) {
        return prendaDao.findById(id).orElse(null);
    }

    @Transactional
    @Override
    public Prenda save(PrendaDto prendaDto) {
        // Validaciones adicionales (aunque el controlador ya las maneja)
        if (prendaDto.getMarcaDto() == null || prendaDto.getMarcaDto().getId() == null) {
            throw new IllegalArgumentException("El ID de la marca no puede ser nulo");
        }
        if (prendaDto.getTallaDto() == null || prendaDto.getTallaDto().getId() == null) {
            throw new IllegalArgumentException("El ID de la talla no puede ser nulo");
        }
        if (prendaDto.getCategoriaDto() == null || prendaDto.getCategoriaDto().getId() == null) {
            throw new IllegalArgumentException("El ID de la categoría no puede ser nulo");
        }
        if (prendaDto.getProveedorDto() == null || prendaDto.getProveedorDto().getId() == null) {
            throw new IllegalArgumentException("El ID del proveedor no puede ser nulo");
        }

        Marca marca = marcaService.getMarca(prendaDto.getMarcaDto().getId());
        if (marca == null) {
            throw new IllegalArgumentException("Marca con ID " + prendaDto.getMarcaDto().getId() + " no encontrada");
        }
        Talla talla = tallaService.getTalla(prendaDto.getTallaDto().getId());
        if (talla == null) {
            throw new IllegalArgumentException("Talla con ID " + prendaDto.getTallaDto().getId() + " no encontrada");
        }
        Categoria categoria = categoriaService.getCategoria(prendaDto.getCategoriaDto().getId());
        if (categoria == null) {
            throw new IllegalArgumentException("Categoría con ID " + prendaDto.getCategoriaDto().getId() + " no encontrada");
        }
        Proveedor proveedor = proveedorService.getProveedor(prendaDto.getProveedorDto().getId());
        if (proveedor == null) {
            throw new IllegalArgumentException("Proveedor con ID " + prendaDto.getProveedorDto().getId() + " no encontrada");
        }

        Prenda prenda = Prenda.builder()
                .id(prendaDto.getId())
                .nombre(prendaDto.getNombre())
                .descripcion(prendaDto.getDescripcion())
                .imagenUrl(prendaDto.getImagenUrl())
                .marca(marca)
                .talla(talla)
                .categoria(categoria)
                .proveedor(proveedor)
                .precio(prendaDto.getPrecio())
                .stock(prendaDto.getStock())
                .activo(prendaDto.getActivo())
                .createdAt(prendaDto.getCreatedAt() != null ? prendaDto.getCreatedAt() : LocalDateTime.now())
                .build();
        return prendaDao.save(prenda);
    }

    @Transactional
    @Override
    public void deletePrenda(Prenda prenda) {
        prendaDao.delete(prenda);
    }

    @Override
    public boolean existsById(Long id) {
        return prendaDao.existsById(id);
    }
}
