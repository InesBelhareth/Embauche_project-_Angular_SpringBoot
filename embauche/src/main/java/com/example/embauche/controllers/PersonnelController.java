package com.example.embauche.controllers;

import com.example.embauche.models.Personnel;
import com.example.embauche.response.Message;
import com.example.embauche.services.PersonnelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class PersonnelController {
    @Autowired
    PersonnelService personnelService;
    @GetMapping("/afficherpersonnel")
    public List<Personnel> afficherPersonnel()
    {
        return personnelService.afficherPersonnel();
    }
    @PostMapping("/ajouterpersonnel")
    public Message ajouterpersonnel(@RequestBody Personnel personnel)
    {
        return   personnelService.ajouterpersonnel(personnel);

    }

}
