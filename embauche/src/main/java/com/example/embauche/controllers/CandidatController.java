package com.example.embauche.controllers;

import com.example.embauche.models.Candidat;
import com.example.embauche.response.Message;
import com.example.embauche.services.CandidatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class CandidatController {
    @Autowired
    private CandidatService candidatService;
    @GetMapping("/afficherCandidat")
    public List<Candidat> afficherCandidat()
    {return this.candidatService.afficherCandidat();}
}
