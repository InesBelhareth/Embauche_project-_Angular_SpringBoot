package com.example.embauche.repositorys;

import com.example.embauche.controllers.CandidatController;
import com.example.embauche.models.Candidat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidatRepository extends JpaRepository<Candidat,Integer> {
}
