package com.example.embauche.services;

import com.example.embauche.models.Candidat;
import com.example.embauche.repositorys.CandidatRepository;
import com.example.embauche.response.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidatService {
    @Autowired
    private CandidatRepository candidatRepository;

    public List<Candidat> afficherCandidat() {
        return this.candidatRepository.findAll();
    }
}
