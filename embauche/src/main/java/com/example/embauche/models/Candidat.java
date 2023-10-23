package com.example.embauche.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Candidat {
    @Id
    @GeneratedValue
    private Integer id;
    private String nom;
    private String prenom;
    private String post;
    private Integer salaire;
    private String email;

}
