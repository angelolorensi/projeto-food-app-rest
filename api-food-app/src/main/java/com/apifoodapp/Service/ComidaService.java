package com.apifoodapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.apifoodapp.Model.Comida;
import com.apifoodapp.Repository.ComidaRepository;

@Service
public class ComidaService {

    @Autowired
    private ComidaRepository comidaRepository;

    public List<Comida> buscarTodos() {
        return comidaRepository.findAll();
    }

    public Comida buscarComidaPorId(Long id) {
        return comidaRepository.findById(id).get();
    }

    public List<Comida> buscarComidaPorNome(String nome) {
        return comidaRepository.findByNome(nome);
    }

    public Comida inserir(Comida comida) {
        return comidaRepository.saveAndFlush(comida);
    }

    public void excluir(Long id) {
        comidaRepository.deleteById(id);
    }

}
