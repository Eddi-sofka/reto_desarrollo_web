package com.sofka.Software.controller;

import com.sofka.Software.models.ListModel;
import com.sofka.Software.services.ListService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@Slf4j
@CrossOrigin
@RestController
public class ListController {
    @Autowired
    private ListService listService;

    @GetMapping(value = "/list")
    public Iterable<ListModel> list(){
        return listService.list();
    }

    @PostMapping(value = "/list")
    public ListModel createList(@RequestBody ListModel lista){
        return listService.createList(lista);
    }

     @DeleteMapping(value = "/list/{id}")
     public void deleteTask(@PathVariable("id")Long id){
        listService.deleteTask(id);
     }
}
