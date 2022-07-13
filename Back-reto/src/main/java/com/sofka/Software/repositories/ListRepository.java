package com.sofka.Software.repositories;

import com.sofka.Software.models.ListModel;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * Implementa JpaRepository en lugar de CrudRepository !!Important¡¡¡¡
 * */
public interface ListRepository extends CrudRepository<ListModel, Long > {
}
