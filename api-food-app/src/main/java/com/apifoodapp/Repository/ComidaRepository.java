package com.apifoodapp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.apifoodapp.Model.Comida;

public interface ComidaRepository extends JpaRepository<Comida, Long> {

    @Query(value = "select c from Comida c where c.nome like %?1%")
    List<Comida> findByNome(String nome);

}
