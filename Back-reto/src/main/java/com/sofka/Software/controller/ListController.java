package com.sofka.Software.controller;

import com.sofka.Software.models.ListModel;
import com.sofka.Software.services.ListService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@Slf4j
@CrossOrigin(origins = {"http://localhost:5501/", "http://127.0.0.1:5501/"})
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

    public ListService getListService() {
        return listService;
    }

    public void setListService(ListService listService) {
        this.listService = listService;
    }
}
