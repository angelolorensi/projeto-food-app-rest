package com.apifoodapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.apifoodapp.Model.Comida;
import com.apifoodapp.Service.ComidaService;

@RestController
@RequestMapping("/api/comida")
public class ComidaController {

    @Autowired
    private ComidaService comidaService;

    @GetMapping("/")
    public List<Comida> buscarTodos() {
        return comidaService.buscarTodos();
    }

    @GetMapping("/{id}")
    public Comida buscarPorId(@PathVariable Long id) {
        return comidaService.buscarComidaPorId(id);
    }

    @GetMapping
    public List<Comida> buscarPorNome(@RequestParam(value = "nome") String nome) {
        return comidaService.buscarComidaPorNome(nome);
    }

    @PostMapping("/")
    public Comida inserir(@RequestBody Comida comida) {
        return comidaService.inserir(comida);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        comidaService.excluir(id);
        return ResponseEntity.ok().build();
    }

}
